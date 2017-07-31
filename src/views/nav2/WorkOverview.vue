<template>
	<div style="margin-top: 30px;">
		<div class="select-box">
			<el-select v-model="value1" clearable plackholder="请选择">
				<el-option
					v-for="item in options1"
					:key= "item.key"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="value2" clearable plackholder="请选择">
				<el-option
					v-for="item in options2"
					:key= "item.key"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="value3" clearable plackholder="请选择">
				<el-option
					v-for="item in options3"
					:key= "item.key"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="value4" clearable plackholder="请选择">
				<el-option
					v-for="item in options4"
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
		<div id="echarts1" style="width: 800px;height: 600px;"></div>
		<div>
			<p style="display: inline-block;">今日客服活动</p>
			<el-input	placeholder="输入客服姓名搜索"
			icon="search"
			v-model="searchValue"
			style="width: 300px; float: right;"
			:on-icon-click="handleIconClick"></el-input>
		</div>
		<el-table
		:data="tableData1"
		>
			<el-table-column
			prop="servicer"
			label="客服">
			</el-table-column>
			<el-table-column
			prop="online-state"
			label="在线状态">
			</el-table-column>
			<el-table-column
			prop="now-in"
			label="当前接入量">
			</el-table-column>
			<el-table-column
			prop="total-session"
			label="累积会话量">
			</el-table-column>
			<el-table-column
			prop="total-message"
			label="累计消息">
			</el-table-column>
			<el-table-column
			prop="relative-satisfied"
			label="相对满意度">
			</el-table-column>
			<el-table-column
			prop="first-online"
			label="首次在线时间">
			</el-table-column>
			<el-table-column
			prop="total-online"
			label="累积在线时间">
			</el-table-column>



		</el-table>
	</div>
</template>

<script>
var echarts = require('echarts');

// import echarts from 'echarts';
// console.log(_.runInContext());
	export default {
		data() {
			return {
				value1:'',
				value2:'',
				value3:'',
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
				options1: [
					{value: 'a',label: '所有发起方', key: _.uniqueId('select_')}
				],
				options2: [
					{value: 'a',label: '所有业务支流', key: _.uniqueId('select_')}
				],
				options3: [
					{value: 'a',label: '所有接待客服', key: _.uniqueId('select_')}
				],
				options4: [
					{value: 'a',label: '昨天', key: _.uniqueId('select_')},
					{value: 'a',label: '过去7天', key: _.uniqueId('select_')},
				],
				tableData1: [
					{servicer:'tzx','online-state': '在线','now-in': '12','total-session':'111','total-message':'111',
						'relative-satisfied':9,'first-online':'2017-07-30 12:08:10','total-online':999},{servicer:'tzx','online-state': '在线','now-in': '12','total-session':'111','total-message':'111',
						'relative-satisfied':9,'first-online':'2017-07-30 12:08:10','total-online':999},{servicer:'tzx','online-state': '在线','now-in': '12','total-session':'111','total-message':'111',
						'relative-satisfied':9,'first-online':'2017-07-30 12:08:10','total-online':999},{servicer:'tzx','online-state': '在线','now-in': '12','total-session':'111','total-message':'111',
						'relative-satisfied':9,'first-online':'2017-07-30 12:08:10','total-online':999},{servicer:'tzx','online-state': '在线','now-in': '12','total-session':'111','total-message':'111',
						'relative-satisfied':9,'first-online':'2017-07-30 12:08:10','total-online':999},

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
	 text-align: right;
	 margin-bottom: 20px;

	}
	.el-select-dropdown {
		display: inline-block;
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