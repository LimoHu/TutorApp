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
    <scroll :data="tutorList" ref="scroll" class="content">
      <div>
        <swiper></swiper>
        <div class="search-items"></div>
        <div class="headlines">
          <div class="title">
            <span>招聘头条</span>
          </div>
          <div class="lines">
            <textSwiper></textSwiper>
          </div>
          <div class="to-more">
            <img src="static/images/to-more.png" alt="更多">
          </div>
        </div>
        <div class="tutors">
          <h1>== 优质家教 ==</h1>
          <ul>
            <li v-for="(tutor,index) in tutorList" :key="index" class="tuor-item">
              <router-link :to="{path:'/tutordetail',query: {userId: tutor[0].userId}}">
                <div class="tutor-left">
                  <p>
                    <img src="static/images/head_pic2.jpg" alt="用户头像">
                    <span>{{tutor[0].realname}}&nbsp;|</span>
                    <span>{{tutor[0].teachexperience}}年&nbsp;|&nbsp;</span>
                    <span>{{tutor[0].identity}}</span>
                  </p>
                  <p>{{tutor[0].introduction}}</p>
              </div>
              </router-link>
              <router-link :to="{path:'/tutordetail',query: {userId: tutor[1].userId}}">
                <div class="tutor-right">
                  <p>
                    <img src="static/images/head_pic1.jpg" alt="用户头像">
                    <span>{{tutor[1].realname}}&nbsp;|</span>
                    <span>{{tutor[1].teachexperience}}年&nbsp;|&nbsp;</span>
                    <span>{{tutor[1].identity}}</span>
                  </p>
                  <p>{{tutor[1].introduction}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="discories">
          <h1>== 最新发现 ==</h1>
          <ul>
            <li v-for="(discovery, index) in discoveries" :key="index" class="discovery-item">
              <div class="left-pic">
                <img src="static/images/head_pic3.jpg" alt="文章图片" class="">
              </div>
              <div class="right-content">
                <h2>{{discovery.title}}</h2>
                <p>{{discovery.content}}</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
    </scroll>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Scroll from 'base/scroll/scroll';
  import Swiper from 'components/swiper/swiper';
  import TextSwiper from 'components/swiper/textswiper';
  import {ERR_OK, tutorDetailRecommend} from 'api/index';
  export default {
    data() {
      return {
        tutorList: [],
        discoveries: [
          {
            'title': '如何写好高考作文？',
            'content': '大量搜集满分作文，剖析他们的骨干脉络，观察他们的笔致文法，摸清楚一篇文章要表达什么，通过什么来表现，为什么要这么表现，经过大量观察，你就会得出自己的结论，形成自己写作文的思路；'
          },
          {
            'title': '高考数学存在什么蒙题技巧？',
            'content': '高考时带一个量角器进考场，因为高考解析几何题一定会有求度数的小题，这时你就可以用量角器测一下，就可以写出最后结论，这是最简单也是最牛的高考数学蒙题技巧。'
          },
          {
            'title': '高考数学存在什么蒙题技巧？',
            'content': '数学选择不会时去除最大值与最小值二选一，老师告诉我们的！高考题百分之九十是这样的。'
          }
        ]
      };
    },
    created() {
      this._getTutorRecomend();
    },
    methods: {
      _getTutorRecomend() {
        tutorDetailRecommend().then(response => {
          response = response.data;
          if (response.code === ERR_OK) {
            this.tutorList.push([response.data[0], response.data[1]]);
            this.tutorList.push([response.data[2], response.data[3]]);
            this.tutorList.push([response.data[4], response.data[5]]);
          }
        }).catch(error => {
          console.log(error);
        });
      }
    },
    components: {
      Swiper,
      TextSwiper,
      Scroll
    }
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.home
  width 100%
  margin-bottom: 40px;
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
  .content
    position relative
    width 100%
    font-size 0
    height: 588px
    overflow hidden
    .headlines
      display flex
      height 72px
      width 100%
      border 1px solid rgba(7,17,27,0.1)
      padding 5px
      box-sizing border-box
      .title
        flex 0 0 36px
        width 36px
        height 100%
        line-height 20px
        border-right 1px solid rgba(7,17,27,0.1)
        span
          display inline-block
          margin 10px auto
          font-size 14px
          color #0c9
      .lines
        flex 1
        height 100%
        width 100%
        box-sizing border-box
        padding: 10px 15px;
      .to-more
        flex 0 0 30px
        width 30px
        height 100%
        position relative
        img
          display inline-block
          position absolute
          bottom 5px
          right 5px
          width 12px
          height 12px
    .tutors
      width 100%
      h1
        margin 12px auto
        color #0c9
        font-size 14px
        text-align center
      .tuor-item
        width 100%
        display flex
        a
          flex 1
          .tutor-left,.tutor-right
            border 1px solid rgba(7,17,27,0.1)
            height 96px
            margin 2px
            box-sizing border-box
            padding 10px 5px
            overflow hidden
            p
              width 100%
              font-size 10px
              color #93999f
              img
                width 36px
                height 36px
                border-radius 2px
                vertical-align middle
                margin-right 5px
              span
                font-size 12px
                color #00cc99
                vertical-align middle
    .discories
      width 100%
      h1
        margin 12px auto
        color #0c9
        font-size 14px
        text-align center
      .discovery-item
        display flex
        width 100%
        font-size 0
        border-top: 1px solid rgba(7,17,27,0.1);
        box-sizing border-box
        padding 5px
        .left-pic
          flex 0 0 70px
          width 70px
          img
            width 64px
            height 64px
        .right-content
          flex 1
          h2
            font-size 12px
            margin 5px 0
          p
           font-size 10px
           color #93999f
           line-height 15px
</style>
