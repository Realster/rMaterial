import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { DialogService } from './services/dialog.service';
import { PortalService } from './services/portal.service';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card/header/card-header.component';
import { CardImageComponent } from './components/card/image/card-image.component';
import { CardContentComponent } from './components/card/content/card-content.component';
import { CardActionsComponent } from './components/card/actions/card-actions.component';
import { DialogComponent } from './components/dialog/dialog.component';
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
export { RealsterMaterialModule };
//# sourceMappingURL=realster.module.js.map