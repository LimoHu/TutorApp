<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
      <!-- 轮播的原点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default{
    data() {
      return {
        slides: [
          'static/images/carousel7.jpg',
          'static/images/carousel4.jpg',
          'static/images/carousel5.jpg'
        ],
        // 轮播config
        swiperOption: {
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          centeredSlides: true, // <span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
          // 显示分页
          pagination: {
              el: '.swiper-pagination',
              clickable: true
          },
          // 切换模式  横屏或者竖屏
          // direction : 'vertical',
          // 设置自动播放速度
          autoplay: {
              disableOnInteraction: false,
              delay: 5000
          },
          loop: true, // 开启无限循环
          slidesPerView: 1, // 设置同屏显示的数量，默认为1，使用auto是随意的意思。
          mousewheel: true // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
          // freeMode:true
        }
      };
    },
    components: {
      swiper,
      swiperSlide
    }
  };
</script>

<style style lang='stylus' rel='stylesheet/stylus'>

.swiper
  margin 0 auto
  width 100%
  height 8.4rem
  overflow hidden
  .swiper-slide
    width 100%
    height 8.4rem
    &.swiper-slide-active
      img
        margin-top 0
        width 100%
        height 100%
    img
      display block
      margin 0 auto
      margin-top 3.5%
      width 90.625%
      height 90.625%
      vertical-align middle
      -webkit-transition all 1s ease 0s
      -moz-transition all 1s ease 0s
      -ms-transition all 1s ease 0s
      -o-transition all 1s ease 0s
      transition all 1s ease 0s
</style>
