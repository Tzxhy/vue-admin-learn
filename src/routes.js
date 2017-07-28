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
import echarts from './views/charts/echarts.vue'
import WorkOrder from './views/nav1/WorkOrder.vue'
import OnlineService from './views/nav1/OnlineService.vue'

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
  iconCls: 'el-icon-message',//图标样式class
  children: [// 匹配到的路由会更新到  Home  组件  中的   route-view中
  { path: '/main', component: Main, name: '主页', hidden: true },
  { path: '/work-order', component: WorkOrder, name: '我的工单' },
  { path: '/reception', component: Form, name: '我的接待' },
  { path: '/online-customer-service-overview', component: OnlineService, name: '在线客服概况' },
  ]
},
{
  path: '/',
  component: Home,
  name: '工作报表',
  iconCls: 'fa fa-id-card-o',
  children: [
  { path: '/my-table', component: Page4, name: '我创建的工单' },
  { path: '/solved-table', component: Page5, name: '已解决的工单' },
  { path: '/unsolved-table', component: Page5, name: '未解决的工单' }
  ]
},
{
  path: '/',
  component: Home,
  name: '历史会话',
  iconCls: 'fa fa-address-card',
  // leaf: true,//只有一个节点
  children: [
  { path: '/page6', component: Page6, name: '导航三' }
  ]
},
{
  path: '/',
  component: Home,
  name: '客服管理',
  iconCls: 'fa fa-bar-chart',
  children: [
  { path: '/table-service', component: echarts, name: '工单客服' },
  { path: '/service-online', component: echarts, name: '在线客服' },
  ]
},{
  path: '/',
  component: Home,
  name: '知识库',
  iconCls: 'fa fa-bar-chart',
  children: [
  { path: '/question-manage', component: echarts, name: '问题管理' },
  { path: '/intellengence-study', component: echarts, name: '智能学习' },
  ]
},{
  path: '/',
  component: Home,
  name: '企业账号',
  iconCls: 'fa fa-bar-chart',
  children: [
  { path: '/customer-list', component: echarts, name: '客户列表' },
  { path: '/copy-list', component: echarts, name: '公司列表' },
  ]
},{
  path: '/',
  component: Home,
  name: '设置',
  iconCls: 'fa fa-bar-chart',
  children: [
  { path: '/setting-page', component: echarts, name: '对接页面' }
  ]
},
{
  path: '*',
  hidden: true,
  redirect: { path: '/404' }
}
];

export default routes;