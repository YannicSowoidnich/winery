/*******************************************************************************
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Lukas Balzer - initial API and implementation
 *******************************************************************************/
package org.eclipse.winery.repository.resources.apiData;

import javax.ws.rs.core.Response;

import org.eclipse.winery.common.RepositoryFileReference;
import org.eclipse.winery.common.ids.definitions.NodeTypeId;
import org.eclipse.winery.repository.backend.Repository;
import org.eclipse.winery.repository.backend.constants.Filename;
import org.eclipse.winery.repository.datatypes.ids.elements.VisualAppearanceId;
import org.eclipse.winery.repository.resources.entitytypes.nodetypes.VisualAppearanceResource;

public class NodeTypesVisualsApiData {

	public String iconUrl;
	public String imageUrl;
	public String color;

	public NodeTypesVisualsApiData(VisualAppearanceResource visuals) {
		this.color = visuals.getBorderColor();

		RepositoryFileReference iconRef = new RepositoryFileReference(visuals.getId(), Filename.FILENAME_SMALL_ICON);
		if (Repository.INSTANCE.exists(iconRef)) {
			iconUrl = visuals.getAbsoluteURL() + "/16x16";
		}

		RepositoryFileReference imageRef = new RepositoryFileReference(visuals.getId(), Filename.FILENAME_BIG_ICON);
		if (Repository.INSTANCE.exists(imageRef)) {
			imageUrl = visuals.getAbsoluteURL() + "/50x50";
		}
	}

	public NodeTypesVisualsApiData () {
	}
 }
