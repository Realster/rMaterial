import { Component } from '@angular/core';
var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'realster-card',
                    template: "\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          <ng-content select=\"realster-card-header\"></ng-content>\n        </mat-card-title>\n      </mat-card-header>\n      <div class=\"image\">\n        <ng-content select=\"realster-card-image\">\n        </ng-content>\n      </div>\n      <div class=\"content\">\n        <ng-content select=\"realster-card-content\">\n        </ng-content>\n      </div>\n      <div class=\"actions\">\n        <ng-content select=\"realster-card-actions\">\n        </ng-content>\n      </div>\n    </mat-card>\n  ",
                    styles: ["\n    .image{padding:15px;background-color:#3F5894;text-align:center}.content{padding-top:15px;padding-bottom:15px}\n  "]
                },] },
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=card.component.js.map