import {computed, inject, Injectable, PLATFORM_ID, signal} from "@angular/core";
import {KeycloakService} from "./keycloak.service";
import {ANONYMOUS_USER, User} from "./models";
import {isPlatformServer} from "@angular/common";
import {Router} from "@angular/router";

@Injectable({providedIn: "root"})
export class SecurityStore {
  #keycloakService = inject(KeycloakService);
  #router = inject(Router);

  loaded = signal(false)
  user = signal<User | undefined>(undefined);

  loadedUser = computed(() => (this.loaded() ? this.user() : undefined));
  signedIn = computed(() => this.loaded() && !this.user()?.anonymous);

  constructor() {
    this.onInit();
  }

  async onInit() {
    if (this.loaded()) {
      return;
    }
    const isServer = isPlatformServer(inject(PLATFORM_ID));
    const keycloakService = inject(KeycloakService);
    if (isServer) {
      this.user.set(ANONYMOUS_USER);
      this.loaded.set(true);
      return;
    }

    const isLoggedIn = await keycloakService.init();
    if (isLoggedIn && keycloakService.profile) {
      const {sub, email, given_name, family_name, token} = keycloakService.profile;
      const user = {
        id: sub,
        email,
        name: `${given_name} ${family_name}`,
        anonymous: false,
        bearer: token,
      };
      this.user.set(user);
      this.loaded.set(true);
    } else {
      this.user.set(ANONYMOUS_USER);
      this.loaded.set(true);
    }
  }

  async checkToken() {
    const newToken = await this.#keycloakService.updateTokenIfNeeded();
    if (newToken) {
      this.updateUserToken(newToken);
    }
  }

  updateUserToken(newToken: string) {
    const currentUser = this.user();
    if (!currentUser) {
      return;
    }

    this.user.set({
      ...currentUser, // Сохраняем текущие данные
      bearer: newToken, // Обновляем токен
    });
  }

  async signIn() {
    await this.#keycloakService.login('/start');
  }

  async signOut() {
    await this.#keycloakService.logout();
    await this.#router.navigate(['/']);
  }
}
