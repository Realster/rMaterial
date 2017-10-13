import { OnInit, OnDestroy, AfterViewChecked, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PortalService } from '../../services/portal.service';
import { DialogService } from '../../services/dialog.service';
export declare class DialogComponent implements OnInit, OnDestroy, AfterViewChecked {
    private dialogService;
    private portalService;
    private resolver;
    private dialogRef;
    private cdr;
    data: any;
    container: any;
    dialogTitle: string;
    disableStaus: boolean;
    okButtonTitle: string;
    cancelButtonTitle: string;
    private componentRef;
    private disableStatusSubscription;
    constructor(dialogService: DialogService, portalService: PortalService, resolver: ComponentFactoryResolver, dialogRef: MatDialogRef<DialogComponent>, cdr: ChangeDetectorRef, data: any);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    close(): void;
    ok(): void;
}
