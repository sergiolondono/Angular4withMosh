import { AbstractControl, ValidationErrors } from "@angular/forms";


export class OldPasswordValidators {
    static matchPassword(control: AbstractControl): Promise<ValidationErrors> | null{
        return new Promise((resolve, reject) => {
                if (control.value !== '1234')
                    resolve ({ matchPassword: true});
                else
                    resolve(null);                
        });
    }

}