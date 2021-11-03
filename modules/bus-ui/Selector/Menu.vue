<template>
  <div class="selector-menu">
    <template v-if="searchData.length > 0">
      <div
        class="menu-item"
        v-for="(item, index) of searchData"
        :key="index"
        @click="setItemValue(item)"
      >
        {{ item.text }}
      </div>
    </template>
    <NoDataTip v-else />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import NoDataTip from './NoDateTip.vue'
export default {
  name: 'SelectorMenu',
  components: { NoDataTip },
  props: {
    searchValue: String,
    data: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            value: 'vue',
            text: 'Vue'
          },
          {
            id: 2,
            value: 'react',
            text: 'React'
          },
          {
            id: 3,
            value: 'angular',
            text: 'Angular'
          }
        ]
      }
    }
  },
  setup(props, ctx) {
    const searchData = ref([])
    const setItemValue = (item) => {
      ctx.emit('setItemVaule', item)
    }
    const filterData = (value) => {
      searchData.value = props.data.filter((item) => {
        return item.text.toLowerCase().includes(props.searchValue.toLowerCase())
      })
    }
    watch(
      () => {
        return props.searchValue
      },
      (value) => {
        filterData(value)
      }
    )
    onMounted(() => {
      searchData.value = props.data
    })
    return {
      setItemValue,
      searchData
    }
  }
}
</script>

<style lang="scss" scoped>
.selector-menu {
  display: none;
  position: absolute;
  left: 0;
  top: 48px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  border-radius: 5px;
  cursor: pointer;
  .menu-item {
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    transition: background-color 0.3s liner;

    &:hover {
      background-color: #ededed;
    }
  }
}
</style>