import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { ReplaySubject } from 'rxjs/ReplaySubject'

import { PortalService } from './portal.service';

import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable()
export class DialogService {
  public disableStatus = new ReplaySubject<boolean>();
  
  constructor(
    private resolver: ComponentFactoryResolver,
    private mdDialog: MatDialog,
    private portalService: PortalService
  ) { }

  open<T>(component, config?: MatDialogConfig): MatDialogRef<T> {
    if (!config) {
      config = {
        panelClass: 'fullscreen'
      }
    };
    const factory = this.resolver.resolveComponentFactory(DialogComponent);
    const ref = factory.componentType;
    this.portalService.Component = component;
    return this.mdDialog.open<T>(ref, config);
  }
}
