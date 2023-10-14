import { wait, randomItemInList, randint, minmax } from "./utils.js";

export class TextBinaryAnimationElement {
    element: HTMLElement;
    interval: number | undefined
    private _splitted = false;
    constructor(element: HTMLElement) {
        this.element = element;
        this.startAnimation = this.startAnimation.bind(this);

        element.innerHTML = this.split(element)
    }

    private setInterval(delay: number) {
        this.interval = setInterval(this.startAnimation, delay)
    }

    private split(element: HTMLElement): string {
        let result = ''
        let characters = element.textContent?.split('') || []
    
        characters.forEach((char, index) => {
            result += `<span class="binary-anim" data-letter-index=${index} data-letter="${char}">` + randomItemInList([0,1]) + '</span>'
        });
    
        this._splitted = true
        return result
    }


    reset() {
        clearInterval(this.interval)
        if (this._splitted) {
            let spans = [...this.element.children] as HTMLSpanElement[]
            spans.forEach((span) => {
                span.innerText = randomItemInList(['0', '1'])
            })
        } 
        else {
            this.split(this.element)
        }
    }


    startAnimation(repeat?: boolean, delay: number = 8000) {
        let spans = [...this.element.children] as HTMLSpanElement[]
        spans.forEach((span: HTMLSpanElement) => {
            let letterIndex = (span.dataset.letterIndex != undefined) ? +span.dataset.letterIndex : 0
            let delay = letterIndex * 50
            setTimeout(async () => {
                let spanLetter = (span.dataset.letter != undefined) ? span.dataset.letter : '_'
                for (let i = 0; i < 10; i++) {
                    
                    span.innerText = randomItemInList(['0', '1', '.', 'O', '1'], span.innerText)
            
                    await wait(80) 
                }
                span.innerText = spanLetter
            }, delay)
        })

        if (repeat) {
            this.setInterval(delay)
        }
    }
} 