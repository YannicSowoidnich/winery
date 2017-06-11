import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedNodeNavbarService {

  /**
   * Navbar Button States
   * @type {Subject<any>}
   * @private
   */
  private _buttonStates = new Subject<any>();
  // Create Observable
  buttonStates$ = this._buttonStates.asObservable();

  constructor() { }

  // Service message commands
  publishButtonState(buttonID: string, state: boolean) {
    this._buttonStates.next({
      buttonID: buttonID,
      state: state
    });
  }

}
