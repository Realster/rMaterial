import { ComponentFactoryResolver } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { PortalService } from './portal.service';
export declare class DialogService {
    private resolver;
    private mdDialog;
    private portalService;
    disableStatus: ReplaySubject<boolean>;
    constructor(resolver: ComponentFactoryResolver, mdDialog: MatDialog, portalService: PortalService);
    open<T>(component: any, config?: MatDialogConfig): MatDialogRef<T>;
}
