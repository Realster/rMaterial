import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { MdDialog } from '@angular/material';
import { PortalService } from './portal.service';
import { DialogComponent } from '../components/dialog/dialog.component';
var DialogService = (function () {
    function DialogService(resolver, mdDialog, portalService) {
        this.resolver = resolver;
        this.mdDialog = mdDialog;
        this.portalService = portalService;
    }
    DialogService.prototype.open = function (component) {
        var factory = this.resolver.resolveComponentFactory(DialogComponent);
        var ref = factory.componentType;
        this.portalService.Component = component;
        return this.mdDialog.open(ref, {
            panelClass: 'fullscreen'
        });
    };
    DialogService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
        { type: MdDialog, },
        { type: PortalService, },
    ]; };
    return DialogService;
}());
export { DialogService };
//# sourceMappingURL=dialog.service.js.map