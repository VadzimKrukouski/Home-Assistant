import {Component, inject} from '@angular/core';
import {SecurityStore} from "../../service/security/security-store";
import {RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {

  securityStore = inject(SecurityStore);
  user = this.securityStore.user;
}
