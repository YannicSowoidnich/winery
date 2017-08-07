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
import {PaletteItem} from './paletteItem.model';
import {Action} from 'redux';
import {CREATE_PALETTEITEM, CreatePaletteItemAction} from './paletteItem.actions';

export interface PaletteItemState {
  currentPaletteItemState: PaletteItem;
}

const initialState: PaletteItemState = {
  currentPaletteItemState: null
};

export const getPaletteItemState = (state): PaletteItemState => state.paletteItem.currentPaletteItemState;

export const PaletteItemReducer =
  function (state: PaletteItemState = initialState, action: Action): PaletteItemState {
  switch (action.type) {
    case CREATE_PALETTEITEM:
    const paletteItem: PaletteItem = (<CreatePaletteItemAction>action).paletteItem;
      return {
        currentPaletteItemState: paletteItem
      };
    default:
      return state;
  }
  };
