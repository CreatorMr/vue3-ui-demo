<template>
  <div class="my-select">
    <div class="result" @click="openOption">{{ data[curIdx].label }}</div>
    <div class="options" v-show="optionShow">
      <div
        class="option"
        v-for="(item, index) of data"
        :key="item.id"
        @click="change(index, item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'MySelect',
  props: {
    data: Array,
    currentIndex: {
      type: Number,
      default: 0
    },
    callback: Function
  },
  setup(props) {
    console.log(props, 'props')
    const state = reactive({
      curIdx: props.currentIndex,
      optionShow: false
    })
    const change = (index, item) => {
      state.curIdx = index
      state.optionShow = false
      props.callback(index, item)
    }
    const openOption = () => {
      state.optionShow = true
    }
    return {
      ...toRefs(state),
      change,
      openOption
    }
  }
}
</script>
<style lang="scss">
.my-select {
  position: relative;
  width: 200px;
  height: 34px;
  border: 1px solid #000;
  cursor: pointer;

  .result {
    width: 100%;
    height: 100%;
    line-height: 34px;
    text-align: center;
  }
  .options{
    position: absolute;
    top: 35px;
    left: -1px;
    width: 200px;
    background-color: #FFFFFF;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    .option{
      height: 34px;
      border-bottom: 1px solid #000;
      line-height: 34px;
      text-align: center;
    }
  }
}
</style>
