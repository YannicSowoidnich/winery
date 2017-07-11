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
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WineryAlertService} from '../winery-alert/winery-alert.service';
import {LayoutDirective} from '../layout.directive';

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
  layoutPressed = false;
  targetLocationsPressed = false;
  policiesPressed = false;
  requirementsCapabilitiesPressed = false;
  deploymentArtifactsPressed = false;
  propertiesPressed = false;
  typesPressed = true;
  idsPressed = true;
  @Output() sendPressedNavbarTab = new EventEmitter();

  constructor(private alert: WineryAlertService) {
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
        const targetLocationsObject = {
          name: 'targetLocations',
          state: this.targetLocationsPressed
        };
        this.sendPressedNavbarTab.emit(targetLocationsObject);
        break;
      }
      case 'policies': {
        this.policiesPressed = !this.policiesPressed;
        const policiesObject = {
          name: 'policies',
          state: this.policiesPressed
        };
        this.sendPressedNavbarTab.emit(policiesObject);
        break;
      }
      case 'requirementsCapabilities': {
        this.requirementsCapabilitiesPressed = !this.requirementsCapabilitiesPressed;
        const requirementsCapabilitiesObject = {
          name: 'requirementsCapabilities',
          state: this.requirementsCapabilitiesPressed
        };
        this.sendPressedNavbarTab.emit(requirementsCapabilitiesObject);
        break;
      }
      case 'deploymentArtifacts': {
        this.deploymentArtifactsPressed = !this.deploymentArtifactsPressed;
        const deploymentArtifactsObject = {
          name: 'deploymentArtifacts',
          state: this.deploymentArtifactsPressed
        };
        this.sendPressedNavbarTab.emit(deploymentArtifactsObject);
        break;
      }
      case 'properties': {
        this.propertiesPressed = !this.propertiesPressed;
        const propertiesObject = {
          name: 'properties',
          state: this.propertiesPressed
        };
        this.sendPressedNavbarTab.emit(propertiesObject);
        break;
      }
      case 'types': {
        this.typesPressed = !this.typesPressed;
        const typesObject = {
          name: 'types',
          state: this.typesPressed
        };
        this.sendPressedNavbarTab.emit(typesObject);
        break;
      }
      case 'ids': {
        this.idsPressed = !this.idsPressed;
        const idsObject = {
          name: 'ids',
          state: this.idsPressed
        };
        this.sendPressedNavbarTab.emit(idsObject);
        break;
      }
      case 'layout': {
        this.layoutPressed = !this.layoutPressed;
        const layoutObject = {
          name: 'layout',
          state: this.layoutPressed
        };
        this.sendPressedNavbarTab.emit(layoutObject);
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
