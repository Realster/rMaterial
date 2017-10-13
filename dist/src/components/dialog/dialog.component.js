import { Component, Inject, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { PortalService } from '../../services/portal.service';
import { DialogService } from '../../services/dialog.service';
var DialogComponent = (function () {
    function DialogComponent(dialogService, portalService, resolver, dialogRef, cdr, data) {
        this.dialogService = dialogService;
        this.portalService = portalService;
        this.resolver = resolver;
        this.dialogRef = dialogRef;
        this.cdr = cdr;
        this.data = data;
        this.dialogTitle = '';
        this.disableStaus = true;
        this.disableStatusSubscription = new Subscription;
    }
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var factory = this.resolver.resolveComponentFactory(this.portalService.Component);
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
        this.disableStatusSubscription = this.dialogService.disableStatus.subscribe(function (status) {
            if (status != null) {
                _this.disableStaus = status;
            }
        });
    };
    DialogComponent.prototype.ngAfterViewChecked = function () {
        this.cdr.detectChanges();
    };
    DialogComponent.prototype.ngOnDestroy = function () {
        this.componentRef.destroy();
        this.disableStatusSubscription.unsubscribe();
    };
    DialogComponent.prototype.close = function () {
        this.dialogRef.close('close');
    };
    DialogComponent.prototype.ok = function () {
        if (this.data.okFunction && this.componentRef.instance.templateData !== null && this.componentRef.instance.templateData !== undefined) {
            this.data.okFunction(this.componentRef.instance.templateData);
            this.dialogRef.close('ok');
        }
        else if (this.componentRef.instance.templateData === null) {
            this.dialogRef.close('ok');
        }
    };
    DialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-realster-dialog',
                    template: "\n    <div class=\"container\">\n      <div class=\"header\">\n        <div class=\"close mobile\">\n          <button (click)=\"close()\" mat-icon-button><mat-icon>close</mat-icon></button>\n        </div>\n        <div class=\"title\">\n          <div>{{ dialogTitle }}</div>\n        </div>\n        <div class=\"ok mobile\">\n          <button (click)=\"ok()\" [disabled]=\"disableStaus\" mat-icon-button>{{ okButtonTitle || 'OK'}}</button>\n        </div>\n      </div>\n      <div class=\"clear\"></div>\n      <div class=\"body\">\n        <ng-template #container></ng-template>\n      </div>\n      <div class=\"clear\"></div>\n      <div class=\"footer\">\n        <div class=\"ok\">\n          <button class=\"button\" (click)=\"ok()\" [disabled]=\"disableStaus\" mat-button>{{ okButtonTitle || 'ok'}}</button>\n        </div>\n        <div class=\"close\">\n          <button class=\"button\" (click)=\"close()\" mat-button>{{ cancelButtonTitle || 'cancel'}}</button>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .container{width:100%;height:100%}@media (min-width: 700px){.container{width:440px;height:auto}}.container .header{padding-left:8px;padding-right:8px;width:100%;height:48px}.container .header>div{float:left}.container .header .close{width:40px}.container .header .close button{color:#002f66 !important}.container .header .close.mobile{height:48px;line-height:48px}.container .header .title{height:100%;width:calc(100% - 80px)}.container .header .title>div{padding-left:12px;font-size:20px;font-weight:500;line-height:48px}.container .header .ok{width:40px}.container .header .ok button{color:#002f66 !important}.container .header .ok.mobile{height:48px;line-height:48px}@media (min-width: 700px){.container .header .close{display:none}.container .header .title{width:100%}.container .header .ok{display:none}}@media only screen and (max-width: 699px){.container .header{background-color:#FAFAFA;box-shadow:0 4px 4px 0 rgba(0,0,0,0.24),0 0 4px 0 rgba(0,0,0,0.12)}}.container .body{width:100%;padding:20px 20px 12px;overflow-y:auto;overflow-x:hidden}.container .footer{padding-top:8px;padding-bottom:8px;display:none}@media (min-width: 700px){.container .footer{display:block;width:100%;height:52px}.container .footer>div{float:right}}.container .footer .button{color:#002f66;text-transform:uppercase}.container .footer .button[disabled]{color:rgba(0,0,0,0.38)}.container .clear{clear:both}::ng-deep .fullscreen{padding:0}@media (max-width: 699px){::ng-deep .fullscreen{width:100vw;height:100vh}::ng-deep .fullscreen>.mat-dialog-container{max-width:100%}}\n  "]
                },] },
    ];
    /** @nocollapse */
    DialogComponent.ctorParameters = function () { return [
        { type: DialogService, },
        { type: PortalService, },
        { type: ComponentFactoryResolver, },
        { type: MatDialogRef, },
        { type: ChangeDetectorRef, },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] },] },
    ]; };
    DialogComponent.propDecorators = {
        'container': [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
    };
    return DialogComponent;
}());
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map