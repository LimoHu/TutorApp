// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index.js';
import VueResource from 'vue-resource';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import 'common/stylus/index.styl';

Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App) // 让我们可以通过JavaScript的方式去初始化一个模板,吧APP组件传入然后就可以去渲染 app 组件
});
