<template>
  <div id="app">
    <router-view></router-view>
    <div class="root-nav">
      <div class="nav-item">
        <router-link to="/home">
          <i class="item-icon icon-home"></i>
          <span>首页</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/tutor">
          <i class="item-icon icon-tutor"></i>
          <span>家教</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/recruit">
          <i class="item-icon icon-hire"></i>
          <span>招聘</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/discovery">
          <i class="item-icon icon-discovery"></i>
          <span>发现</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/mine">
          <i class="item-icon icon-mine"></i>
          <span>我的</span>
        </router-link>
      </div>
      <!-- <div class="nav-item">
        <router-link to="/test">
          <i class="item-icon icon-mine"></i>
          <span>测试</span>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .root-nav
    position fixed
    display: flex
    bottom 0
    left 0
    width: 100%
    height: 40px
    margin: 50px auto 0
    background #f3f5f7
    border-top 1px solid rgba(7,17,27,0.1)
    overflow: hidden;
    .nav-item
      flex: 1
      text-align: center
      & > a
        display: block
        color: rgb(77, 85, 93)
        text-decoration: none
        position relative
        .item-icon
            display inline-block
            width 100%
            height 16px
            line-height 16px
            font-size 16px
            margin-top 4px
            box-sizing border-box
          span
            font-size 10px
        &.active
          color: #00CC99
</style>
