import {inject, Injectable} from "@angular/core";
import {SecurityStore} from "./security-store";
import {Router} from "@angular/router";

@Injectable({providedIn: "root"})
export class AuthGuard {
  securityStore = inject(SecurityStore);
  router = inject(Router);

  async canActivate():Promise<boolean> {

    if (!this.securityStore.loaded()) {
      await this.waitForUserLoad();
    }

    if (this.securityStore.signedIn()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

  private async waitForUserLoad(): Promise<void> {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (this.securityStore.loaded()) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  }
}
