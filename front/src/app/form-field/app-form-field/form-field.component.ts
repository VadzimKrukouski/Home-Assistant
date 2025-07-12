import {AfterContentInit, Component, ContentChild, Input} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements AfterContentInit {
  @Input() label: string = '';
  @Input() submitted: boolean = false;

  @ContentChild(NgModel) model?: NgModel;

  get control() {
    return this.model;
  }

  ngAfterContentInit(): void {
  }

}
