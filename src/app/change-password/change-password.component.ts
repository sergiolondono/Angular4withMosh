import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OldPasswordValidators } from './oldPassword.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  // form = new FormGroup({
  //     oldPassword: new FormControl('', [
  //       Validators.required
  //     ], OldPasswordValidators.matchPassword),
  //     newPassword: new FormControl('', [
  //       Validators.required
  //     ]),
  //     confirmPassword: new FormControl('', [
  //       Validators.required        
  //     ])
  // },OldPasswordValidators.passwordsShouldMatch);

  form: FormGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword:['', Validators.required, OldPasswordValidators.matchPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: OldPasswordValidators.passwordsShouldMatch
    });
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  // checkMatch(){     
  //   if(this.newPassword.value != this.confirmPassword.value) {
  //       this.confirmPassword.setErrors({
  //         noMatch: true
  //       });
  //     }
  //   }
    

}
