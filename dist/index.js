import { TextBinaryAnimationElement } from "./binary_anim.js";
import { Slide } from "./slide.js";
const BINARY_ANIMATION_CONTAINERS = [...document.querySelectorAll('.binary-anim-container')];
let binary_animation_elements = [];
BINARY_ANIMATION_CONTAINERS.forEach((container, index) => {
    let binary_animation_element = new TextBinaryAnimationElement(container);
    binary_animation_elements.push(binary_animation_element);
    BINARY_ANIMATION_CONTAINERS[index] = binary_animation_element.element;
});
const LEFT_REVEAL_ELEMENTS = [...document.querySelectorAll('.left-reveal')];
LEFT_REVEAL_ELEMENTS.forEach(element => {
    element.classList.remove('left-reveal');
    element.outerHTML = `<div class="left-reveal">${element.outerHTML}</div>`;
});
let slides = [];
const heroTitleBinAnimEl = binary_animation_elements[0];
slides.push(new Slide('hero', () => {
    heroTitleBinAnimEl.reset();
}, undefined, [
    () => {
        heroTitleBinAnimEl.startAnimation(true);
    }
]));
const historyCards = [...document.querySelectorAll('.history__card')];
const historyCardsReveal = historyCards.map(card => (() => {
    var _a;
    (_a = card.querySelector('.image-container.blur')) === null || _a === void 0 ? void 0 : _a.classList.remove('blur-enabled');
    let leftRevealEls = [...card.querySelectorAll('.left-reveal')];
    leftRevealEls.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('left-revealed');
        }, 50 * (index + 1));
    });
}));
slides.push(new Slide('history', () => {
    historyCards.forEach(card => {
        var _a;
        (_a = card.querySelector('.image-container.blur')) === null || _a === void 0 ? void 0 : _a.classList.add('blur-enabled');
    });
}, undefined, historyCardsReveal));
slides.push(new Slide('binary-code'));
slides.push(new Slide('binary-logic'));
slides.push(new Slide('use-in-elec'));
slides.push(new Slide('end', () => {
    let title_bin_anim_el = binary_animation_elements[1];
    title_bin_anim_el.reset();
}, () => {
    let title_bin_anim_el = binary_animation_elements[1];
    title_bin_anim_el.startAnimation(true);
}));
let current_slide_index = 3;
window.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        event.preventDefault();
    }
    if (event.key === 'PageUp' || event.key === 'Home') {
        event.preventDefault();
    }
    if (event.key === 'PageDown' || event.key === 'End') {
        event.preventDefault();
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
    }
});
window.addEventListener('keyup', (event) => {
    if (event.key === ' ') {
        event.preventDefault();
        on_next_action();
    }
    if (event.key === 'PageUp' || event.key === 'Home') {
        event.preventDefault();
        scrollToIndex(0, 'instant');
    }
    if (event.key === 'PageDown' || event.key === 'End') {
        event.preventDefault();
        scrollToIndex(slides.length - 1, 'instant');
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        scrollToIndex(Math.min(current_slide_index + 1, slides.length - 1), 'instant');
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollToIndex(Math.max(0, current_slide_index - 1), 'instant');
    }
});
window.addEventListener('mousedown', event => {
    event.preventDefault();
});
window.addEventListener('mouseup', event => {
    event.preventDefault();
    on_next_action();
});
const scrollToIndex = (index, behavior = 'smooth') => {
    current_slide_index = index;
    let current_slide = slides[current_slide_index];
    window.scrollTo({
        top: window.innerHeight * index,
        behavior: behavior
    });
    current_slide.onDisplay();
};
const on_next_action = () => {
    let current_slide = slides[current_slide_index];
    if (current_slide == null) {
        return;
    }
    if (!current_slide.hasFinishedActions()) {
        current_slide.executeAction();
    }
    else {
        current_slide_index++;
        scrollToIndex(current_slide_index);
    }
};
setTimeout(() => {
    scrollToIndex(current_slide_index, 'instant');
}, 600);
//# sourceMappingURL=index.js.map