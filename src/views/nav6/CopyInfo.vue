<template>
	<div style="margin-top: 30px;">
		<h3>企业账户信息</h3>
		<el-form ref="form" :model="form" label-width="80px" style="width: 500px;">
  		<el-form-item label="活动名称">
    		<el-input v-model="form.name"></el-input>
    	</el-form-item>
    	<el-form-item label="企业账户">
    		<span>{{form.account}}</span>
    	</el-form-item>
    	<el-form-item label="登录域名">
    		<span>{{form.domain}}</span>
    	</el-form-item>
    </el-form>
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
				domain: 'yuming'
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