import { Component } from '@angular/core';

@Component({
  selector: 'topbar',
  template: `<div id="topbar">
		            <button class="btn btn-success topbutton" id="saveBtn">Save</button>
                <div class="btn-group">
                  <button class="btn btn-default" onclick="doLayout();">Layout</button>
                  <button class="btn btn-default" onclick="horizontalAlignment();">Align-h (|)</button>
                  <button class="btn btn-default" onclick="verticalAlignment();">Align-v (-)</button>
                </div>

                <div class="btn-group" id="toggleButtons">
                  <button class="btn btn-default" id="toggleIdVisibility">Ids</button>
                  <button class="btn active" id="toggleTypeVisibility">Types</button>
                  <button class="btn btn-default" id="togglePropertiesVisibility">Properties</button>
                  <button class="btn btn-default" id="toggleDeploymentArtifactsVisibility">Deployment Artifacts</button>
                  <button class="btn btn-default" id="toggleReqCapsVisibility">Requirements &amp; Capabilities</button>
                  <button class="btn btn-default" id="PoliciesVisibility">Policies</button>
                  <button class="btn btn-default" id="TargetLocationsVisibility">Target Locations</button>
                </div>
                
		            <button data-toggle="button" class="btn btn-default">Print View</button>

		            <button class="btn btn-default" id="splitBtn">Split</button>

		            <button class="btn btn-default topbutton" id="importBtn">Import Topology</button>

                <div class="btn-group">
                  <button type="button" class="btn btn-default dropdown-toggle">Other <span class="caret"></span></button>
            
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Complete Topology</a></li>
                    <li><a id="exportCSARbtn" href="http://dev.winery.opentosca.org/winery/servicetemplates/http%253A%252F%252Fopentosca.org%252Fservicetemplates/FIWARE-Orion_Bare_Docker/topologytemplate/../?csar" target="_blank" data-original-title="" title="">Export CSAR</a></li>
                    <li><a href="#">about</a></li>
                  </ul>
                  
                </div>
            </div>
            `,
})
export class AppComponent  {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}
