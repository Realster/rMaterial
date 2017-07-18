import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { PortalService } from '../../services/portal.service';

@Component({
  selector: 'app-realster-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container;

  constructor(
    private portalService: PortalService,
    private resolver: ComponentFactoryResolver,
    private dialogRef: MdDialogRef<DialogComponent>
  ) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.portalService.Component);
    const componentRef = this.container.createComponent(factory);
  }

  close() {
    this.dialogRef.close('close');
  }

  ok() {
    this.dialogRef.close('ok');
  }
}
