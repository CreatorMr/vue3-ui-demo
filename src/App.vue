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
    return {
      curIdx,
      data,
      change
    }
  }
}
</script>

<style lang="scss">
</style>
