<template>
  <div class="login">
    <div class="background">
      <img src="./bg2.jpg" width="100%" height="100%">
    </div>
    <div class="login-content">
      <p>
        <i></i>
        <input type="text" placeholder="登陆账号" class="txt">
      </p>
      <p>
        <i></i>
        <input type="passwprd" placeholder="登陆密码" class="txt">
      </p>
      <div class="btns">
        <input type="button" value="登陆">
        <a href="#">没有账号？点击注册</a>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {

  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .login
    position: absolute;
    width: 100%
    height: 100%
    background #fff
    color #ffffff
    top: 0
    left: 0
    z-index: 1
    .background
      position relative
      margin-top 18%
      width 100%
      height 40%
      filter blur(2px)
    .login-content
      position relative
      width 100%
      box-sizing border-box
      padding 20px 50px
      p
        height 42px
        line-height 42px
        border-bottom 1px solid rgba(7,17,27,0.1)
        .txt
          font-size 16px
          background none
          width 90%
          vertical-align middle
          margin-left 5px
          color #ccc
          border 0px
          outline none  // 点击时去掉外边框
          cursor pointer
          // border 1px solid rgba(7,17,27,0.1)
          &::placeholder
            color #0c9
      .btns
        height 42px
        line-height 42px
        margin-top 10px
        text-align center
        input
          width 100%
          height 38px
          background #0c9
          color #ffffff
          border-radius 2px
        a
          font-size 10px
          text-decoration underline
</style>
