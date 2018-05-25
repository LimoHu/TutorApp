import Vue from 'vue';
import Router from 'vue-router';
import home from 'components/home/home';
import recruit from 'components/recruit/recruit';
import discovery from 'components/discovery/discovery';
import tutor from 'components/tutor/tutor';
import mine from 'components/mine/mine';

Vue.use(Router);

const routes = [{
  path: '/',
  redirect: '/home' /* 设置默认访问页面 */
}, {
  path: '/home',
  component: home
}, {
  path: '/recruit',
  component: recruit
}, {
  path: '/tutor',
  component: tutor
}, {
  path: '/discovery',
  component: discovery
}, {
  path: '/mine',
  component: mine
}];

// 实例化一个router
export default new Router({
  linkActiveClass: 'active',
  routes
});