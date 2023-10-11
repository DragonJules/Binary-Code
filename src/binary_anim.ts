import { wait, randomItemInList, randint, minmax } from "./utils.js";

export class TextBinaryAnimationElement {
    element: HTMLElement;
    constructor(element: HTMLElement) {
        this.element = element;
        this.startAnimation = this.startAnimation.bind(this);

        element.innerHTML = this.split(element)
    }



    private split(element: HTMLElement): string {
        let result = ''
        let characters = element.textContent?.split('') || []
    
        characters.forEach((char, index) => {
            result += `<span class="binary-anim" data-letter-index=${index} data-letter="${char}">` + randomItemInList([0,1]) + '</span>'
        });
    
        return result
    }

    startAnimation() {
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
    }
} 