import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An unexpected error occured.');
        console.log(error); //Usually would store this value on a database on the server 
    }

}