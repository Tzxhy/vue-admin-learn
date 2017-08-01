import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue' 
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import BasicSetting from './views/nav7/BasicSetting.vue'
import BasicChannel from './views/nav7/BasicChannel.vue'
import WorkOrder from './views/nav1/WorkOrder.vue'
import OnlineService from './views/nav1/OnlineService.vue'
import MyReception from './views/nav1/MyReception.vue'
import WorkOverview from './views/nav2/WorkOverview.vue'
import WorkService from './views/nav2/WorkService.vue'
import WorkRobot from './views/nav2/WorkRobot.vue'
import HistorySession from './views/nav3/HistorySession.vue'
import AllPerson from './views/nav4/AllPerson.vue'
import Group from './views/nav4/Group.vue'
import IntellenceLib from './views/nav5/IntellenceLib.vue'
import IntellenceRela from './views/nav5/IntellenceRela.vue'
import IntellenceStudy from './views/nav5/IntellenceStudy.vue'
import IntellenceTotal from './views/nav5/IntellenceTotal.vue'
import CopyInfo from './views/nav6/CopyInfo.vue'


let routes = [
{
  path: '/login',
  component: Login,
  name: '',
  hidden: true
},
{
  path: '/register',
  component: Register,
  name: '',
  hidden: true
},
{
  path: '/404',
  component: NotFound,
  name: '',
  hidden: true
},
//{ path: '/main', component: Main },
{
  path: '/',
  component: Home,
  name: '主页',
  leaf: true,
  iconCls: 'el-icon-message',//图标样式class
  children: [// 匹配到的路由会更新到  Home  组件  中的   route-view中
  { path: '/work-order', component: WorkOrder, name: '主页' },
  // { path: '/work-order', component: WorkOrder, name: '我的工单' },
  // { path: '/reception', component: MyReception, name: '我的接待' },
  // { path: '/online-customer-service-overview', component: OnlineService, name: '在线客服概况' },
  ]
},
{
  path: '/',
  component: Home,
  name: '工作报表',
  iconCls: 'fa fa-id-card-o',
  children: [
  { path: '/work-overview', component: WorkOverview, name: '总览' },
  { path: '/work-service', component: WorkService, name: '客服' },
  { path: '/work-robot', component: WorkRobot, name: '机器人' }
  ]
},
// {
//   path: '/',
//   component: Home,
//   name: '历史会话',
//   leaf: true,
//   iconCls: 'fa fa-address-card',
//   // leaf: true,//只有一个节点
//   children: [
//   { path: '/history-session', component: HistorySession, name: '历史会话' }
//   ]
// },
{
  path: '/',
  component: Home,
  name: '客服管理',
  iconCls: 'fa fa-bar-chart',
  children: [
  { path: '/all-person', component: AllPerson, name: '所有人' },
  { path: '/group', component: Group, name: '分组' },
  ]
},{
  path: '/',
  component: Home,
  name: '知识库',
  iconCls: 'fa fa-bar-chart',
  children: [
  { path: '/intellence-lib', component: IntellenceLib, name: '知识库' },
  // { path: '/intellence-rela', component: IntellenceRela, name: '相似词库' },
  { path: '/intellence-study', component: IntellenceStudy, name: '问题学习' },
  { path: '/intellence-total', component: IntellenceTotal, name: '问题统计' },
  ]
},{
  path: '/',
  component: Home,
  name: '企业账户管理',
  iconCls: 'fa fa-bar-chart',
  leaf: true,
  children: [
  { path: '/customer-list', component: CopyInfo, name: '企业账户管理' },
  // { path: '/copy-list', component: echarts1, name: '公司列表' },
  ]
},{
  path: '/',
  component: Home,
  name: '设置',
  iconCls: 'fa fa-bar-chart',
  children: [
  { path: '/setting-basic', component: BasicSetting, name: '基本设置' },
  { path: '/setting-channel', component: BasicChannel, name: '支持渠道' },
  ]
},
{
  path: '*',
  hidden: true,
  redirect: { path: '/404' }
}
];

export default routes;