import { OnInit, ComponentFactoryResolver } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { PortalService } from '../../services/portal.service';
export declare class DialogComponent implements OnInit {
    private portalService;
    private resolver;
    private dialogRef;
    container: any;
    constructor(portalService: PortalService, resolver: ComponentFactoryResolver, dialogRef: MdDialogRef<DialogComponent>);
    ngOnInit(): void;
    close(): void;
    ok(): void;
}
