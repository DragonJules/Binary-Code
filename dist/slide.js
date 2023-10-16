export class Slide {
    constructor(name, reset, onDisplay, actions) {
        this.hasFinishedActions = () => {
            var _a;
            return ((_a = this.inUseActions) === null || _a === void 0 ? void 0 : _a.length) === 0 || this.actions === undefined;
        };
        this.executeAction = () => {
            var _a;
            let current_action = (_a = this.inUseActions) === null || _a === void 0 ? void 0 : _a.shift();
            if (current_action !== undefined)
                current_action();
        };
        this.name = name;
        this.reset = () => {
            var _a;
            if (reset)
                reset();
            this.inUseActions = (_a = this.actions) === null || _a === void 0 ? void 0 : _a.slice();
        };
        this.onDisplay = () => {
            this.reset();
            if (onDisplay)
                onDisplay();
        };
        if (actions) {
            this.actions = actions;
            this.inUseActions = actions.slice();
        }
    }
}
//# sourceMappingURL=slide.js.map