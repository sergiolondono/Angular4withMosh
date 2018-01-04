import { AbstractControl, ValidationErrors } from "@angular/forms";


export class OldPasswordValidators {
    static matchPassword(control: AbstractControl){
        return new Promise((resolve, reject) => {
                if (control.value !== '1234')
                    resolve ({ matchPassword: true});
                else
                    resolve(null);                
        });
    }

    static passwordsShouldMatch(control: AbstractControl){
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value)
            return { passwordsShouldMatch: true };

        return null;
    }
}