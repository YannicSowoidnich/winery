/*******************************************************************************
 * Copyright (c) 2012-2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Oliver Kopp - initial API and implementation
 *******************************************************************************/
package org.eclipse.winery.repository.resources.entitytypes.nodetypes;

import java.util.List;
import java.util.SortedSet;
import java.util.stream.Collectors;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;

import org.eclipse.winery.common.ids.definitions.NodeTypeId;
import org.eclipse.winery.repository.backend.Repository;
import org.eclipse.winery.repository.resources.AbstractComponentsResource;
import org.eclipse.winery.repository.resources.AbstractComponentsWithoutTypeReferenceResource;
import org.eclipse.winery.repository.resources.apiData.NodeTypesVisualsApiData;

/**
 * Manages all nodetypes in all available namespaces <br />
 * The actual implementation is done in the AbstractComponentsResource
 */
public class NodeTypesResource extends AbstractComponentsWithoutTypeReferenceResource<NodeTypeResource> {

	@GET
	@Produces("application/json+visualappearance")
	public List<NodeTypesVisualsApiData> getVisualAppearanceList() {
		SortedSet<NodeTypeId> allNodeTypeIds = Repository.INSTANCE.getAllTOSCAComponentIds(NodeTypeId.class);
		return allNodeTypeIds.stream()
				.map(id -> {
					NodeTypeResource res = (NodeTypeResource) AbstractComponentsResource.getComponentInstaceResource(id);
					return res.getVisualAppearanceResource().getJsonData();
				})
				.collect(Collectors.toList());
	}

}
