<template>
  <div class="recruit">
    <div class="header">123</div>
    <div class="content">
      <ul>
        <li v-for="(recruit,index) in recruitList" :key="index" class="recruit-item">
          <div class="pic">
            <img src="static/images/head_pic2.jpg" alt="" >
          </div>
          <div class="info">
            <h1>
              <span class="name">{{recruit.username}}</span>
              <span class="grade">{{recruit.grade}}</span>
              <div class="price">
                ¥&nbsp;{{recruit.pay}}
                <span class="limit">起</span>
              </div>
            </h1>
            <p>
              <span>{{recruit.location}}</span>
            </p>
            <p>
              <span>{{recruit.detail}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  const ERR_OK = '0000';
  export default {
    data() {
      return {
        recruitList: {}
      };
    },
    created() {
      let param = {
        'url': '/TutorWebsite/RecruitInfo/recruitInfoList.do',
        'currentPage': 1,
        'pageSize': 5
      };
      this.$http.post(param.url, param, {emulateJSON: true}).then(response => {
        response = response.body;
        if (response.code === ERR_OK) {
          this.recruitList = response.data;
        }
      });
    }
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../common/stylus/mixin";
  .header
      width 100%
      background #0c9
      height 38px
      line-height 38px
      font-size 0
  .content
    position relative
    width 100%
    font-size 0
    .recruit-item
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
          .grade
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
