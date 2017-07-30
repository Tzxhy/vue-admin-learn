<template>
	<div style="margin-top: 30px;">
		<div class="select-box">
			<el-select v-model="value4" clearable plackholder="请选择">
				<el-option
					v-for="item in options"
					:key= "item.key"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
		</div> 
		<el-row  class="text-center" :gutter="10">
			<el-col :span="4" v-for="(item,index) in items" :item="item" :index="index" :key	="item.key"
				:class="{selected:choose[index]}">
				<p>{{item.text}}</p>
				<p>{{item.num}}</p>
			</el-col>
		</el-row>
		<!-- {{drawEcharts()}} -->
		<div id="echarts1" style="width: 500px;height: 600px;"></div>
		<div>
			<p style="display: inline-block;">会话量</p>
			<el-input	placeholder="输入客服姓名搜索"
			icon="search"
			v-model="searchValue"
			style="width: 300px; float: right;"
			:on-icon-click="handleIconClick"></el-input>
		</div>
		<div id="echarts2" style="width: 500px;height: 600px;"></div>
		<div>
			<p style="display: inline-block;">会话量</p>
			<el-input	placeholder="输入客服姓名搜索"
			icon="search"
			v-model="searchValue"
			style="width: 300px; float: right;"
			:on-icon-click="handleIconClick"></el-input>
		</div>
		<p>客户来源</p>
		<p>暂无数据来源</p>
	</div>
</template>

<script>
var echarts = require('echarts');

// import echarts from 'echarts';
// console.log(_.runInContext());
	export default {
		data() {
			return {
				value4:'',
				searchValue: '',
				choose: [true, false, false, false],
				items:[
				{num: 123, text: "总会话量",key: _.uniqueId('work_') },
				{num: 223, text: "提问总数",key: _.uniqueId('work_') },
				
				],
				options: [
					{value: 'a',label: '选项A', key: _.uniqueId('select_')}
				],
				tableData1: [
					{servicer:'tzx','online-state': '在线','now-in': '12','total-session':'111','total-message':'111',
						'relative-satisfied':9,'first-online':'2017-07-30 12:08:10','total-online':999},{servicer:'tzx','online-state': '在线','now-in': '12','total-session':'111','total-message':'111',
						'relative-satisfied':9,'first-online':'2017-07-30 12:08:10','total-online':999},{servicer:'tzx','online-state': '在线','now-in': '12','total-session':'111','total-message':'111',
						'relative-satisfied':9,'first-online':'2017-07-30 12:08:10','total-online':999},{servicer:'tzx','online-state': '在线','now-in': '12','total-session':'111','total-message':'111',
						'relative-satisfied':9,'first-online':'2017-07-30 12:08:10','total-online':999},{servicer:'tzx','online-state': '在线','now-in': '12','total-session':'111','total-message':'111',
						'relative-satisfied':9,'first-online':'2017-07-30 12:08:10','total-online':999},

				],
				optionMap: {
					title: {
						text: '会话量',
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
				},
				optionMap1: {
					title: {
						text: '提问数',
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
			
			myChart.setOption(this.optionMap);
			let myChart1 = echarts.init(document.getElementById('echarts2'));
			
			myChart1.setOption(this.optionMap1);
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