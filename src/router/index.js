import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import product from '@/components/product'
import productList from '@/components/productList'
import productDetails from '@/components/productDetails'
import solution from '@/components/solution'
import solutionList from '@/components/solutionList'
import solutionDetails from '@/components/solutionDetails'
import research from '@/components/research'
import researchList from '@/components/researchList'
import researchDetails from '@/components/researchDetails'
import gyzr from '@/components/gyzr'
import lxzr from '@/components/lxzr'
import zzzs from '@/components/zzzs'
import ryzs from '@/components/ryzs'
import rczp from '@/components/rczp'
import rczpDetails from '@/components/rczpDetails'
import xzfl from '@/components/xzfl'
import zrsh from '@/components/zrsh'
import jchd from '@/components/jchd'
import partner from '@/components/partner'
import zlhz from '@/components/zlhz'
import fwzx from '@/components/fwzx'
import fwzxList from '@/components/fwzxList'
import fwzxDetails from '@/components/fwzxDetails'
import gsxw from '@/components/gsxw'
import xwxq from '@/components/xwxq'
import ldgh from '@/components/ldgh'
import mtbd from '@/components/mtbd'
import scdt from '@/components/scdt'
import gssp from '@/components/gssp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: index},
    { path: '/product', name: 'product', component: product},//产品中心
    { path: '/productList', name: 'productList', component: productList},//产品中心列表
    { path: '/productDetails', name: 'productDetails', component: productDetails},//产品中心文章
    { path: '/solution', name: 'solution', component: solution},//解决方案
    { path: '/solutionList', name: 'solutionList', component: solutionList},//解决方案列表
    { path: '/solutionDetails', name: 'solutionDetails', component: solutionDetails},//解决房方案详情
    { path: '/research', name: 'research', component: research},//研究中心
    { path: '/researchList', name: 'researchList', component: researchList},//研究中心列表
    { path: '/researchDetails', name: 'researchDetails', component: researchDetails},//研究中心详情
    { path: '/gyzr', name: 'gyzr', component: gyzr},//关于众人
    { path: '/lxzr', name: 'lxzr', component: lxzr},//联系众人
    { path: '/zzzs', name: 'zzzs', component: zzzs},//资质证书
    { path: '/ryzs', name: 'ryzs', component: ryzs},//荣誉证书
    { path: '/rczp', name: 'rczp', component: rczp},//人才招聘
    { path: '/rczpDetails', name: 'rczpDetails', component: rczpDetails},//人才招聘详情
    { path: '/xzfl', name: 'xzfl', component: xzfl},//薪资福利
    { path: '/zrsh', name: 'zrsh', component: zrsh},//生活在众人
    { path: '/jchd', name: 'jchd', component: jchd},//精彩活动
    { path: '/partner', name: 'partner', component: partner},//合作伙伴
    { path: '/zlhz', name: 'zlhz', component: zlhz},//战略合作
    { path: '/fwzx', name: 'fwzx', component: fwzx},//服务中心
    { path: '/fwzxList', name: 'fwzxList', component: fwzxList},//服务中心列表
    { path: '/fwzxDetails', name: 'fwzxDetails', component: fwzxDetails},//服务中心内容
    { path: '/gsxw', name: 'gsxw', component: gsxw},//新闻动态列表
    { path: '/xwxq', name: 'xwxq', component: xwxq},//新闻动态详情
    { path: '/ldgh', name: 'ldgh', component: ldgh},//领导关怀
    { path: '/mtbd', name: 'mtbd', component: mtbd},//媒体报道
    { path: '/scdt', name: 'scdt', component: scdt},//市场动态
    { path: '/gssp', name: 'gssp', component: gssp},//公司视频
  ]
})