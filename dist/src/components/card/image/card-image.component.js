import { Component, Input } from '@angular/core';
var CardImageComponent = (function () {
    function CardImageComponent() {
    }
    CardImageComponent.prototype.ngOnInit = function () {
        console.log(this.src);
    };
    CardImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'realster-card-image',
                    templateUrl: './card-image.component.html',
                    styleUrls: ['./card-image.component.scss']
                },] },
    ];
    /** @nocollapse */
    CardImageComponent.ctorParameters = function () { return []; };
    CardImageComponent.propDecorators = {
        'src': [{ type: Input, args: ['src',] },],
    };
    return CardImageComponent;
}());
export { CardImageComponent };
//# sourceMappingURL=card-image.component.js.map