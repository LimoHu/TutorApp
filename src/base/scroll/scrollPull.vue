<template>
  <div ref="wrapper">
    <div>
      <div class="pulldown" v-if="pulldown" :style="`margin-top: ${dragTip.translate}px`">
        <div class="clear" v-if="dragTip.showLoding">
          <img src="./loading.gif" alt="" width="24" height="24">
          <p>{{dragTip.text}}</p>
        </div>
    </div>
    <slot></slot>
    <div class="pullup" v-if="pullup">
      <div v-if="!isDone" class="clear">
        <img src="./loading.gif" alt="" width="24" height="24">
        <p>加载中...</p>
      </div>
      <div v-if="!isLoading && isDone" class="no-data">
        <p>没有更多数据了</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import Loading from 'base/loading/loading';
  export default {
    props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
      /**
       * 是否开启横向滚动
       */
      scrollX: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 列表的数据
       */
      data: {
        type: Array,
        default: null
      },
      /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullup: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
      pulldown: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发列表滚动开始的事件
       */
      beforeScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 当数据更新后，刷新scroll的延时。
       */
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    data() {
      return {
        dragTip: {
          text: '下拉刷新',
          translate: -60,
          showLoding: false
        },
        isLoading: false,
        isDone: false,
        n: 0
      };
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
        this._initScroll();
      }, 20);
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return;
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX
        });
        // 是否派发滚动事件
        if (this.listenScroll) {
          let me = this;
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos);
          });
        }
        // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            // 滚动到底部（上拉加载更多）
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              console.log(this.scroll.maxScrollY);
              // 自定义上拉加载更多时初始化事件
              this.$on('pullup.reinit', () => {
                this.isLoading = false;
                this.isDone = false;
              });
              // 自定义上拉加载所有数据加载完毕事件
              this.$on('pullup.loadeddone', this.loadDone);
              // 自定义一次上拉加载数据完毕事件
              this.$on('pullup.finishload', () => {
                this.isLoading = false;
              });
              this.$emit('scrollToEnd');
            }
          });
        }
        // 是否派发顶部下拉事件，用于下拉刷新
        if (this.pulldown) {
          this.scroll.on('scroll', (pos) => {
            this.dragTip.showLoding = true;
            this.isLoading = false;
            if (pos.y > 50) {
              this.dragTip.text = '释放刷新';
            }
          });
          this.scroll.on('touchend', (pos) => {
            // 下拉动作
            if (pos.y > 50) {
              this.dragTip.translate = 0;
              this.dragTip.text = '刷新中...';
              // 自定义下拉加载完毕事件
              this.$on('down.finishload', this.resetParams);
              this.$emit('pulldown');
            }
          });
        }
        // 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll');
          });
        }
      },
      resetParams() {
        setTimeout(() => {
          this.isLoading = false;
          this.isDone = false;
          this.dragTip = {
            text: '下拉刷新',
            translate: -60,
            showLoding: false
          };
        }, 600);
      },
      loadDone() {
        setTimeout(() => {
          this.n++;
          console.log(this.n);
          this.isLoading = false;
          this.isDone = true;
        }, 600);
      },
      disable() {
        // 代理better-scroll的disable方法
        this.scroll && this.scroll.disable();
      },
      enable() {
        // 代理better-scroll的enable方法
        this.scroll && this.scroll.enable();
      },
      refresh() { // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh();
      },
      scrollTo() { // 代理better-scroll的scrollTo方法
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
      },
      scrollToElement() { // 代理better-scroll的scrollToElement方法
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
      }
    },
    watch: { // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      data() {
        setTimeout(() => {
          this.refresh();
          /* this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            click: this.click,
            scrollX: this.scrollX
          }); */
          }, this.refreshDelay);
      }
    },
    components: {
      Loading
    }
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .pulldown,.pullup
    position relative
    width 100%
    height 60px
    div.clear
      padding 10px 0
      font-size 12px
      position absolute
      left 50%
      top 5px
      transform translate(-50%, 0)
      text-align center
      p
        line-height 20px
        font-size 12px
  .no-data
    text-align center
    line-height 50px
    font-size 12px
</style>
