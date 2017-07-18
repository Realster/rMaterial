import { Injectable, ComponentFactoryResolver } from '@angular/core';
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
        { type: Injectable },
    ];
    /** @nocollapse */
    PortalService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
    ]; };
    return PortalService;
}());
export { PortalService };
//# sourceMappingURL=portal.service.js.map