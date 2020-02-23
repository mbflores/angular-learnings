import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    username:  new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      UsernameValidator.cannotContainSpace
    ]),
    password:  new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ])
  });

  get username() {
    return this.form.get('username');
}
  get password() {
    return this.form.get('password');
  }
  constructor() { }

  ngOnInit() {
  }

}

export class UsernameValidator {

  static cannotContainSpace(control: AbstractControl): ValidationErrors {
    if ((control.value as string).indexOf(' ') >= 0 ) {
      return {cannotContainSpace: true};
    }
  }

}
