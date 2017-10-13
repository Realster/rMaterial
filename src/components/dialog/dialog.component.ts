import { Component, Inject, OnInit, OnDestroy, AfterViewChecked, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { PortalService } from '../../services/portal.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-realster-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('container', { read: ViewContainerRef }) container;
  public dialogTitle = '';
  public disableStaus = true;
  public okButtonTitle: string;
  public cancelButtonTitle: string;
  
  private componentRef;
  private disableStatusSubscription = new Subscription;

  constructor(
    private dialogService: DialogService,
    private portalService: PortalService,
    private resolver: ComponentFactoryResolver,
    private dialogRef: MatDialogRef<DialogComponent>,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.portalService.Component);
    this.componentRef = this.container.createComponent(factory);
    if (this.data.dialogTitle) {
      this.dialogTitle = this.data.dialogTitle;
    }
    if (this.data.okButtonTitle) {
      this.okButtonTitle = this.data.okButtonTitle;
    }
    if (this.data.cancelButtonTitle) {
      this.cancelButtonTitle = this.data.cancelButtonTitle;
    }
    if (this.data.originalData) {
      this.componentRef.instance.templateData = this.data.originalData;
    }
    this.disableStatusSubscription = this.dialogService.disableStatus.subscribe( status => {
      if (status != null) {
        this.disableStaus = status;
      }
    });
  }
  
  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
    this.disableStatusSubscription.unsubscribe();
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
