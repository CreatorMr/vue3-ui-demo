<template>
  <div
    v-magnifier
    class="img-wrap"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px'
    }"
  >
    <a
      class="mag-wrap"
      :href="link"
      :target="blank ? '_blank ' : ''"
      :style="{
        width: magWidth + 'px',
        height: magHeight + 'px'
      }"
    >
      <img
        :src="imgUrl"
        :alt="altImg"
        :style="{
          width: imgWidth + 'px',
          height: imgHeight + 'px'
        }"
        class="mag-img"
      />
    </a>
    <a class="img-link" :href="link">
      <img :src="imgUrl" :alt="altImg" class="static-img" />
    </a>
  </div>
</template>

<script>
import { magnifier } from '../../directives'
export default {
  name: 'Magnifier',
  directives: {
    magnifier
  },
  props: {
    link: {
      type: String,
      default: ''
    },
    imgWidth: {
      type: Number,
      default: 375
    },
    imgHeight: {
      type: Number,
      default: 375
    },
    magWidth: {
      type: Number,
      default: 375
    },
    magHeight: {
      type: Number,
      default: 375
    },
    blank: {
      type: Boolean,
      default: true
    },
    imgUrl: {
      type: String,
      default: ''
    },
    altImg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.img-wrap {
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;

  .static-img {
    width: 100%;
  }

  .mag-wrap {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 3px #000;
    cursor: move;
    overflow: hidden;

    &.show {
      display: block;
      transform: scale(1.5);
    }

    .mag-img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>