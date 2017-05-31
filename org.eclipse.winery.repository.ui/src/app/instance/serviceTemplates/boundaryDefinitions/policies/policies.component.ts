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
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoliciesService, WineryPolicy } from './policies.service';
import { WineryNotificationService } from '../../../../wineryNotificationModule/wineryNotification.service';
import { WineryTableColumn } from '../../../../wineryTableModule/wineryTable.component';
import { ModalDirective } from 'ngx-bootstrap';
import { isNullOrUndefined } from 'util';
import { WineryValidatorObject } from '../../../../wineryValidators/wineryDuplicateValidator.directive';
import { SelectItem } from 'ng2-select';

@Component({
    templateUrl: 'policies.component.html',
    providers: [
        PoliciesService
    ]
})
export class PoliciesComponent implements OnInit {

    loading = true;
    loadingTemplate = false;
    policies: Array<WineryPolicy> = [];
    newPolicy: WineryPolicy = new WineryPolicy();
    policyTypes: Array<SelectItem> = [];
    policyTemplates: Array<SelectItem> = [];
    activePolicyType: SelectItem = new SelectItem('');
    activePolicyTemplate: SelectItem = new SelectItem('');

    columnsArray: Array<WineryTableColumn> = [
        {title: 'Name', name: 'name'},
        {title: 'Type', name: 'policyType'},
        {title: 'Template', name: 'policyRef'}
    ];
    selectedCell: WineryPolicy;
    validator: WineryValidatorObject;
    @ViewChild('confirmDeleteModal') deleteModal: ModalDirective;
    @ViewChild('addModal') addModal: ModalDirective;

    constructor(private service: PoliciesService, private notify: WineryNotificationService) {

    }

    ngOnInit(): void {
        this.service.getPolicies()
            .subscribe(
                data => this.handlePolicies(data),
                error => this.handleError(error)
            );
        this.service.getPolicyTypes()
            .subscribe(
                data => this.policyTypes = data,
                error => this.handleError(error)
            );
    }

    add() {
        if (!isNullOrUndefined(this.policyTypes[0])) {
            this.newPolicy = new WineryPolicy();
            this.validator = new WineryValidatorObject(this.policies, 'name');
            this.activePolicyType = this.policyTypes[0].children[0];
            this.activePolicyTemplate = new SelectItem('');
            this.addModal.show();
            this.loadTemplates();
        } else {
            this.notify.warning('Please create a Policy Type first.', 'No Policy Types');
        }
    }

    selected(item: WineryPolicy) {
        this.selectedCell = item;
    }

    remove() {
        if (!isNullOrUndefined(this.selectedCell)) {
            this.deleteModal.show();
        } else {
            this.notify.warning('You need to select a row to remove!', 'Nothing selected');
        }
    }

    addConfirmed() {
        //
    }

    removeConfirmed() {
        //
    }

    policyTypeSelected(data: SelectItem) {
        this.activePolicyType = data;
        this.loadTemplates();
    }

    policyTemplateSelected(data: SelectItem) {
        this.activePolicyTemplate = data;
    }

    private loadTemplates() {
        this.loadingTemplate = true;
        this.service.getPolicyTemplatesForType(this.activePolicyType)
            .subscribe(
                d => this.handleTemplates(d),
                error => this.handleError(error)
            );
    }

    private handlePolicies(data: WineryPolicy[]) {
        this.loading = false;
        this.policies = data;
    }

    private handleTemplates(data: SelectItem[]) {
        this.policyTemplates = data;
        this.loadingTemplate = false;
    }

    private handleError(error: any) {
        this.loading = false;
        this.notify.error(error);
    }

}
