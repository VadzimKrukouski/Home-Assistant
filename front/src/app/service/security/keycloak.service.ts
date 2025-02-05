import {Injectable} from "@angular/core";
import Keycloak from 'keycloak-js';

export interface UserProfile {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  token: string;
}

@Injectable({providedIn: "root"})
export class KeycloakService {
  keycloak?: Keycloak;
  profile: UserProfile | undefined;

  async init() {
    if (!this.keycloak) {
      this.keycloak = new Keycloak({
        url: "http://localhost:8484",
        realm: "ha-realm",
        clientId: "ha"
      });
    }
    const authenticated = await this.keycloak.init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri: window.location.origin + "/assets/silent-check-sso.html"
    });

    if (!authenticated) {
      return false;
    }
    this.profile = (await this.keycloak.loadUserInfo()) as unknown as UserProfile;
    this.profile.token = this.keycloak.token || "";

    return true;
  }

  login(redirectPath: string = "/start") {
    return this.keycloak?.login({redirectUri: window.location.origin + redirectPath});
  }

  logout() {
    return this.keycloak?.logout({redirectUri: window.location.origin});
  }

  async updateTokenIfNeeded(): Promise<string | null> {
    if (!this.keycloak?.token) {
      await this.logout();
      return null;
    }

    const tokenExpiryTime = this.keycloak.tokenParsed?.exp ?? 0;
    const currentTime = Math.floor(Date.now() / 1000);

    if (tokenExpiryTime - currentTime < 60) {
      try {
        const refreshed = await this.keycloak.updateToken(30);
        if (refreshed) {
          return this.keycloak.token || null
        }
      } catch (error) {
        await this.logout()
      }
    }
    return null;

  }

}
