<!-- 评价星星 -->
<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass, index) in itemClasses" track-by="index" class="star-item" :class="itemClass" :key="index"></span>
  </div>
</template>

<script type='text/ecmascript-6'>
const LENGTH = 5; // 星星的总数
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export default {
  props: {
    size: { // 星星的尺寸 有24/36/48 三种尺寸 也可以直接写成  size: ['size']
        type: Number
    },
    score: { // 评分
      type: Number
    }
  },
  computed: {
    starType: function() { // 动态的返回star大小的样式
      return 'star-' + this.size;
    },
    itemClasses () {
      let result = [];
      // 例如 4.3 * 2 = 8.6 向下取整就是 9，9 / 2 就是 4.5
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !== 0;// 判断是否有小数
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }
      if (hasDecimal) {
        result.push(CLS_HALF);
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
      return result;
    }
  }
};

</script>
<style lang='stylus' rel='stylesheet/stylus'>
   @import "../../common/stylus/mixin";
  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width: 12px
        height: 12px
        margin-right: 2px
        background-size: 12px 12px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 16px
        backgroud-size: 15px 15px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        backgroud-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>
