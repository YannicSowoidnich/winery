/**
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Thommy Zelenik - initial API and implementation
 */
import {PaletteStatus} from './paletteState.model';
import {Action} from 'redux';
import {SEND_PALETTESTATUS, SendPaletteStatusAction} from './paletteState.actions';

export interface PaletteStatusState {
  currentPaletteState: PaletteStatus;
}

const initialState: PaletteStatusState = {
  currentPaletteState: null
};

export const PaletteStateReducer =
  function (state: PaletteStatusState = initialState, action: Action): PaletteStatusState {
  switch (action.type) {
    case SEND_PALETTESTATUS:
    const paletteStatus = (<SendPaletteStatusAction>action).paletteStatus;
      return {
        currentPaletteState: paletteStatus
      };
    default:
      return state;
  }
  };
