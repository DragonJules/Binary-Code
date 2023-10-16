export class Slide {
    name: string;
    private actions: Function[] | undefined
    private inUseActions
    constructor (name: string, reset?: Function, onDisplay?: Function, actions?: Function[]) {
        this.name = name

        this.reset = () => {
            if (reset) reset()
            this.inUseActions = this.actions?.slice()
        }
        this.onDisplay = () => {
            this.reset()
            if (onDisplay) onDisplay()
        }

        if (actions) {
            this.actions = actions
            this.inUseActions = actions.slice()
        }
    }

    reset: Function
    onDisplay: Function
    hasFinishedActions = (): Boolean => {
        return this.inUseActions?.length === 0 || this.actions === undefined
    }

    executeAction = () => {
        let current_action = this.inUseActions?.shift()
        if (current_action !== undefined) current_action()
    }
}