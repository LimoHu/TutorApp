<template>
  <div class="home">
    <div class="header">
      <div class="location">
        <img src="static/images/location.png" alt="" title="定位"  class="location-inco">
        <span class="locaition-name">蔡甸</span>
      </div>
      <div class="search">
        <img class="search-btn" src="static/images/search.png">
        <input type="text" placeholder="请输入关键字" class="search-text">
      </div>
      <div class="msg">
        <img src="static/images/msg.png" alt="消息" class="msg-inco">
      </div>
    </div>
    <div class="content">
      <div class=""></div>
      <div class="search-items"></div>
      <div class="headlines"></div>
      <div class="tutors"></div>
      <div class="discories"></div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.home
  width 100%
  .header
    width 100%
    display flex
    background #00CC99
    height 38px
    font-size 0
    .location
      flex 0 0 60px
      width 60px
      height 20px
      line-height 20px
      margin-top 9px
      border-right 1px solid rgba(7,17,27,0.1)
      padding 0 5px
      box-sizing border-box
      .location-inco
        width 14px
        height 14px
        vertical-align middle
      .locaition-name
        font-size 12px
        color #fff
        vertical-align middle
        margin-left 5px
    .search
      flex 1
      height 22px
      line-height 22px
      margin 5px 16px
      border-bottom 1px solid rgba(255,255,255,0.4)
      .search-btn
        width 15px
        height 15px
        vertical-align middle
      .search-text
        font-size 10px
        background none
        width 90%
        vertical-align middle
        margin-left 5px
        color #fff
        border 0px
        outline none  // 点击时去掉外边框
        cursor pointer
        &::placeholder
         color rgba(255,255,255,0.6)
    .msg
      flex 0 0 32px
      width 32px
      height 20px
      line-height 20px
      margin-top 9px
      border-left 1px solid rgba(7,17,27,0.1)
      text-align center
      .msg-inco
        width 15px
        height 15px
</style>
