(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('rxjs/ReplaySubject'), require('rxjs/Subscription')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/material', 'rxjs/ReplaySubject', 'rxjs/Subscription'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.realstermaterial = global.ng.realstermaterial || {}),global.ng.core,global.ng.material,global.Rx,global.rxjs_Subscription));
}(this, (function (exports,_angular_core,_angular_material,rxjs_ReplaySubject,rxjs_Subscription) { 'use strict';

var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: [
                        _angular_material.MdCardModule,
                        _angular_material.MdButtonModule,
                        _angular_material.MdDialogModule,
                        _angular_material.MdIconModule
                    ]
                },] },
    ];
    /** @nocollapse */
    MaterialModule.ctorParameters = function () { return []; };
    return MaterialModule;
}());

var PortalService = (function () {
    function PortalService(resolver) {
        this.resolver = resolver;
    }
    Object.defineProperty(PortalService.prototype, "Component", {
        get: function () {
            return this.component;
        },
        set: function (component) {
            this.component = component;
        },
        enumerable: true,
        configurable: true
    });
    PortalService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    PortalService.ctorParameters = function () { return [
        { type: _angular_core.ComponentFactoryResolver, },
    ]; };
    return PortalService;
}());

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
        this.disableStatusSubscription = new rxjs_Subscription.Subscription;
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
        { type: _angular_core.Component, args: [{
                    selector: 'app-realster-dialog',
                    template: "\n    <div class=\"container\">\n      <div class=\"header\">\n        <div class=\"close mobile\">\n          <button (click)=\"close()\" md-icon-button><md-icon>close</md-icon></button>\n        </div>\n        <div class=\"title\">\n          <div>{{ dialogTitle }}</div>\n        </div>\n        <div class=\"ok mobile\">\n          <button (click)=\"ok()\" [disabled]=\"disableStaus\" md-icon-button>{{ okButtonTitle || 'OK'}}</button>\n        </div>\n      </div>\n      <div class=\"clear\"></div>\n      <div class=\"body\">\n        <ng-template #container></ng-template>\n      </div>\n      <div class=\"clear\"></div>\n      <div class=\"footer\">\n        <div class=\"ok\">\n          <button class=\"button\" (click)=\"ok()\" [disabled]=\"disableStaus\" md-button>{{ okButtonTitle || 'ok'}}</button>\n        </div>\n        <div class=\"close\">\n          <button class=\"button\" (click)=\"close()\" md-button>{{ cancelButtonTitle || 'cancel'}}</button>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .container{width:100%;height:100%}@media (min-width: 700px){.container{width:440px;height:auto}}.container .header{padding-left:8px;padding-right:8px;width:100%;height:48px}.container .header>div{float:left}.container .header .close{width:40px}.container .header .close button{color:#002f66 !important}.container .header .close.mobile{height:48px;line-height:48px}.container .header .title{height:100%;width:calc(100% - 80px)}.container .header .title>div{padding-left:12px;font-size:20px;font-weight:500;line-height:48px}.container .header .ok{width:40px}.container .header .ok button{color:#002f66 !important}.container .header .ok.mobile{height:48px;line-height:48px}@media (min-width: 700px){.container .header .close{display:none}.container .header .title{width:100%}.container .header .ok{display:none}}@media only screen and (max-width: 699px){.container .header{background-color:#FAFAFA;box-shadow:0 4px 4px 0 rgba(0,0,0,0.24),0 0 4px 0 rgba(0,0,0,0.12)}}.container .body{width:100%;padding:20px 20px 12px;overflow-y:auto;overflow-x:hidden}.container .footer{padding-top:8px;padding-bottom:8px;display:none}@media (min-width: 700px){.container .footer{display:block;width:100%;height:52px}.container .footer>div{float:right}}.container .footer .button{color:#002f66;text-transform:uppercase}.container .footer .button[disabled]{color:rgba(0,0,0,0.38)}.container .clear{clear:both}::ng-deep .fullscreen{padding:0}@media (max-width: 699px){::ng-deep .fullscreen{width:100vw;height:100vh}::ng-deep .fullscreen>.mat-dialog-container{max-width:100%}}\n  "]
                },] },
    ];
    /** @nocollapse */
    DialogComponent.ctorParameters = function () { return [
        { type: DialogService, },
        { type: PortalService, },
        { type: _angular_core.ComponentFactoryResolver, },
        { type: _angular_material.MdDialogRef, },
        { type: _angular_core.ChangeDetectorRef, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_material.MD_DIALOG_DATA,] },] },
    ]; };
    DialogComponent.propDecorators = {
        'container': [{ type: _angular_core.ViewChild, args: ['container', { read: _angular_core.ViewContainerRef },] },],
    };
    return DialogComponent;
}());

var DialogService = (function () {
    function DialogService(resolver, mdDialog, portalService) {
        this.resolver = resolver;
        this.mdDialog = mdDialog;
        this.portalService = portalService;
        this.disableStatus = new rxjs_ReplaySubject.ReplaySubject();
    }
    DialogService.prototype.open = function (component, config) {
        if (!config) {
            config = {
                panelClass: 'fullscreen'
            };
        }
        
        var factory = this.resolver.resolveComponentFactory(DialogComponent);
        var ref = factory.componentType;
        this.portalService.Component = component;
        return this.mdDialog.open(ref, config);
    };
    DialogService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    DialogService.ctorParameters = function () { return [
        { type: _angular_core.ComponentFactoryResolver, },
        { type: _angular_material.MdDialog, },
        { type: PortalService, },
    ]; };
    return DialogService;
}());

var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    moduleId: module.id,
                    selector: 'realster-card',
                    template: "\n    <md-card>\n      <md-card-header>\n        <md-card-title>\n          <ng-content select=\"realster-card-header\"></ng-content>\n        </md-card-title>\n      </md-card-header>\n      <div class=\"image\">\n        <ng-content select=\"realster-card-image\">\n        </ng-content>\n      </div>\n      <div class=\"content\">\n        <ng-content select=\"realster-card-content\">\n        </ng-content>\n      </div>\n      <div class=\"actions\">\n        <ng-content select=\"realster-card-actions\">\n        </ng-content>\n      </div>\n    </md-card>\n  ",
                    styles: ["\n    .image{padding:15px;background-color:#3F5894;text-align:center}.content{padding-top:15px;padding-bottom:15px}\n  "]
                },] },
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
    return CardComponent;
}());

var CardHeaderComponent = (function () {
    function CardHeaderComponent() {
    }
    CardHeaderComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'realster-card-header',
                    template: "\n    <div class=\"card-header\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    .card-header{font-weight:bold;font-size:32px}\n  "]
                },] },
    ];
    /** @nocollapse */
    CardHeaderComponent.ctorParameters = function () { return []; };
    return CardHeaderComponent;
}());

var CardImageComponent = (function () {
    function CardImageComponent() {
    }
    CardImageComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'realster-card-image',
                    template: "\n    <img [src]=\"src\" />\n  ",
                    styles: ["\n    img{width:100px}\n  "]
                },] },
    ];
    /** @nocollapse */
    CardImageComponent.ctorParameters = function () { return []; };
    CardImageComponent.propDecorators = {
        'src': [{ type: _angular_core.Input, args: ['src',] },],
    };
    return CardImageComponent;
}());

var CardContentComponent = (function () {
    function CardContentComponent() {
    }
    CardContentComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'realster-card-content',
                    template: "\n    <div>\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    CardContentComponent.ctorParameters = function () { return []; };
    return CardContentComponent;
}());

var CardActionsComponent = (function () {
    function CardActionsComponent() {
    }
    CardActionsComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'realster-card-actions',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    CardActionsComponent.ctorParameters = function () { return []; };
    return CardActionsComponent;
}());

var RealsterMaterialModule = (function () {
    function RealsterMaterialModule() {
    }
    RealsterMaterialModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        MaterialModule
                    ],
                    declarations: [
                        CardComponent,
                        CardHeaderComponent,
                        CardImageComponent,
                        CardContentComponent,
                        CardActionsComponent,
                        DialogComponent
                    ],
                    entryComponents: [
                        DialogComponent
                    ],
                    providers: [
                        DialogService,
                        PortalService
                    ],
                    exports: [
                        CardComponent,
                        CardHeaderComponent,
                        CardImageComponent,
                        CardContentComponent,
                        CardActionsComponent,
                        DialogComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    RealsterMaterialModule.ctorParameters = function () { return []; };
    return RealsterMaterialModule;
}());

exports.RealsterMaterialModule = RealsterMaterialModule;
exports.DialogService = DialogService;
exports.PortalService = PortalService;
exports.CardComponent = CardComponent;
exports.CardHeaderComponent = CardHeaderComponent;
exports.CardImageComponent = CardImageComponent;
exports.CardContentComponent = CardContentComponent;
exports.CardActionsComponent = CardActionsComponent;
exports.DialogComponent = DialogComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=RealsterMaterial.umd.js.map
