import Selector from './Selector'
const COMPONENTS =  [
    Selector
]
let JsAppUI = {};

JsAppUI.install = function(Vue, options) {
    console.log(options)
    COMPONENTS.forEach(component => {
        Vue.component(component.name, component)
    })
}


export default JsAppUI;