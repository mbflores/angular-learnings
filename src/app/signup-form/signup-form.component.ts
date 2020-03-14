import { Component, OnInit, ɵSWITCH_COMPILE_COMPONENT__POST_R3__ } from '@angular/core';
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
    ],UsernameValidator.shouldBeUnique),
    password:  new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ])
  });

  login() {
    console.log("logging in")
    this.form.setErrors({
      isNotValid: true
    });
  }

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
  
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    
    return new Promise((res,rej) => {
      setTimeout( () =>{
        console.log(control.value);
    
        if(control.value === 'melBryan'){
          res({shouldBeUnique: true}) ;
        }
        else
        {
          res(null);
        }
  
      },2000);
    });
  }

}
