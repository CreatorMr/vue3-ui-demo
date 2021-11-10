import Selector from './Selector'
import Carousel from './Carousel'
import CarItem from './Carousel/CarItem.vue'
import TreeMenu from './TreeMenu'
import MenuItem from './TreeMenu/MenuItem.vue'
import SubMenu from './TreeMenu/SubMenu.vue'
import ReSubMenu from './TreeMenu/ReSubMenu.vue'
import Magnifier from './Magnifier'


import './resets.css'
const COMPONENTS = [Selector, Carousel, CarItem, TreeMenu, MenuItem, SubMenu, ReSubMenu, Magnifier]
let JsAppUI = {}

JsAppUI.install = function(Vue, options) {
    console.log(options)
    COMPONENTS.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default JsAppUI
