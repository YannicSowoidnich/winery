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
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SectionResolverData } from '../wineryInterfaces/resolverData';
import { SelectData } from '../wineryInterfaces/selectData';
import { WineryNotificationService } from '../wineryNotificationModule/wineryNotification.service';
import { ValidatorObject } from '../wineryValidators/wineryDuplicateValidator.directive';
import { SectionService } from './section.service';
import { SectionData } from './sectionData';
import { backendBaseURL } from '../configuration';

const showAll = 'Show all Items';
const showGrouped = 'Group by Namespace';

@Component({
    selector: 'winery-section-component',
    templateUrl: 'section.component.html',
    styleUrls: [
        'section.component.css'
    ],
    providers: [
        SectionService,
    ]
})
export class SectionComponent implements OnInit, OnDestroy {

    loading = true;
    selectedResource: string;
    routeSub: Subscription;
    filterString = '';
    itemsPerPage = 10;
    showNamespace = 'all';
    changeViewButtonTitle: string = showGrouped;
    componentData: SectionData[];
    types: SelectData[];

    newComponentName: string;
    newComponentNamespace: string;
    newComponentSelectedType: SelectData = new SelectData();
    validatorObject: ValidatorObject;

    fileUploadUrl = backendBaseURL + '/';

    @ViewChild('addModal') addModal: any;
    @ViewChild('addComponentForm') addComponentForm: any;
    @ViewChild('addCsarModal') addCsarModal: any;

    constructor(private route: ActivatedRoute,
                private change: ChangeDetectorRef,
                private router: Router,
                private service: SectionService,
                private notify: WineryNotificationService) {
    }

    /**
     * @override
     *
     * Subscribe to the url on initialisation in order to get the corresponding resource type.
     */
    ngOnInit(): void {
        this.loading = true;
        this.routeSub = this.route
            .data
            .subscribe(
                data => this.handleResolverData(data),
                error => this.handleError(error)
            );
    }

    ngOnDestroy(): void {
        this.routeSub.unsubscribe();
    }

    onChangeView() {
        if (this.showNamespace === 'group') {
            this.changeViewButtonTitle = showGrouped;
            this.showNamespace = 'all';
        } else {
            this.changeViewButtonTitle = showAll;
            this.showNamespace = 'group';
        }
    }

    onAdd() {
        this.validatorObject = new ValidatorObject(this.componentData, 'id');

        // This is needed for the modal to correctly display the selected namespace
        this.newComponentNamespace = '';
        this.change.detectChanges();
        this.addComponentForm.reset();

        this.newComponentNamespace = (this.showNamespace !== 'all' && this.showNamespace !== 'group') ? this.showNamespace : '';
        this.newComponentSelectedType = this.types ? this.types[0].children[0] : null;
        this.addModal.show();
    }

    typeSelected(event: SelectData) {
        this.newComponentSelectedType = event;
    }

    addComponent() {
        const compType = this.newComponentSelectedType ? this.newComponentSelectedType.id : null;
        this.service.createComponent(this.newComponentName, this.newComponentNamespace, compType)
            .subscribe(
                data => this.handleSaveSuccess(),
                error => this.handleError(error)
            );
    }

    showSpecificNamespaceOnly(): boolean {
        return !(this.showNamespace === 'group' || this.showNamespace === 'all');
    }

    getSectionsData() {
        this.service.getSectionData()
            .subscribe(
                res => this.handleData(res),
                error => this.handleError(error)
            );
    }

    private handleResolverData(data: any) {
        const resolved: SectionResolverData = data['resolveData'];

        this.selectedResource = resolved.section;
        this.showNamespace = resolved.namespace !== 'undefined' ? resolved.namespace : this.showNamespace;
        this.types = null;

        this.service.setPath(resolved.path);
        this.getSectionsData();
    }

    private handleData(resources: SectionData[]) {
        this.componentData = resources;

        if (!this.showSpecificNamespaceOnly() && (this.componentData.length > 50)) {
            this.showNamespace = 'group';
            this.changeViewButtonTitle = showAll;
        } else if (!this.showSpecificNamespaceOnly()) {
            this.showNamespace = 'all';
            this.changeViewButtonTitle = showGrouped;
        }

        switch (this.selectedResource) {
            case 'nodeTypeImplementation':
                this.service.getSectionData('/nodetypes?grouped=angularSelect')
                    .subscribe(
                        data => this.handleTypes(data),
                        error => this.handleError(error)
                    );
                break;
            case 'relationshipTypeImplementation':
                this.service.getSectionData('/relationshiptypes?grouped=angularSelect')
                    .subscribe(
                        data => this.handleTypes(data),
                        error => this.handleError(error)
                    );
                break;
            case 'policyTemplate':
                this.service.getSectionData('/policytemplates?grouped=angularSelect')
                    .subscribe(
                        data => this.handleTypes(data),
                        error => this.handleError(error)
                    );
                break;
            default:
                this.loading = false;
        }
    }

    private handleTypes(types: SelectData[]): void {
        this.loading = false;
        this.types = types.length > 0 ? types : null;
    }

    private handleSaveSuccess() {
        this.notify.success('Successfully saved component ' + this.newComponentName);
        // redirect to this new component
        this.router.navigateByUrl('/'
            + this.selectedResource.toLowerCase() + 's/'
            + encodeURIComponent(encodeURIComponent(this.newComponentNamespace)) + '/'
            + this.newComponentName);
    }

    private handleError(error: any): void {
        this.loading = false;
        this.notify.error(error.toString());
    }
}