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
import { Action } from 'redux';
import { SEND_PALETTESTATUS, SendPaletteStatusAction } from '../actions/paletteState.actions';

export interface PaletteOpenedState {
  currentPaletteOpened: boolean;
}

const initialState: PaletteOpenedState = {
  currentPaletteOpened: false
};

export const getPaletteOpened = (state): PaletteOpenedState => state;

export const paletteOpenedReducer =
  function (state: PaletteOpenedState = initialState, action: Action): PaletteOpenedState {
    switch (action.type) {
      case SEND_PALETTESTATUS:
        const paletteOpened = (<SendPaletteStatusAction>action).paletteOpened;
        return {
          currentPaletteOpened: paletteOpened
        };
      default:
        return state;
    }
  };

export default paletteOpenedReducer;
