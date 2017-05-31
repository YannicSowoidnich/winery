/**
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Niko Stadelmaier - initial API and implementation
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { SelfServicePortalXmlService } from './selfServicePortalXml.service';
import { WineryNotificationService } from '../../../wineryNotificationModule/wineryNotification.service';


declare var requirejs: any;

@Component({
    selector: 'winery-selfservice-edit-xml',
    templateUrl: 'selfServicePortalXml.component.html',
    providers: [SelfServicePortalXmlService]
})
export class SelfServicePortalXmlComponent implements OnInit {


    @ViewChild('editor') editor: any;
    loading = true;

    id = 'XML';
    dataEditorLang = 'application/xml';

    // Set height to 500 px
    height = 500;
    xmlData: string;

    constructor(private service: SelfServicePortalXmlService,
                private notify: WineryNotificationService) {
    }

    ngOnInit() {
        this.service.getXmlData()
            .subscribe(
                data => this.handleXmlData(data),
                error => this.handleError(error)
            );
    }

    saveXmlData(): void {
        this.service.saveXmlData(this.editor.getData())
            .subscribe(
                data => this.handlePutResponse(data),
                error => this.handleError(error)
            );
        this.loading = true;
    }

    private handleXmlData(xml: string) {
        this.loading = false;
        this.xmlData = xml;
    }

    private handleError(error: any): void {
        this.loading = false;
        this.notify.error(error.toString());
    }

    private handlePutResponse(response: any) {
        this.loading = false;
        this.notify.success('Successfully saved data!');
    }

}
