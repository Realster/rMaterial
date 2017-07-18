import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { PortalService } from '../../services/portal.service';
var DialogComponent = (function () {
    function DialogComponent(portalService, resolver, dialogRef) {
        this.portalService = portalService;
        this.resolver = resolver;
        this.dialogRef = dialogRef;
    }
    DialogComponent.prototype.ngOnInit = function () {
        var factory = this.resolver.resolveComponentFactory(this.portalService.Component);
        var componentRef = this.container.createComponent(factory);
    };
    DialogComponent.prototype.close = function () {
        this.dialogRef.close('close');
    };
    DialogComponent.prototype.ok = function () {
        this.dialogRef.close('ok');
    };
    DialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-realster-dialog',
                    template: "\n    <div class=\"container\">\n      <div class=\"header\">\n        <div class=\"close\">\n          <button (click)=\"close()\" md-icon-button><md-icon>close</md-icon></button>\n        </div>\n        <div class=\"title\">\n          <div>Dialog Title</div>\n        </div>\n        <div class=\"ok\">\n          <button (click)=\"ok()\" md-icon-button><md-icon>done</md-icon></button>\n        </div>\n      </div>\n      <div class=\"clear\"></div>\n      <div class=\"body\">\n        <ng-template #container></ng-template>\n      </div>\n      <div class=\"clear\"></div>\n      <div class=\"footer\">\n        <div class=\"ok\">\n          <button (click)=\"ok()\" md-button>OK</button>\n        </div>\n        <div class=\"close\">\n          <button (click)=\"close()\" md-button>CLOSE</button>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .container{width:100%;height:100%}@media (min-width: 700px){.container{width:500px;height:800px}}.container .header{width:100%;height:50px;border-bottom:1px solid gray}.container .header>div{float:left}.container .header .close{width:40px}.container .header .title{height:100%;width:calc(100% - 80px)}.container .header .title>div{font-size:40px;text-align:center}.container .header .ok{width:40px}@media (min-width: 700px){.container .header .close{display:none}.container .header .title{width:100%}.container .header .ok{display:none}}.container .body{width:100%;height:calc(100% - 80px);overflow:auto}.container .footer{display:none}@media (min-width: 700px){.container .footer{display:block;width:100%;height:40px}.container .footer>div{float:right}}.container .clear{clear:both}\n  "]
                },] },
    ];
    /** @nocollapse */
    DialogComponent.ctorParameters = function () { return [
        { type: PortalService, },
        { type: ComponentFactoryResolver, },
        { type: MdDialogRef, },
    ]; };
    DialogComponent.propDecorators = {
        'container': [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
    };
    return DialogComponent;
}());
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map