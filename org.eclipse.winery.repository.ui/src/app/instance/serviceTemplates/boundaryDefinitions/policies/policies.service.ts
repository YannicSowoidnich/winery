/**
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Lukas Harzenetter - initial API and implementation
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { WineryComponent } from '../../../../wineryInterfaces/wineryComponent';
import { backendBaseURL } from '../../../../configuration';
import { Observable } from 'rxjs/Observable';
import { SelectItem } from 'ng2-select';

@Injectable()
export class PoliciesService {

    private path: string;

    constructor(private http: Http,
                private route: Router) {
        this.path = decodeURIComponent(this.route.url);
    }

    getPolicies(): Observable<WineryPolicy[]> {
        return this.get(this.path);
    }

    getPolicyTypes(): Observable<SelectItem[]> {
        return this.get('/policytypes?grouped=angularSelect');
    }

    getPolicyTemplatesForType(pT: SelectItem): Observable<SelectItem[]> {
        const splittedQName = pT.id.slice(1).split('}');
        return this.get('/policytypes/' + encodeURIComponent(encodeURIComponent(splittedQName[0])) + '/' + pT.text + '/instances');
    }

    private get(p: string): Observable<any> {
        const headers = new Headers({'Accept': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this.http.get(backendBaseURL + p, options)
            .map(res => res.json());
    }
}

export class WineryPolicy extends WineryComponent {
    policyType: string;
    policyRef: string;
    id: string;
}
