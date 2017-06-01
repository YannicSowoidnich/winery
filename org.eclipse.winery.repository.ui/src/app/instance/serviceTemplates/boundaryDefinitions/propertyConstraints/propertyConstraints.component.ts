/**
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Lukas Balzer - initial API and implementation
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { PropertyConstraintsService } from './propertyConstraints.service';
import { PropertyConstraintApiData } from './propertyConstraintApiData';
import { ConstraintTypeApiData } from './constraintTypesApiData';
import { WineryValidatorObject } from '../../../../wineryValidators/wineryDuplicateValidator.directive';
import { WineryNotificationService } from '../../../../wineryNotificationModule/wineryNotification.service';

@Component({
    selector: 'winery-instance-boundary-properties',
    templateUrl: 'propertyConstraints.component.html',
    providers: [
        PropertyConstraintsService
    ]
})
export class PropertyConstraintsComponent implements OnInit {
    loading = true;
    loadCount = 0;
    propertyConstraints: PropertyConstraintApiData[] = [];
    newConstraint: PropertyConstraintApiData = new PropertyConstraintApiData();
    selectedCell: PropertyConstraintApiData;
    constraintTypes: ConstraintTypeApiData[] = [];
    columns: Array<any> = [
        {title: 'Service Template Property', name: 'property', sort: true},
        {title: 'Constraint Type', name: 'constraintType', sort: true},
        {title: 'Constraint', name: 'fragments', sort: true}
    ];
    @ViewChild('confirmDeleteModal') deleteModal: any;
    @ViewChild('addModal') addModal: any;
    validatorObject: WineryValidatorObject;

    constructor(private service: PropertyConstraintsService,
                private notify: WineryNotificationService) {
    }

    ngOnInit() {
        this.getConstraints();
        this.getConstraintTypes();
    }

    // region ######## table methods ########
    onCellSelected(data: any) {
        if (!isNullOrUndefined(data)) {
            this.selectedCell = data.row;
        }
    }

    onAddClick() {
        this.validatorObject = new WineryValidatorObject(this.propertyConstraints, 'property');
        this.newConstraint = new PropertyConstraintApiData();
        this.addModal.show();
    }

    addNewConstraint() {
        this.addLoad();
        this.service.postConstraint(this.newConstraint).subscribe(
            data => this.handlePostResponse(data),
            error => this.handleError(error)
        );
    }

    onRemoveClick(data: any) {
        if (isNullOrUndefined(data)) {
            return;
        } else {
            this.deleteModal.show();
        }
    }

    removeConfirmed() {
        this.deleteModal.hide();
        this.addLoad();
        this.service.deleteConstraints(this.selectedCell).subscribe(
            data => this.handleDeleteResponse(data),
            error => this.handleError(error)
        );
    }

    private getConstraints() {
        this.addLoad();
        this.service.getConstraints().subscribe(
            data => this.handleData(data),
            error => this.handleError(error)
        );
    }

    private getConstraintTypes() {
        this.addLoad();
        this.service.getConstraintTypes().subscribe(
            data => this.handleConstraintsData(data),
            error => this.handleError(error)
        );
    }

    handlePostResponse(data: any) {
        this.decreaseLoad();
        if (data.ok) {
            this.getConstraints();
            this.notify.success('Created new Property Constraint');
        } else {
            this.notify.error('Failed to create Property Constraint');
        }
    }

    handleDeleteResponse(data: any) {
        this.decreaseLoad();
        if (data.ok) {
            this.getConstraints();
            this.notify.success('Deleted Property Constraint');
        } else {
            this.notify.error('Failed to delete Property Constraint');
        }
    }

    private handleData(data: PropertyConstraintApiData[]) {
        this.propertyConstraints = data;
        for (let i = 0; i < data.length; i++) {
            this.propertyConstraints[i].fragments = '[Not implemented yet]';
        }

        this.decreaseLoad();
    }

    private handleConstraintsData(data: ConstraintTypeApiData[]) {
        this.constraintTypes = data;
        this.decreaseLoad();
    }

    private handleError(error: any): void {
        this.decreaseLoad();
        this.notify.error('Action caused an error:\n', error);
    }

    private addLoad() {
        this.loadCount++;
        this.loading = true;
    }

    private decreaseLoad() {
        this.loadCount--;
        if (this.loadCount <= 0) {
            this.loading = false;
            this.loadCount = 0;
        }
    }
}
