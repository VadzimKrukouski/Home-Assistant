import {HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";
import {SecurityStore} from "./security-store";

export const securityInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloakService = inject(SecurityStore);

  keycloakService.checkToken();
  const bearer = keycloakService.user()?.bearer;

  if (!bearer) {
    return next(req);
  }

  return next(
    req.clone({
      headers: req.headers.set("Authorization", `Bearer ${bearer}`),
    })
  );
};
