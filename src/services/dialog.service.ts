import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { PortalService } from './portal.service';

import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable()
export class DialogService {
  constructor(
    private resolver: ComponentFactoryResolver,
    private mdDialog: MdDialog,
    private portalService: PortalService
  ) { }

  open<T>(component): MdDialogRef<T> {
    const factory = this.resolver.resolveComponentFactory(DialogComponent);
    const ref = factory.componentType;
    this.portalService.Component = component;
    return this.mdDialog.open<T>(ref, {
      panelClass: 'fullscreen'
    });
  }
}
