import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { PortalService } from './portal.service';
import { DialogComponent } from '../components/dialog/dialog.component';
var DialogService = (function () {
    function DialogService(resolver, mdDialog, portalService) {
        this.resolver = resolver;
        this.mdDialog = mdDialog;
        this.portalService = portalService;
        this.disableStatus = new ReplaySubject();
    }
    DialogService.prototype.open = function (component, config) {
        if (!config) {
            config = {
                panelClass: 'fullscreen'
            };
        }
        ;
        var factory = this.resolver.resolveComponentFactory(DialogComponent);
        var ref = factory.componentType;
        this.portalService.Component = component;
        return this.mdDialog.open(ref, config);
    };
    DialogService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
        { type: MatDialog, },
        { type: PortalService, },
    ]; };
    return DialogService;
}());
export { DialogService };
//# sourceMappingURL=dialog.service.js.map