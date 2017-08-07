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
import {Action, ActionCreator} from 'redux';

export const CREATE_PALETTEITEM = 'CREATE_PALETTEITEM';
export interface CreatePaletteItemAction extends Action {
  paletteItem: PaletteItem;
}
export const createPaletteItem: ActionCreator<CreatePaletteItemAction> =
  (paletteItem) => ({
    type: CREATE_PALETTEITEM,
    paletteItem: paletteItem
  });
