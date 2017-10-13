import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        MatCardModule,
                        MatButtonModule,
                        MatDialogModule,
                        MatIconModule
                    ]
                },] },
    ];
    /** @nocollapse */
    MaterialModule.ctorParameters = function () { return []; };
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=material.module.js.map