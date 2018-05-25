<template>
  <div class="tutor">
    <div class="header">
      <i class="icon-home"></i>
      <span>家教信息</span>
    </div>
    <div class="content">
      <ul>
        <li v-for="(tutor,index) in tutorList" :key="index" class="tutor-item">
          <div class="pic">
            <img src="static/images/head_pic1.jpg" alt="" >
          </div>
          <div class="info">
            <h1>
              <span class="name">{{tutor.realname}}</span>
              <span class="identity">{{tutor.identity}}</span>
              <div class="price">
                ¥&nbsp;{{tutor.try_price}}
                <span class="limit">起</span>
              </div>
            </h1>
            <p>
              <span class="star-wrapper">
                <star :size="48" :score="4.5"></star>
              </span>
              <span>教龄{{tutor.teachexperience}}</span>
              <span>辅导阶段：{{tutor.teachtype}}</span>
            </p>
            <p>
              <span>{{tutor.introduction}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import star from 'components/star/star.vue';
  const ERR_OK = '0000';
  export default {
    data() {
      return {
        tutorList: {}
      };
    },
    created() {
      let param = {
        'url': '/TutorWebsite/TutorDetailInfo/tutorDetailInfoList.do',
        'currentPage': 1,
        'pageSize': 5
      };
      this.$http.post(param.url, param, {emulateJSON: true}).then(response => {
        response = response.body;
        if (response.code === ERR_OK) {
          this.tutorList = response.data;
          // console.log(this.tutorData);
        }
      });
    },
    components: {
      star: star
   }
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../common/stylus/mixin";
  .header
      width 100%
      display flex
      background #0c9
      height 38px
      line-height 38px
      font-size 0
      span
        font-size 14px
        color #fff
        vertical-align middle
      .icon-home
        font-size 16px
        color #fff
        margin 10px 5px
        vertical-align middle
  .content
    position relative
    width 100%
    font-size 0
    .tutor-item
      display flex
      padding 10px
      box-sizing border-box
      border-1px (rgba(7, 17, 27, .1))
      &:last-child
        border-none()
        margin-bottom: 0
      .pic
        flex 0 0 48px
        text-align center
        margin-right 10px
        img
          width 48px
          height 48px
          border-radius 10%
      .info  // 右侧内容
        flex 1
        font-size 12px
        color #93999f
        h1
          height 16px
          line-height 16px
          color #07111b
          font-size 16px
          margin 2px 0 8px 0
          position relative
          .identity
            display inline-block
            background-color #33CC00
            color white
            border-radius 5px
            padding 2px 3px
            margin-left 2px
            font-size 10px
          .price
            display inline-block
            position absolute
            right 5px
            top 0
            color #FF7256
            font-size 16px
            .limit
              font-size 10px
              font-style normal
              font-weight normal
              margin-left -3px
        p
          line-height 15px
</style>
