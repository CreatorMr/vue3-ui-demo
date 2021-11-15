<template>
  <div class="ui-starts">
    <span
      v-for="num in 5"
      :key="num"
      :class="['iconfont icon-Star', num <= starNum ? 'active' : '']"
      :style="{ fontSize: size + 'px' }"
      @click="setStarNum(num)"
    >
    </span>
  </div>
</template>

<script>
import { useStars } from '../hooks'
export default {
  name: 'Stars',
  props: {
    num: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 16
    }
  },
  setup(props, ctx) {
   const [starNum, setStarNum] = useStars(props.num, () => {
     ctx.emit('getStarNum', starNum.value)
   })

    return {
      starNum,
      setStarNum
    }
  }
 
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont'; /* Project id 2910758 */
  src: url('//at.alicdn.com/t/font_2910758_b4djld8ybv.woff2?t=1636990210211')
      format('woff2'),
    url('//at.alicdn.com/t/font_2910758_b4djld8ybv.woff?t=1636990210211')
      format('woff'),
    url('//at.alicdn.com/t/font_2910758_b4djld8ybv.ttf?t=1636990210211')
      format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;

  &.icon-Star {
    transition: color 0.3s;
  }
  &.icon-Star:before {
    content: '\e643';
  }
  &.active {
    color: #fbab06;
  }
}
</style>