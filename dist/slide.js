export class Slide {
    constructor(reset, onAction) {
        this.reset = () => {
            if (reset)
                reset();
        };
        this.onAction = () => {
            if (this.reset)
                this.reset();
            if (onAction)
                onAction();
        };
    }
}
//# sourceMappingURL=slide.js.map