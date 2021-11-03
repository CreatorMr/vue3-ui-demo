<template>
  <div>
    <my-select
      :data="data"
      :callback="change"
      :currentIndex="curIdx"
    ></my-select>
    <my-link href="http://baidu.com" target="_blank" type="success"
      >baidu</my-link
    >

    <Selector :data="selectorData" @setItemVaule="setItemVaule" />
  </div>
</template>

<script>
// import MySelect from '../modules/my-ui/Select'
// import MyLink from '../modules/my-ui/Link'
import { ref } from 'vue'
export default {
  name: 'App',
  // components: {
  //   MySelect,
  //   MyLink
  // },
  setup() {
    const data = [
      {
        id: 1,
        value: 'beijing',
        label: '北京'
      },
      {
        id: 2,
        value: 'shanghai',
        label: '上海'
      },
      {
        id: 3,
        value: 'guangzhou',
        label: '广州'
      }
    ]
    const change = (index, item) => {
      console.log(index, item, '当前项')
    }
    const curIdx = ref(1) // 默认值

    const selectorData = [
      {
        id: 1,
        value: 'react',
        text: 'React'
      },
      {
        id: 2,
        value: 'vue',
        text: 'Vue'
      },
      {
        id: 3,
        value: 'angular',
        text: 'Angular'
      },
      {
        id: 4,
        value: 'react-hooks',
        text: 'React-Hooks'
      },
      {
        id: 5,
        value: 'vue-router',
        text: 'Vue-Router'
      }
    ]
    const setItemVaule = (value) => {
      console.log(value)
    }
    return {
      curIdx,
      data,
      change,
      setItemVaule,
      selectorData
    }
  }
}
</script>

<style lang="scss">
</style>
