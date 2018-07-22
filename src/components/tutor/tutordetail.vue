<template>
  <transition name="slide">
    <div class="tutordetail">
      <div class="tutordetail-header">
        <i class="icon-home"></i>
        <span>家教详细信息</span>
      </div>
      <div class="tutordetail-content">
        <div class="basicinfo">
          <div class="pic">
            <img src="static/images/head_pic8.jpg" alt="用户头像">
          </div>
          <div class="info">
            <h1>
              <span>{{detail.username}}&nbsp;|</span>
              <span>{{detail.teachexperience}}年</span>
            </h1>
            <star :size="48" :score="4.5"></star>
            <p>武汉纺织大学&nbsp;|&nbsp;大二</p>
          </div>
        </div>
        <div class="detail">
          <p>
            <span>试讲时间：{{detail.try_teachtime}}</span>
            <span>试讲价格：免费试讲</span>
          </p>
          <p>
            <span>授课阶段：小学语数外</span>
            <span>授课价格：{{detail.try_price}}</span>
          </p>
          <p>个人说明：{{detail.introduction}}</p>
        </div>
        <div class="teachtime">
          <h1>== 授课时间==</h1>
          <table>
            <thead>
              <tr>
                <td>授课时间</td>
                <td>周一</td>
                <td>周二</td>
                <td>周三</td>
                <td>周四</td>
                <td>周五</td>
                <td>周六</td>
                <td>周日</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>上午</td>
                <td>√</td>
                <td></td>
                <td></td>
                <td>√</td>
                <td></td>
                <td>√</td>
                <td>√</td>
              </tr>
              <tr>
                <td>下午</td>
                <td></td>
                <td></td>
                <td>√</td>
                <td>√</td>
                <td></td>
                <td>√</td>
                <td>√</td>
              </tr>
              <tr>
                <td>晚上</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>√</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="evaluations">
          <p class="icons">
            <i class="icon-collect"></i>
            <span>(4)</span>
            <i class="icon-evaluation"></i>
            <span>(2)</span>
          </p>
          <ul>
            <li v-for="(evaluation,index) in evaluations" :key="index" class="evaluation-item">
              <p>{{evaluation}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type='text/ecmascript-6'>
  import star from 'components/star/star.vue';
  import {ERR_OK, tutorDetail} from 'api/index';
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        detail: {},
        evaluations: [
          '陈女士：该学生老师认真负责，懂得和孩子打成一片，方法有道，且积极正能量...',
          '张先生：该学生老师认真负责，懂得和孩子打成一片，方法有道，且积极正能量...',
          '李先生：该学生老师认真负责，懂得和孩子打成一片，方法有道，且积极正能量...'
        ]
      };
    },
    created() {
      console.log(this.tutor);
      this._getTutorDetail();
    },
    methods: {
      _getTutorDetail() {
        // let userId = this.$route.params.userId;
        let userId = this.tutor.userId;
        tutorDetail(userId).then(response => {
          response = response.data;
          if (response.code === ERR_OK) {
            this.detail = response.data;
          }
        }).catch(error => {
          console.log(error);
        });
      }
    },
    computed: {
      ...mapGetters([
        'tutor'
      ])
    },
    components: {
      star
    }
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../common/stylus/mixin";
.tutordetail
  position fixed
  z-index 100
  top 0
  left 0
  right 0
  bottom 0
  background #ffffff
  .tutordetail-header
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
    .tutordetail-content
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
      .detail
        font-size 12px
        line-height 20px
      .teachtime
        width 100%
        h1
          margin 12px auto
          color #0c9
          font-size 14px
          text-align center
          font-size 12px
        table
          border-left 1px solid rgba(7, 17, 27, .1)
          border-top 1px solid rgba(7, 17, 27, .1)
          font-size 12px
          width 100%
          td
            height 20px
            line-height 20px
            box-sizing border-box
            padding 5px
            text-align center
            border-right 1px solid rgba(7, 17, 27, .1)
            border-bottom 1px solid rgba(7, 17, 27, .1)
      .evaluations
        width 100%
        font-size 0
        .icons
          width 80px
          height 24px
          line-height 24px
          border-1px (rgba(7, 17, 27, .1))
          font-size 12px
          vertical-align middle
          margin 20px 0 8px
          .icon-collect
            color #f01414
            font-size 14px
          .icon-evaluation
            margin-left 10px
            color #0c9
            font-size 12px
        .evaluation-item
          width 100%
          box-sizing border-box
          padding 2px
          p
            line-height 15px
            font-size 12px
            color #93999f
.slide-enter-active,.slide-leave-active
    transition all .5s ease-out
.slide-enter
    transform translateX(500px)
    opacity 0
.slide-leave-active
    transform translateX(500px)
    opacity 0
</style>
