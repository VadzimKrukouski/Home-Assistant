import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {
  @Input() targetRoute: string = '/start';
  @Input() label: string = 'Back';

  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate([this.targetRoute])
  }
}
