import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card/header/card-header.component';
import { CardImageComponent } from './components/card/image/card-image.component';
import { CardContentComponent } from './components/card/content/card-content.component';
import { CardActionsComponent } from './components/card/actions/card-actions.component';
var RealsterMaterialModule = (function () {
    function RealsterMaterialModule() {
    }
    RealsterMaterialModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MaterialModule
                    ],
                    declarations: [
                        CardComponent,
                        CardHeaderComponent,
                        CardImageComponent,
                        CardContentComponent,
                        CardActionsComponent
                    ],
                    exports: [
                        CardComponent,
                        CardHeaderComponent,
                        CardImageComponent,
                        CardContentComponent,
                        CardActionsComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    RealsterMaterialModule.ctorParameters = function () { return []; };
    return RealsterMaterialModule;
}());
export { RealsterMaterialModule };
//# sourceMappingURL=realster.module.js.map