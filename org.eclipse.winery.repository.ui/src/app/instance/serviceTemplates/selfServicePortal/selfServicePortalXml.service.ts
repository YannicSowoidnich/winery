/**
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Niko Stadelmaier - initial API and contribution
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { InstanceService } from '../../instance.service';
import { backendBaseURL } from '../../../configuration';

@Injectable()
export class SelfServicePortalXmlService {

    private path: string;

    constructor(private http: Http,
                private sharedData: InstanceService) {
        this.path = this.sharedData.path;
    }

    getXmlData(): Observable<string> {
        const headers = new Headers({'Accept': 'text/xml'});
        const options = new RequestOptions({headers: headers});

        return this.http.get(backendBaseURL + this.path + '/selfserviceportal/', options)
            .map(res => res.text());
    }

    saveXmlData(xmlData: String): Observable<any> {
        const headers = new Headers({'Content-Type': 'text/xml'});
        const options = new RequestOptions({headers: headers});

        return this.http.put(backendBaseURL + this.path + '/selfserviceportal/', xmlData, options);
    }
}
