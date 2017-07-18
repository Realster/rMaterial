import { Component, Input } from '@angular/core';
var CardImageComponent = (function () {
    function CardImageComponent() {
    }
    CardImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'realster-card-image',
                    template: "\n    <img [src]=\"src\" />\n  ",
                    styles: ["\n    img{width:100px}\n  "]
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