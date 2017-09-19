import { Component, Inject, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { PortalService } from '../../services/portal.service';

@Component({
  selector: 'app-realster-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container;
  private componentRef;

  constructor(
    private portalService: PortalService,
    private resolver: ComponentFactoryResolver,
    private dialogRef: MdDialogRef<DialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.portalService.Component);
    this.componentRef = this.container.createComponent(factory);
  }

  close() {
    this.dialogRef.close('close');
  }

  ok() {
  if (this.data.okFunction && this.componentRef.instance.templateData !== null && this.componentRef.instance.templateData !== undefined) {
      this.data.okFunction(this.componentRef.instance.templateData);
      this.dialogRef.close('ok');
    } else if (this.componentRef.instance.templateData === null) {
      this.dialogRef.close('ok');
    }
  }
}
