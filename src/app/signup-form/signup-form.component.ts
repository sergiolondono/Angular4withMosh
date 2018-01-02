import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  formSignup = new FormGroup({
    account: new FormGroup({
        username: new FormControl('', [
        Validators.required,
        // Validators.minLength(3),
        // UsernameValidators.cannotContainSpace
      ],
      UsernameValidators.shouldBeUnique),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)      
      ])
    })    
  });

  login(){
    this.formSignup.setErrors({
      invalidLogin: true
    });
  }

  get username(){
    return this.formSignup.get('account.username');
  }

  get password(){
    return this.formSignup.get('account.password');
  }
}
