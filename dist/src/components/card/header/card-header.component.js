import { Component } from '@angular/core';
var CardHeaderComponent = (function () {
    function CardHeaderComponent() {
    }
    CardHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'realster-card-header',
                    template: "\n    <div class=\"card-header\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    .card-header{font-weight:bold;font-size:32px}\n  "]
                },] },
    ];
    /** @nocollapse */
    CardHeaderComponent.ctorParameters = function () { return []; };
    return CardHeaderComponent;
}());
export { CardHeaderComponent };
//# sourceMappingURL=card-header.component.js.map