import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OldPasswordValidators } from './oldPassword.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form = new FormGroup({

      oldPassword: new FormControl('', [
        Validators.required
      ], OldPasswordValidators.matchPassword),
      newPassword: new FormControl('', [
        Validators.required
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ])

  });

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  checkMatch(){     
    if(this.newPassword.value != this.confirmPassword.value) {
        this.confirmPassword.setErrors({
          noMatch: true
        });
      }
    }
    

}
