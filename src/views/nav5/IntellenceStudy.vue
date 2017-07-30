<template>
	<div style="margin-top: 30px;">
		<div style="text-align:right;">
			<el-input
				v-model="search"
				icon="search"
				style="width: 300px;"
				placeholder="搜索已有相似词"></el-input>
			<el-button
				type="primary">添加新相似词</el-button>
		</div>
		<el-table
			:data="tableData1"
			border
			>
			<el-table-column
				label="问题"
				prop="words"></el-table-column>
			<el-table-column
				label="创建时间"
				prop="createDate"></el-table-column>
			<el-table-column
				label="操作"
				>
				<template scope="scope">
					<el-button
						style="color:#000;"
						type="text"
						icon="edit"></el-button>
					<el-button
						style="color:#000;"
						type="text"
						icon="delete"></el-button>
				</template>
				</el-table-column>
			</el-table>
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-change="currentPage"
				:page-sizes="[10,20,30,40]"
				:page-size="10"
				layout="total, sizes, prev, pager, next, jumper"
				:total="400">
			</el-pagination>
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
			{words:'tzx',createDate: '2017'},
			{words:'tzx',createDate: '2017'},
			{words:'tzx',createDate: '2017'},
			{words:'tzx',createDate: '2017'},
			{words:'tzx',createDate: '2017'},
			
			
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