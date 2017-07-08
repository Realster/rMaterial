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
                    template: "\n    <md-card>\n      <md-card-header>\n        <md-card-title>\n          <ng-content select=\"realster-card-header\"></ng-content>\n        </md-card-title>\n      </md-card-header>\n      <div class=\"image\">\n        <ng-content select=\"realster-card-image\">\n        </ng-content>\n      </div>\n      <div class=\"content\">\n        <ng-content select=\"realster-card-content\">\n        </ng-content>\n      </div>\n      <div class=\"actions\">\n        <ng-content select=\"realster-card-actions\">\n        </ng-content>\n      </div>\n    </md-card>\n  ",
                    styles: ["\n    .image{padding:15px;background-color:#3F5894;text-align:center}.content{padding-top:15px;padding-bottom:15px}\n  "]
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
                    template: "\n    <div class=\"card-header\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    .card-header{font-weight:bold;font-size:32px}\n  "]
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
                    template: "\n    <img [src]=\"src\" />\n  ",
                    styles: ["\n    img{width:100px}\n  "]
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
                    template: "\n    <div>\n      <ng-content></ng-content>\n    </div>\n  ",
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
                    template: "\n    <ng-content></ng-content>\n  ",
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
