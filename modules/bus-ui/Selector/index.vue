<template>
  <div class="selector" v-focus>
    <SelectorInput
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    />
    <SelectorMenu
      :data="data"
      @setItemVaule="setItemVaule"
      :searchValue="searchValue"
    />
  </div>
</template>

<script>
import SelectorInput from './InInput.vue'
import SelectorMenu from './Menu.vue'
import { focus } from '../../directives'
import { reactive, toRefs } from 'vue'
export default {
  name: 'Selector',
  directives: {
    focus
  },
  components: {
    SelectorInput,
    SelectorMenu
  },
  props: {
    placeholder: String,
    data: Array
  },
  setup(props, ctx) {
    const state = reactive({
      inputValue: '',
      searchValue: ''
    })
    const setItemVaule = (item) => {
      state.inputValue = item.text
      ctx.emit('setItemVaule', item.value)
    }
    const searchOptions = (value) => {
      console.log(value)
      state.searchValue = value
    }
    return {
      ...toRefs(state),
      setItemVaule,
      searchOptions
    }
  }
}
</script>

<style lang="scss" scoped>
.selector {
  position: relative;
  width: 300px;
}
</style>