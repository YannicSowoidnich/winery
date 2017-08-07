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
 *
 * A PaletteItem represents a node type which was selected from the palette by clicking on the palette item
 */
export interface PaletteItem {
  name: string;
  mousePositionX: string;
  mousePositionY: string;
}
