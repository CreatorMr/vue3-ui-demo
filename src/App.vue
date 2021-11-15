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
      
      <Stars 
      :num="3"
      :size="20"
      @getStarNum="getStarNum"
      />
      <div class="magnifier-wrapper">
        <Magnifier
          :link="link"
          :blank="blank"
          :imgUrl="imgUrl"
          :altImg="altImg"
          :imgWidth="imgWidth"
          :imgHeight="imgHeight"
          :magWidth="magWidth"
          :magHeight="magHeight"
        />
      </div>
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
import { reactive, ref, toRefs } from 'vue'
// https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2Fmn02%2F123120152324%2F201231152324-0.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639151324&t=59b80e871c6781a16041b79417ceab6c
// https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2Fmn02%2F091920213343%2F200919213343-5.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639151429&t=0db7e65531b134996799f2b0abea5bbb
// 512 787  576
export default {
  name: 'App',
  // components: {
  //   MySelect,
  //   MyLink
  // },
  setup() {
    const state = reactive({
      imgUrl:
        ' https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2Fmn02%2F091920213343%2F200919213343-5.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639151429&t=0db7e65531b134996799f2b0abea5bbb',
      blank: true,
      link: 'www.baidu.com',
      imgWidth: 375,
      imgHeight: 576,
      magWidth: 100,
      magHeight: 100,
      altImg: '氧气'
    })
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
    const getStarNum = (num) => {
      console.log(num)
    }
    return {
      curIdx,
      data,
      change,
      setItemVaule,
      selectorData,
      carData,
      treeMenuData,
      ...toRefs(state),
      getStarNum
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

.magnifier-wrapper {
  width: 375px;
  margin: 100px auto;
}
</style>
