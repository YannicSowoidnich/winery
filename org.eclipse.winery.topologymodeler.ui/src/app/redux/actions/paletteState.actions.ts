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
import {Action, ActionCreator} from 'redux';

export const SEND_PALETTESTATUS = 'SEND_PALETTESTATUS';
export interface SendPaletteStatusAction extends Action {
  paletteOpened: boolean;
}
export const sendPaletteStatus: ActionCreator<SendPaletteStatusAction> =
  (paletteOpened) => ({
    type: SEND_PALETTESTATUS,
    paletteOpened: paletteOpened
  });
