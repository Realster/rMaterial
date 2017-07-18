import { NgModule } from '@angular/core';
import { MdCardModule, MdButtonModule, MdDialogModule, MdIconModule } from '@angular/material';
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        MdCardModule,
                        MdButtonModule,
                        MdDialogModule,
                        MdIconModule
                    ]
                },] },
    ];
    /** @nocollapse */
    MaterialModule.ctorParameters = function () { return []; };
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=material.module.js.map