(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/material'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.realstermaterial = global.ng.realstermaterial || {}),global.ng.core,global.ng.material));
}(this, (function (exports,_angular_core,_angular_material) { 'use strict';

var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: [
                        _angular_material.MdCardModule,
                        _angular_material.MdButtonModule
                    ]
                },] },
    ];
    /** @nocollapse */
    MaterialModule.ctorParameters = function () { return []; };
    return MaterialModule;
}());

var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    moduleId: module.id,
                    selector: 'realster-card',
                    templateUrl: './card.component.html',
                    styleUrls: ['./card.component.scss']
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
                    templateUrl: './card-header.component.html',
                    styleUrls: ['./card-header.component.scss']
                },] },
    ];
    /** @nocollapse */
    CardHeaderComponent.ctorParameters = function () { return []; };
    return CardHeaderComponent;
}());

var CardImageComponent = (function () {
    function CardImageComponent() {
    }
    CardImageComponent.prototype.ngOnInit = function () {
        console.log(this.src);
    };
    CardImageComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'realster-card-image',
                    templateUrl: './card-image.component.html',
                    styleUrls: ['./card-image.component.scss']
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
                    templateUrl: './card-content.component.html',
                    styleUrls: ['./card-content.component.scss']
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
                    templateUrl: './card-actions.component.html',
                    styleUrls: ['./card-actions.component.scss']
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

exports.RealsterMaterialModule = RealsterMaterialModule;
exports.CardComponent = CardComponent;
exports.CardHeaderComponent = CardHeaderComponent;
exports.CardImageComponent = CardImageComponent;
exports.CardContentComponent = CardContentComponent;
exports.CardActionsComponent = CardActionsComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
