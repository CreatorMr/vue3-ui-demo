import Select from './Select'
import Link from './Link'

const MyUI = {}

// const MySelect = {}
// const MyLink = {}
// MySelect.install = Vue => Vue.component(Select.name, Select)
// MyLink.install = Vue => Vue.component(Link.name, Link)
// export {
//   MySelect,
//   MyLink
// }

const COMPONENTS = [
  Select,
  Link
]

MyUI.install = function(Vue, options) {
  console.log(options)
  COMPONENTS.forEach(component => {
    Vue.component(component.name, component);
  })
}

export default MyUI;