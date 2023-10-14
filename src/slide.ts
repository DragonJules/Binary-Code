export class Slide {
    constructor (reset?: Function, onAction?: Function) {
        this.reset = () => {
            if (reset) reset()
        }
        this.onAction = () => {
            if (this.reset) this.reset()
            if (onAction) onAction()
        }
    }

    reset: Function
    onAction: Function
}