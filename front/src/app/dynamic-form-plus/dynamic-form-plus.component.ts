import {Component, Input, OnInit} from '@angular/core';
import {ControlService} from "../service/control.service";
import {Base} from "../models/base";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-plus',
  templateUrl: './dynamic-form-plus.component.html',
  styleUrls: ['./dynamic-form-plus.component.css'],
  providers: [ControlService]
})
export class DynamicFormPlusComponent implements OnInit {

  @Input() questions: Base<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: ControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as Base<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }


}
