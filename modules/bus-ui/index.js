import Selector from './Selector'
import Carousel from './Carousel'
import CarItem from './Carousel/CarItem.vue'

const COMPONENTS = [Selector, Carousel, CarItem]
let JsAppUI = {}

JsAppUI.install = function(Vue, options) {
    console.log(options)
    COMPONENTS.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default JsAppUI
