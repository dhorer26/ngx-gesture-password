import { Component, ViewEncapsulation } from '@angular/core';

import { ERR } from 'ngx-gesture-password';

import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  pwd = '1236';
  type = 'check';
  switchState = true;
  Router: any;

  onChecked(data: any) {
    console.log('onChecked', data);
    switch (data.err) {
      case ERR.NOT_ENOUGH_POINTS:
        console.log('NOT ENOUGH POINTS');
        break;
      case ERR.PASSWORD_MISMATCH:
        console.log('PASSWORD MISMATCH');
        break;
      default:
        console.log('SUCCESS');
        window.location.href = 'https://stackoverflow.com';
        break;
    }
  }
}
