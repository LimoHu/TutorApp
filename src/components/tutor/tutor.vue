<template>
  <div class="tutor">
    <div class="header">
      <i class="icon-home"></i>
      <span>家教信息</span>
    </div>
    <scroll-pull ref="refresh"
      class="tutorList-content"
      :data="tutorInfoList"
      :pulldown="pullDown"
      :pullup="pullUp"
      @pulldown="loadDown"
      @scrollToEnd="loadUp">
      <ul class="content">
        <li v-for="(tutor,index) in tutorInfoList" :key="index" class="tutor-item" @click="selectTutor(tutor,$event)">
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
              <span>教龄{{tutor.teachexperience}}</span>
              <span>辅导阶段：{{tutor.teachtype}}</span>
            </p>
            <p>
              <span>{{tutor.introduction}}</span>
            </p>
          </div>
        </li>
      </ul>
      <div v-show="!tutorInfoList.length" class="loading-container">
        <loading></loading>
      </div>
    </scroll-pull>
    <router-view></router-view>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Star from 'components/star/star.vue';
  import Loading from 'base/loading/loading';
  import {ERR_OK, tutorList} from 'api/index';
  import ScrollPull from 'base/scroll/scrollPull';
  import {mapMutations} from 'vuex';

  export default {
    data() {
      return {
        tutorInfoList: [],
        pullDown: true,
        pullUp: true,
        curPage: 1
      };
    },
    mounted() {
      this.loadDown();
    },
    methods: {
      selectTutor(tutor, event) {
        if (!event._constructed) return;
        this.$router.push({
          path: `/tutor/${tutor.userId}`
        });
        this.setTutor(tutor);
      },
      loadDown() {
        this.tutorInfoList = [];
        this.curPage = 1;
        this._getDataInfo(this.curPage);
        this.$refs.refresh.$emit('down.finishload'); // 此处emit这个触发事件的前提是refresh这个dom加载完，否则会报emit为undefind
      },
      loadUp() {
        if (!this.curPage) return;
        this.curPage++;
        this.$refs.refresh.$emit('pullup.reinit');
        this._getDataInfo(this.curPage);
      },
      _getDataInfo(page) {
        let param = {
          'currentPage': page,
          'pageSize': 10
        };
        tutorList(param).then((response) => {
          response = response.data;
          if (response.code === ERR_OK) {
            this.tutorInfoList = response.data.concat(this.tutorInfoList);
            if (response.data.length >= param.pageSize) {
              this.$refs.refresh.$emit('pullup.finishload');
            } else {
              // this.curPage = false;
              this.$refs.refresh.$emit('pullup.loadeddone');
            }
          }
        });
      },
      ...mapMutations({
        setTutor: 'SET_TUTOR'
      })
    },
    components: {
      Star,
      ScrollPull,
      Loading
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
  .tutorList-content
    position relative
    width 100%
    font-size 0
    height 588px
    overflow hidden
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
    .loading-container
      position absolute
      width 100%
      top 20%
      line-height 32px
      font-size 12px
</style>
