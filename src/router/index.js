import Vue from 'vue';
import Router from 'vue-router';
import stList from '@/components/stList';
import stDetail from '@/components/stDetail';
import stExchangeRate from '@/components/stExchangeRate';
import download from '@/components/download';
import privacy from '@/components/privacy';
import sharepage from '@/components/sharepage';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'download',
      component: download
    },
    {
      path: '/list/:type',
      name: 'stList',
      component: stList
    },
    {
      path: '/detail/:type/:id',
      name: 'stDetail',
      component: stDetail
    },
    {
      path: '/exchangerate',
      name: 'stExchangeRate',
      component: stExchangeRate
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy
    },
    {
      path: '/sharepage/:id',
      name: 'sharepage',
      component: sharepage
    }
  ]
})
