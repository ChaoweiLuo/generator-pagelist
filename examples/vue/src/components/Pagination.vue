<template>
  <div class="luo-page">
    <div @click="change(item)" :class="item | classFilter(value)" v-for="(item,index) in items" :key="index" >
      {{ item.display }}
    </div>
  </div>
</template>
<script>
import page from 'generator-pagelist';

export default {
  props: {
    value: { //当前页
      type: Number,
      default: 1
    },
    total: { // 总共几页
      type: Number,
      default: 0
    },
    sideCount: { // 当前面一边有几个相邻的页码
      type: Number,
      default: 1
    },
    prevText: { // 上一页怎么显示
      type: String,
      default: '<'
    },
    nextText: { // 下一页怎么显示
      type: String,
      default: '>'
    },
    ellipsisText: { //省略的那些显示符号
      type: String,
      default: '...'
    }
  },
  filters: {
    classFilter(item, value) {
      let classList = ['luo-page-item'];
      return `${Reflect.has(item, 'page') ? 'luo-page-item ' : 'luo-page-ellipsis'} ${item.page === value ? 'active' : ''}`
    }
  },
  methods: {
    change(page) {
      if(page && Reflect.has(page, 'page')) {
        this.$emit('change', page.page);
        this.$emit('input', page.page);
      }
    }
  },
  computed: {
    items() {
      return page(this.value, this.total, this.sideCount, this.prevText, this.nextText, this.ellipsisText);
    }
  }
}
</script>
<style lang="scss">


.luo-page {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .luo-page-ellipsis {
    min-width: 2.5em;
    min-height: 2.5em;
    line-height: 2.5em;
    overflow: hidden;
  }
  .luo-page-item {
    @extend .luo-page-ellipsis;
    border: 1px solid #646464;
    border-radius: 2em;
    margin:0 2px;
    cursor: pointer;
    &.active {
      background-color: red;
    }
  }
}
</style>