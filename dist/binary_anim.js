var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { wait, randomItemInList } from "./utils.js";
export class TextBinaryAnimationElement {
    constructor(element) {
        this.element = element;
        this.startAnimation = this.startAnimation.bind(this);
        element.innerHTML = this.split(element);
    }
    split(element) {
        var _a;
        let result = '';
        let characters = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.split('')) || [];
        characters.forEach((char, index) => {
            result += `<span class="binary-anim" data-letter-index=${index} data-letter="${char}">` + randomItemInList([0, 1]) + '</span>';
        });
        return result;
    }
    startAnimation() {
        let spans = [...this.element.children];
        spans.forEach((span) => {
            let letterIndex = (span.dataset.letterIndex != undefined) ? +span.dataset.letterIndex : 0;
            let delay = letterIndex * 50;
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                let spanLetter = (span.dataset.letter != undefined) ? span.dataset.letter : '_';
                for (let i = 0; i < 10; i++) {
                    span.innerText = randomItemInList(['0', '1', '.', 'O', '1'], span.innerText);
                    yield wait(80);
                }
                span.innerText = spanLetter;
            }), delay);
        });
    }
}
//# sourceMappingURL=binary_anim.js.map