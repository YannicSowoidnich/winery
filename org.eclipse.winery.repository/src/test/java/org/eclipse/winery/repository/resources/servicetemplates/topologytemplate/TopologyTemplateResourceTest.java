/*******************************************************************************
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Niko Stadelmaier - initial API and implementation
 *******************************************************************************/
package org.eclipse.winery.repository.resources.servicetemplates.topologytemplate;

import org.eclipse.winery.repository.resources.AbstractResourceTest;
import org.junit.Test;

public class TopologyTemplateResourceTest extends AbstractResourceTest{

	@Test
	public void farmTopologyTemplateIsCorrectlyStored() throws Exception {
		this.setRevisionTo("2d35f0d3c15b384c53df10967164d97e4a7dd6f2");
		this.assertGet("servicetemplates/http%253A%252F%252Fwinery.opentosca.org%252Ftest%252Fservicetemplates%252Ffruits/farm/topologytemplate/", "entitytypes/servicetemplates/topologytemplate/farm_with_two_trees.json");
	}
}
