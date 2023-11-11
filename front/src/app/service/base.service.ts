import {Injectable} from "@angular/core";
import {DropDown} from "../models/dropDown";
import {TextBox} from "../models/textbox";
import {Base} from "../models/base";
import {of} from "rxjs";

@Injectable()
export class BaseService {
  getQuestions() {
    const questions: Base<string>[] = [

      new DropDown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextBox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextBox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
