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
import {combineReducers, Reducer} from 'redux';
import {PaletteItemReducer, PaletteItemState} from '../paletteItem/paletteItem.reducer';
import {PaletteStateReducer, PaletteStatusState} from '../paletteState/paletteState.reducer';

export interface AppState {
  paletteItem: PaletteItemState;
  paletteState: PaletteStatusState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  paletteItem: PaletteItemReducer,
  paletteState: PaletteStateReducer
});

export default rootReducer;
