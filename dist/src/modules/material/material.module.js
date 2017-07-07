import { NgModule } from '@angular/core';
import { MdCardModule, MdButtonModule } from '@angular/material';
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        MdCardModule,
                        MdButtonModule
                    ]
                },] },
    ];
    /** @nocollapse */
    MaterialModule.ctorParameters = function () { return []; };
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=material.module.js.map