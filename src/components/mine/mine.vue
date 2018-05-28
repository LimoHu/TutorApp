<template>
  <div class="mine">
    <div class="mine-header">
      <div class="mine-icon">
        <i class="icon-home"></i>
        <span>家教信息</span>
      </div>
      <div class="mine-basic">
        <div class="pic-info">
          <img src="static/images/head_pic6.jpg" alt="用户头像">
          <span>里斯（159****5049）</span>
        </div>
        <div class="to-detail">
          <img src="static/images/to-more1.png" alt="更多">
        </div>
      </div>
    </div>
    <div class="mine-content">
      <div class="mine-items">
        <div class="mine-orders">
          <img src="static/images/orders.png" alt="">
          <span>订单</span>
        </div>
        <div class="mine-cares">
          <img src="static/images/care.png" alt="">
          <span>关注</span>
        </div>
        <div class="mine-collects">
          <img src="static/images/collect1.png" alt="">
          <span>收藏</span>
        </div>
      </div>
      <div class="mine-list">
        <ul>
          <li>
            <img src="" alt="">
            <span>申请成为教员</span>
          </li>
          <li>
            <img src="" alt="">
            <span>我的课程表</span>
          </li>
          <li>
            <img src="" alt="">
            <span>我的发布</span>
          </li>
          <li>
            <img src="" alt="">
            <span>我的地址</span>
          </li>
          <li>
            <img src="" alt="">
            <span>设置</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../common/stylus/mixin";
  .mine-header
    width 100%
    background #0c9
    height 130px
    font-size 0
    .mine-icon
      width 100%
      height 38px
      line-height 38px
      span
        font-size 14px
        color #fff
        vertical-align middle
      .icon-home
        font-size 16px
        color #fff
        margin 10px 5px
        vertical-align middle
    .mine-basic
      display flex
      width 100%
      height 50px
      margin 18px 0
      .pic-info
        flex 1
        margin 5px 20px
        font-size 14px
        vertical-align middle
        img
          width 40px
          height 40px
          border-radius 50%
          vertical-align middle
          margin-right 10px
      .to-detail
        flex 0 0 30px
        width 30px
        height 50px
        img
          width 24px
          height 24px
          margin 13px auto
  .mine-content
    width 100%
    font-size 0
    background #ffffff
    .mine-items
      display flex
      height 52px
      line-height 52px
      border-1px (rgba(7, 17, 27, .1))
      .mine-orders,.mine-cares,.mine-collects
        flex 1
        font-size 14px
        text-align center
        img
          width 24px
          height 24px
          vertical-align middle
    .mine-list
      width 100%
      margin-top 30px
      border-top 1px solid rgba(7, 17, 27, .1)
      &>ul>li
        height 40px
        line-height 40px
        font-size 12px
        border-1px (rgba(7, 17, 27, .1))
        padding-left 20px
</style>
