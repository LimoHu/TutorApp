<template>
  <div class="recruitdetail">
    <div class="recruitdetail-header">
      <i class="icon-home"></i>
      <span>招聘详细信息</span>
    </div>
    <div class="recruitdetail-content">
      <div class="basicinfo">
        <div class="pic">
          <img src="static/images/head_pic8.jpg" alt="用户头像">
        </div>
        <div class="info">
          <h1>
            <span>{{detail.username}}</span>
          </h1>
          <p>{{detail.grade}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import {ERR_OK, recruitDetail} from 'api/index';
  export default {
    data() {
      return {
        detail: {}
      };
    },
    created() {
      this._getRecruitDetail();
    },
    methods: {
      _getRecruitDetail() {
        let recruitId = this.$route.query.recruitId;
        recruitDetail(recruitId).then(response => {
          response = response.data;
          if (response.code === ERR_OK) {
            this.detail = response.data;
          }
        }).catch(error => {
          console.log(error);
        });
      }
    }
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .recruitdetail-header
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
  .recruitdetail-content
    width 100%
    box-sizing border-box
    padding 10px
    font-size 0
    .basicinfo
      display flex
      width 100%
      height 80px
      box-sizing border-box
      margin-bottom: 15px;
      border-1px (rgba(7, 17, 27, .1))
      .pic
        flex 0 0 68px
        img
          width 68px
          height 68px
          border-radius 5px
          margin-right 10px
      .info
        flex 1
        h1
          height 30px
          line-height 30px
          font-size 14px
        p
          height 20px
          line-height 20px
          font-size 12px
          margin-top: 4px;
</style>
