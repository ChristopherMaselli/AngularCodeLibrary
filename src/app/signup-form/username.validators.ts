import { AbstractControl, ValidationErrors } from '@angular/forms';

//UsernameValidators.cannotContainSpace  <--How to call it outside static method
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'mosh') 
                    resolve({ shouldBeUnique: true });
                else resolve(null);
             }, 2000);
        })
    }
        // return { minlength: {
        //     requiredLength: 10,
        //     actualLength: control.value.length
        // }}
   
}