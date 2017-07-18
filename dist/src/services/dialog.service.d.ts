import { ComponentFactoryResolver } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { PortalService } from './portal.service';
export declare class DialogService {
    private resolver;
    private mdDialog;
    private portalService;
    constructor(resolver: ComponentFactoryResolver, mdDialog: MdDialog, portalService: PortalService);
    open<T>(component: any): MdDialogRef<T>;
}
