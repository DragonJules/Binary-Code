import { TextBinaryAnimationElement } from "./binary_anim.js";
import { Slide } from "./slide.js";
const BINARY_ANIMATION_CONTAINERS = [...document.querySelectorAll('.binary-anim-container')];
let binary_animation_elements = [];
BINARY_ANIMATION_CONTAINERS.forEach((container, index) => {
    let binary_animation_element = new TextBinaryAnimationElement(container);
    binary_animation_elements.push(binary_animation_element);
    BINARY_ANIMATION_CONTAINERS[index] = binary_animation_element.element;
});
let slides = [];
slides.push(new Slide(binary_animation_elements[0].startAnimation));
let current_slide_index = 0;
document.addEventListener('keypress', (event) => {
    if (event.key == ' ') {
        event.preventDefault();
        slides[current_slide_index].onDisplay();
    }
});
//# sourceMappingURL=index.js.map