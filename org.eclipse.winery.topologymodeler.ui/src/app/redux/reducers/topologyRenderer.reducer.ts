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
import { Action } from 'redux';
import { ButtonActions } from '../actions/topologyRenderer.actions';

export interface ButtonsState {
  buttonsState: {
    targetLocationsButton?: boolean;
    policiesButton?: boolean;
    requirementsCapabilitiesButton?: boolean;
    deploymentArtifactsButton?: boolean;
    propertiesButton?: boolean;
    typesButton?: boolean;
    idsButton?: boolean;
  };
}

export const INITIAL_BUTTONS_STATE: ButtonsState = {
  buttonsState: {
    targetLocationsButton: false,
    policiesButton: false,
    requirementsCapabilitiesButton: false,
    deploymentArtifactsButton: false,
    propertiesButton: false,
    typesButton: true,
    idsButton: true
  }
};

export const ButtonsStateReducer =
  function (lastState: ButtonsState = INITIAL_BUTTONS_STATE, action: Action): ButtonsState {
    switch (action.type) {
      case ButtonActions.TOGGLE_POLICIES:
        // console.log({...lastState, buttonsState: { ...lastState.buttonsState, policiesButton: !lastState.buttonsState.policiesButton}});
        return {
          ...lastState,
          buttonsState: {...lastState.buttonsState,
            policiesButton: !lastState.buttonsState.policiesButton}
        };
      case ButtonActions.TOGGLE_TARGET_LOCATIONS:
        return {
          ...lastState,
          buttonsState: {...lastState.buttonsState,
            targetLocationsButton: !lastState.buttonsState.targetLocationsButton}
        };
      case ButtonActions.TOGGLE_PROPERTIES:
        return {
          ...lastState,
          buttonsState: {...lastState.buttonsState,
            propertiesButton: !lastState.buttonsState.propertiesButton}
        };
      case ButtonActions.TOGGLE_REQUIREMENTS_CAPABILITIES:
        return {
          ...lastState,
          buttonsState: {
            ...lastState.buttonsState,
            requirementsCapabilitiesButton: !lastState.buttonsState.requirementsCapabilitiesButton
          }
        };
      case ButtonActions.TOGGLE_DEPLOYMENT_ARTIFACTS:
        return {
          ...lastState,
          buttonsState: {
            ...lastState.buttonsState,
            deploymentArtifactsButton: !lastState.buttonsState.deploymentArtifactsButton
          }
        };
      case ButtonActions.TOGGLE_IDS:
        return {
          ...lastState,
          buttonsState: {...lastState.buttonsState,
            idsButton: !lastState.buttonsState.idsButton}};
      case ButtonActions.TOGGLE_TYPES:
        return {
          ...lastState,
          buttonsState: {...lastState.buttonsState,
            typesButton: !lastState.buttonsState.typesButton}
        };
    }
    return lastState;
  };
