<template>
  <div class="wrapper" ref="wrapper">
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
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import {ERR_OK, tutorList} from 'api/index';
  import ScrollTest from 'base/scroll/scrollTest';
  export default {
    data() {
      return {
        tutorInfoList: [],
        options: {
          pullDownRefresh: {
            threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
            stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
          },
          pullUpLoad: {
            threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
          },
          // pullDownRefresh: false, //关闭下拉
          // pullUpLoad: false, // 关闭上拉
          click: true,
          probeType: 3,
          startY: 0,
          scrollbar: false
        }

      };
    },
    created() {
      this.loadData();
    },
    mounted() {
      /* this.$nextTick(() => {
        this._initScroll();
      }); */
    },
    methods: {
      _initScroll () {
        this.foodsScroll = new BScroll(this.$refs.wrapper, this.options);
        // 下拉
        this.foodsScroll.on('pullingDown', () => {
          // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
          this.tutorInfoList = []; // 重置数据
          this.searchCondition.pageNo = 1; // 重置分页数
          this.loadData(); // 获取数据方法
        });
        // 上拉
        this.foodsScroll.on('pullingUp', () => {
          if (this.curPage < this.totalPage) { // 判断是否继续上拉刷新
            this.loadData(); // 获取数据方法
            console.log(0);
          }
        });
      },
      pullingDownUp () {
        this.foodsScroll.finishPullDown();
        this.foodsScroll.finishPullUp();
        this.foodsScroll.refresh(); // 重新计算元素高度
      },
      loadData () {
        let param = {
          'currentPage': 1,
          'pageSize': 10
        };
        tutorList(param).then((response) => {
          response = response.data;
          if (response.code === ERR_OK) {
            this.tutorInfoList = response.data.concat(this.tutorInfoList);
            console.log(this.tutorInfoList);
            this.$nextTick(() => {
              if (!this.scroll) {
                this.scroll = new BScroll(this.$refs.wrapper, this.options);
                this.scroll.on('touchend', (pos) => {
                  // 下拉动作
                  if (pos.y > 50) {
                    this.loadData();
                  }
                });
              } else {
                this.scroll.refresh();
              }
            });
          }
        });
      }
    }
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
