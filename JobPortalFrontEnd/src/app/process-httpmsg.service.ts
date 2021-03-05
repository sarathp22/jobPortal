import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() { }

  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error) {
      console.log(error);
      errMsg = error.error.err.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
    }

    return throwError(errMsg);
  }
}
