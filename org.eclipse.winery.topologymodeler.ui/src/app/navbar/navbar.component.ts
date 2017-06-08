/**
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Josip Ledic - initial API and implementation
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WineryAlertService} from '../winery-alert/winery-alert.service';
import {LayoutDirective} from '../layout.directive';
import {SharedNodeNavbarService} from '../shared-node-navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  buttonPressed = false;

  constructor(private alert: WineryAlertService, private _sharedNodeNavbarService: SharedNodeNavbarService) {
    this._sharedNodeNavbarService.visible$.subscribe(
      data => {
        console.log('Sibling1Component-received from sibling2: ' + data);
        if (!(data === 'false')) { this.buttonPressed = true; }
      });

  }

  onClick(): void {
    // console.log('Sibling1Component-received from sibling2: ' + this._sharedService.subscribeData());
    console.log('Form submitted-sibling1Form');
    this.buttonPressed = !this.buttonPressed;
    this._sharedNodeNavbarService.publishData('' + this.buttonPressed);
  }

  getStyle(): string {
    if (this.buttonPressed) {
      return 'lightgrey';
    }
  }

  public showSaveAlert(): void {
    this.alert.success('Successfully saved!');
  }

  ngOnInit() {
  }
}
