<template>
  <div class="carousel" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div class="inner">
      <Director dir="prev" @dirClick="dirClick('prev')"/>
      <Director dir="next" @dirClick="dirClick('next')"/>

      <CarDot
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      ></CarDot>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  getCurrentInstance,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs
} from 'vue'
import CarDot from './Dot.vue'
import Director from './Director.vue'
export default {
  name: 'Carousel',
  components: {
    CarDot,
    Director
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 300
    },
    inital: {
      type: Boolean,
      default: true
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    }
  },
  setup(props, ctx) {
    const instance = getCurrentInstance()
    const state = reactive({
      currentIndex: props.inital,
      itemLen: 0
    })

    let t = null
    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex('prev')
        }, props.duration)
      }
    }
    const dirClick = (dir) =>  {
      setIndex(dir)
    }
    const setIndex = (dir) => {
      switch (dir) {
        case 'next':
          state.currentIndex += 1
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0
          }
          break
        case 'prev':
          state.currentIndex -= 1
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1
          }
          break
        default:
          break
      }
    }

    const dotClick = (index) => {
      state.currentIndex = index
    }
    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length
      autoPlay()
    })

    onBeforeUnmount(() => {
      _clearIntervalFn()
    })
    const mouseenter = () => {
      _clearIntervalFn()
    }
    const mouseleave = () => {
      autoPlay()
    }

    function _clearIntervalFn() {
      clearInterval(t)
      t = null
    }
    return {
      ...toRefs(state),
      dotClick,
      mouseenter,
      mouseleave,
      dirClick
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100%;
  .inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>
