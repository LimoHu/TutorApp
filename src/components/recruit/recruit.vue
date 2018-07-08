<template>
  <div class="recruit">
    <div class="header">家教招聘</div>
    <scroll-pull ref="refresh"
      class="recruitList-content"
      :data="recruitInfoList"
      :pulldown="pullDown"
      :pullup="pullUp"
      @pulldown="loadDown"
      @scrollToEnd="loadUp">
      <ul class="content">
        <li v-for="(recruit,index) in recruitInfoList" :key="index" class="recruit-item">
          <router-link :to="{path:'/recruitdetail',query:{recruitId: recruit.recruitId}}">
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
          </router-link>
        </li>
      </ul>
      <div v-show="!recruitInfoList.length" class="loading-container">
        <loading></loading>
      </div>
    </scroll-pull>
  </div>
</template>

<script type='text/ecmascript-6'>
  import ScrollPull from 'base/scroll/scrollPull';
  import Loading from 'base/loading/loading';
  import {ERR_OK, recruitList} from 'api/index';
  export default {
    data() {
      return {
        recruitInfoList: [],
        pullDown: true,
        pullUp: true,
        curPage: 1
      };
    },
    mounted() {
      this._getRecruitList(1);
    },
    created() {
      // this._getRecruitList();
    },
    methods: {
      loadDown() {
        this.recruitInfoList = [];
        this.$refs.refresh.$emit('down.finishload'); // 此处emit这个触发事件的前提是refresh这个dom加载完，否则会报emit为undefind
        this._getRecruitList(1);
      },
      loadUp() {
        if (!this.curPage) return;
        this.curPage++;
        this.$refs.refresh.$emit('pullup.reinit');
        this._getRecruitList(this.curPage);
      },
      _getRecruitList(page) {
        let param = {
          'currentPage': page,
          'pageSize': 10
        };
        recruitList(param).then(response => {
          this.$nextTick(() => {
            response = response.data;
            if (response.code === ERR_OK) {
              this.recruitInfoList = response.data.concat(this.recruitInfoList);
              if (response.data.length >= param.pageSize) {
                this.$refs.refresh.$emit('pullup.finishload');
              } else {
                // this.curPage = false;
                this.$refs.refresh.$emit('pullup.loadeddone');
              }
            }
          });
        });
      }
    },
    components: {
      Loading,
      ScrollPull
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
  .recruitList-content
    position relative
    width 100%
    font-size 0
    height 588px
    overflow hidden
    .recruit-item
      padding 10px
      box-sizing border-box
      border-1px (rgba(7, 17, 27, .1))
      &:last-child
        border-none()
        margin-bottom: 0
      a
        display flex
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
    .loading-container
      position absolute
      width 100%
      top 20%
      transform: translateY(-50%)
</style>
