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

  /**
   * Boolean variables that hold the state {pressed vs. !pressed} of the navbar buttons.
   * @type {boolean}
   */
  targetLocationsPressed = false;
  policiesPressed = false;
  requirementsCapabilitiesPressed = false;
  deploymentArtifactsPressed = false;
  propertiesPressed = false;
  typesPressed = true;
  idsPressed = true;

  constructor(private alert: WineryAlertService, private _sharedNodeNavbarService: SharedNodeNavbarService) {
    /*    this._sharedNodeNavbarService.targetLocationsVisible$.subscribe(
     state => {
     console.log('Sibling1Component-received from sibling2: ' + state);
     if (!(state === false)) { this.targetLocationsPressed = true; }
     });*/

  }

  getStyle(thisButtonIsPressed: boolean): string {
    if (thisButtonIsPressed) {
      return 'lightgrey';
    }
  }

  /**
   * This function is called whenever a navbar button is clicked.
   * It contains a separate case for each button.
   * It toggles the `pressed` state of a button and publishes the respective
   * button {id and boolean} to the subscribers of the Observable inside
   * SharedNodeNavbarService.
   * @param event -- The click event of a button.
   */
  toggleButton(event) {
    switch (event.target.id) {
      case 'targetLocations': {
        this.targetLocationsPressed = !this.targetLocationsPressed;
        this._sharedNodeNavbarService.publishButtonState(event.target.id, this.targetLocationsPressed);
        break;
      }
      case 'policies': {
        this.policiesPressed = !this.policiesPressed;
        this._sharedNodeNavbarService.publishButtonState(event.target.id, this.policiesPressed);
        break;
      }
      case 'requirementsCapabilities': {
        this.requirementsCapabilitiesPressed = !this.requirementsCapabilitiesPressed;
        this._sharedNodeNavbarService.publishButtonState(event.target.id, this.requirementsCapabilitiesPressed);
        break;
      }
      case 'deploymentArtifacts': {
        this.deploymentArtifactsPressed = !this.deploymentArtifactsPressed;
        this._sharedNodeNavbarService.publishButtonState(event.target.id, this.deploymentArtifactsPressed);
        break;
      }
      case 'properties': {
        this.propertiesPressed = !this.propertiesPressed;
        this._sharedNodeNavbarService.publishButtonState(event.target.id, this.propertiesPressed);
        break;
      }
      case 'types': {
        this.typesPressed = !this.typesPressed;
        this._sharedNodeNavbarService.publishButtonState(event.target.id, this.typesPressed);
        break;
      }
      case 'ids': {
        this.idsPressed = !this.idsPressed;
        this._sharedNodeNavbarService.publishButtonState(event.target.id, this.idsPressed);
        break;
      }
    }
  }

  public showSaveAlert(): void {
    this.alert.success('Successfully saved!');
  }

  ngOnInit() {
  }
}
