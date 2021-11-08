<template>
  <div id="app">
    <div class="side-bar">
      <tree-menu>
        <template v-for="item of treeMenuData">
          <menu-item v-if="!item.children" :key="item.id">
            {{ item.title }}
            <a href="https://baidu.com">dd</a>
          </menu-item>
          <re-sub-menu :key="item.id" v-else :data="item"></re-sub-menu>
        </template>
      </tree-menu>
    </div>

    <Selector :data="selectorData" @setItemVaule="setItemVaule" />
    <div class="container">
      <Carousel
        :autoplay="true"
        :duration="3000"
        :inital="0"
        :hasDot="true"
        :hasDirector="true"
      >
        <car-item v-for="(item, index) of carData" :key="index">
          <img :src="require(`../mock/img/${item.img_name}`)" />
        </car-item>
      </Carousel>

      <my-select
        :data="data"
        :callback="change"
        :currentIndex="curIdx"
      ></my-select>
      <my-link href="http://baidu.com" target="_blank" type="success"
        >baidu</my-link
      >
    </div>
  </div>
</template>

<script>
import carData from '../mock/carousel.data'
import selectorData from '../mock/selectData'
import treeMenuData from '../mock/treeMenu'
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

    const setItemVaule = (value) => {
      console.log(value)
    }
    return {
      curIdx,
      data,
      change,
      setItemVaule,
      selectorData,
      carData,
      treeMenuData
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 520px;
  height: 280px;
  margin: 200px auto;
}
.side-bar {
  width: 300px;
  margin-bottom: 40px;
}
</style>
