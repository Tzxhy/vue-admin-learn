<template>
	<div style="margin-top: 30px;">
		<h3>企业账户信息</h3>
		<el-form ref="form" :model="form" style="width: 500px;" label-width="100px" label-position="left">
  		<el-form-item label="活动名称">
    		<el-input v-model="form.name"></el-input>
    	</el-form-item>
    	<el-form-item label="企业账户">
    		<span>{{form.account}}</span>
    	</el-form-item>
    	<el-form-item label="登录域名">
    		<span>{{form.domain}}</span>
    	</el-form-item>
    	<el-form-item label="企业联系人">
    		<el-input v-model="form.contact"></el-input>
    	</el-form-item>
    	<el-form-item label="手机">
    		<el-input v-model="form.phone"></el-input>
    	</el-form-item>
    	<el-form-item label="邮箱">
    		<el-input v-model="form.email"></el-input>
    	</el-form-item>
    	<el-button
    		type="primary" style="width: 500px;">保存</el-button>
    </el-form>
    <h3>当前服务模式</h3>
		<div>
			<h5 class="header">预付费金额</h5>
			<el-row>
				<el-col :span="3">当前剩余:</el-col>
				<el-col :span="3" :offset="3">{{serviceMode.left}}</el-col>
			</el-row>
			<el-row style="margin-bottom:0;">
				<el-col :span="3">
					<h5 class="header">在线坐席套餐</h5>
				</el-col>
				<el-col :span="3" :offset="3">
					<h5 class="header">{{serviceMode.type}}</h5>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="3">状态:</el-col>
				<el-col :span="3" :offset="3">{{serviceMode.state}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="3">坐席数:</el-col>
				<el-col :span="3" :offset="3">{{serviceMode.num}}个</el-col>
			</el-row>
			<h5>呼叫坐席套餐</h5>
			<el-row>
				<el-col :span="3">状态:</el-col>
				<el-col :span="3" :offset="3">{{serviceMode.state1}}</el-col>
			</el-row>
			<h5>多功能坐席套餐</h5>
			<el-row>
				<el-col :span="3">状态:</el-col>
				<el-col :span="3" :offset="3">{{serviceMode.state2}}</el-col>
			</el-row>
			<h5>智能机器人</h5>
			<el-row>
				<el-col :span="3">状态:</el-col>
				<el-col :span="3" :offset="3">{{serviceMode.state3}}</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>


// import echarts from 'echarts';
// console.log(_.runInContext());
export default {
	data() {
		return {
			form: {
				name:'校企合作中心',
				account: 'swjtu',
				domain: 'yuming',
				contact: '超级管理员',
				phone: '15528016562',
				email: 'swjtu_zhangks@163.com',
				
			},
			serviceMode: {
				left: 20,
				type: '免费版',
				state: '永久开通',
				num: '2',
				state1: '未开通',
				state2: '未开通',
				state3: '未开通',
			},
			value4:'',
			searchValue: '',
			choose: [true, false, false, false],
			items:[
			{num: 123, text: "总会话量",key: _.uniqueId('work_') },
			{num: 223, text: "总消息量",key: _.uniqueId('work_') },
			{num: 333, text: "平均会话时长",key: _.uniqueId('work_') },
			{num: 444, text: "相对满意度",key: _.uniqueId('work_') },
			{num: 444, text: "排队量",key: _.uniqueId('work_') },
			{num: 444, text: "未接入会话量",key: _.uniqueId('work_') },
			],
			options: [
			{value: 'a',label: '选项A', key: _.uniqueId('select_')}
			],
			tableData1: [
			{words:'tzx',relaWords: '20',lastestUpdater: 'Tzx',lastestUpdateDate:'2017-07-30 23:11:20'},
			{words:'tzx',relaWords: '333',lastestUpdater: 'Tzx',lastestUpdateDate:'2017-07-30 23:11:19'},
			{words:'tzx',relaWords: '21',lastestUpdater: 'Tzx',lastestUpdateDate:'2017-07-30 23:11:21'},
			{words:'tzx',relaWords: '333',lastestUpdater: 'Tzx',lastestUpdateDate:'2017-07-30 23:11:20'},
			
			]


		}
	},
	methods: {
		getUniqueKey(){

		},
		change(index){
				// this.choose.fill(false);  不会触发更新
				this.choose = [false, false, false, false]
				this.choose[index] = true;
			},
			handleIconClick(ev){
				console.log(this.searchValue);
			}
		},
		computed: {
			
		},
		mounted(){
			let myChart = echarts.init(document.getElementById('echarts1'));
			console.log(_.root);
			let optionMap = {
				title: {
					text: '今日在线服务数据趋势',
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data:['排队量','已接入会话量','未接入会话量','会话总量'],
					bottom: 0
				},
				toolbox: {
					show: true,
					feature: {
						dataZoom: {
							yAxisIndex: 'none'
						},
						dataView: {readOnly: false},
						magicType: {type: ['line', 'bar']},
						restore: {},
						saveAsImage: {}
					}
				},
				xAxis:  {
					type: 'category',
					boundaryGap: false,
					data: ['周一','周二','周三','周四','周五','周六','周日']
				},
				yAxis: {
					type: 'value',
					axisLabel: {
						formatter: '{value}'
					}
				},
				series: [
				{
					name:'排队量',
					type:'line',
					data:[11, 11, 15, 13, 12, 13, 10],
					markPoint: {
						data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
						]
					},
					markLine: {
						data: [
						{type: 'average', name: '平均值'}
						]
					}
				},
				{
					name:'已接入会话量',
					type:'line',
					data:[1, 2, 2, 5, 3, 2, 0],
					markPoint: {
						data: [
						{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
						]
					},
					markLine: {
						data: [
						{type: 'average', name: '平均值'},
						[{
							symbol: 'none',
							x: '90%',
							yAxis: 'max'
						}, {
							symbol: 'circle',
							label: {
								normal: {
									position: 'start',
									formatter: '最大值'
								}
							},
							type: 'max',
							name: '最高点'
						}]
						]
					}
				},
				{
					name:'未接入会话量',
					type:'line',
					data:[5, 4, 9, 1, 2, 7, 5],
					markPoint: {
						data: [
						{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
						]
					},
					markLine: {
						data: [
						{type: 'average', name: '平均值'},
						[{
							symbol: 'none',
							x: '90%',
							yAxis: 'max'
						}, {
							symbol: 'circle',
							label: {
								normal: {
									position: 'start',
									formatter: '最大值'
								}
							},
							type: 'max',
							name: '最高点'
						}]
						]
					}
				},
				{
					name:'会话总量',
					type:'line',
					data:[10, 20, 20, 15, 9, 22, 10],
					markPoint: {
						data: [
						{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
						]
					},
					markLine: {
						data: [
						{type: 'average', name: '平均值'},
						[{
							symbol: 'none',
							x: '90%',
							yAxis: 'max'
						}, {
							symbol: 'circle',
							label: {
								normal: {
									position: 'start',
									formatter: '最大值'
								}
							},
							type: 'max',
							name: '最高点'
						}]
						]
					}
				}
				]
			}
			myChart.setOption(optionMap)
		}
	}

</script>


<style lang="LESS" scoped>
	.select-box {
		margin-left: 900px;

	}
	.el-row {
		margin-bottom: 30px;
	}
	.el-col-4 {
		text-align: center;
		background-color: #fff;
		padding: 10px 0;
		outline:2px solid #ccc;
		outline-offset:-5px;
		p {
			width: auto;
			margin: 10px auto;
			line-height: 30px;
		}
	}
	.text-center {
		text-align: center;
	}

	thead th {
		.text-center;
	}
</style>