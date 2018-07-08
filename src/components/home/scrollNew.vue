<template>
  <scroll-pull ref="refresh"
    class="wrapper"
    :data="tutorInfoList"
    :pulldown="pullDown"
    :pullup="pullUp"
    @pulldown="loadData"
    @scrollToEnd="loadUp">
    <ul class="content">
      <li v-for="(tutor,index) in tutorInfoList" :key="index" class="tutor-item" @click="selectTutor(tutor.userId)">
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
  </scroll-pull>
</template>
<script>
  import {ERR_OK, tutorList} from 'api/index';
  import ScrollPull from 'base/scroll/scrollPull';
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
      this.loadData();
    },
    methods: {
      selectTutor(id) {
        this.$router.push({
          path: `/tutor/${id}`
        });
      },
      loadData() {
        this.tutorInfoList = [];
        this.curPage = 1;
        this.$refs.refresh.$emit('down-finishload'); // 此处emit这个触发事件的前提是refresh这个dom加载完，否则会报emit为undefind
        this._getDataInfo(this.curPage);
      },
      loadUp() {
        if (!this.curPage) return;
        this.curPage++;
        this.$refs.refresh.$emit('up-reinit');
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
            if (this.curPage >= response.totalPage) {
              this.curPage = false;
              this.$refs.refresh.$emit('up-allloaded');
            } else {
              this.$refs.refresh.$emit('up-finishload');
            }
          }
        });
      }
    },
    components: {ScrollPull}
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .wrapper
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
</style>
