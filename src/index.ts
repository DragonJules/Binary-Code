import { wait, randomItemInList, randint, minmax } from "./utils.js";
import { TextBinaryAnimationElement } from "./binary_anim.js"
import { Slide } from "./slide.js";

const BINARY_ANIMATION_CONTAINERS = [...document.querySelectorAll('.binary-anim-container')] as HTMLElement[]
let binary_animation_elements: TextBinaryAnimationElement[] = []


BINARY_ANIMATION_CONTAINERS.forEach((container, index) => {
    let binary_animation_element = new TextBinaryAnimationElement(container)
    binary_animation_elements.push(binary_animation_element)

    BINARY_ANIMATION_CONTAINERS[index] = binary_animation_element.element
})



let slides: Slide[] = []


slides.push(new Slide(
    () => {
        let title_bin_anim_el = binary_animation_elements[0]
        title_bin_anim_el.reset()
    },
    () => {
        let title_bin_anim_el = binary_animation_elements[0]
        title_bin_anim_el.startAnimation(true)
    }
))
slides.push(new Slide())
slides.push(new Slide())
slides.push(new Slide())
slides.push(new Slide())
slides.push(new Slide(    
    () => {
        let title_bin_anim_el = binary_animation_elements[1]
        title_bin_anim_el.reset()
    },
    () => {
        let title_bin_anim_el = binary_animation_elements[1]
        title_bin_anim_el.startAnimation(true)
    }
))


let current_slide_index = 0

window.addEventListener('contextmenu', event => event.preventDefault())

window.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === ' ') {
        event.preventDefault()
    }

    if (event.key === 'PageUp' || event.key === 'Home') {
        event.preventDefault()
    }

    if (event.key === 'PageDown' || event.key === 'End') {
        event.preventDefault()
    }
})
window.addEventListener('keyup', (event: KeyboardEvent) => {
    if (event.key === ' ') {
        event.preventDefault()
        on_next_action()
    }
    if (event.key === 'PageUp' || event.key === 'Home') {
        event.preventDefault()
        scrollToIndex(0, 'instant')
    }

    if (event.key === 'PageDown' || event.key === 'End') {
        event.preventDefault()
        scrollToIndex(slides.length-1, 'instant')
    }
})

window.addEventListener('mousedown', event => {
    event.preventDefault()
})
window.addEventListener('mouseup', event => {
    event.preventDefault()
    on_next_action()
})

const scrollToIndex = (index: number, behavior: ScrollBehavior = 'smooth' ) => {
    window.scrollTo({
        top: window.innerHeight * index,
        behavior: behavior 
    })
    current_slide_index = index
    let current_slide = slides[current_slide_index]
    current_slide.reset()
}

const on_next_action = () => {
    let current_slide = slides[current_slide_index]

    if (current_slide == null) {
        return
    }

    scrollToIndex(current_slide_index)
    current_slide.onAction()
    current_slide_index ++
}


// window.dispatchEvent(new KeyboardEvent('keyup', {'key': ' '}))