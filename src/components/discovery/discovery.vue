<template>
  <div class="discovery">
    <div class="header"></div>
    <div class="content">
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
</template>

<script type='text/ecmascript-6'>
  export default {
    data() {
      return {
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
          },
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
          },
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
    }
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .header
    width 100%
    display flex
    background #43CD80
    height 38px
    font-size 0
  .content
    width 100%
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
