<template>
	<div style="margin-top: 30px;">
		<div class="select-box">
			<el-select v-model="valueService" clearable plackholder="请选择">
				<el-option
					v-for="item in options1"
					:key= "item.key"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="valueDate" clearable plackholder="请选择">
				<el-option
					v-for="item in options2"
					:key= "item.key"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
		</div> 
		<p>工作量</p>
		<el-table
		:data="tableData1">
			<el-table-column
			prop="name"
			label="姓名">
			</el-table-column>
			<el-table-column
			prop="inlineNum"
			sortable
			label="接入会话量">
			</el-table-column>
			<el-table-column
			prop="noReply"
			sortable
			label="未回复会话量">
			</el-table-column>
			<el-table-column
			prop="noReplyPercent"
			sortable
			label="未回复率">
			</el-table-column>
			<el-table-column
			prop="redirectNum"
			sortable
			label="转接量">
			</el-table-column>
			<el-table-column
			prop="invalidNum"
			sortable
			label="无效会话量">
			</el-table-column>
			<el-table-column
			prop="activeNum"
			sortable
			label="主动发起会话量">
			</el-table-column>
			<el-table-column
			prop="messageNum"
			sortable
			label="留言处理量">
			</el-table-column>
			<el-table-column
			prop="loginLong"
			sortable
			label="登录总时长">
			</el-table-column>
			<el-table-column
			prop="onlineLong"
			sortable
			label="在线总时长">
			</el-table-column>
			<el-table-column
			prop="onlinePercent"
			sortable
			label="在线时长占比">
			</el-table-column>
			<el-table-column
			prop="clientLong"
			sortable
			label="管理端在线时长">
			</el-table-column>
			<el-table-column
			prop="hangUpLong"
			sortable
			label="挂起总时长">
			</el-table-column>
			<el-table-column
			prop="hangUpPercent"
			sortable
			label="挂起时长比">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			valueService: '',
			valueDate: '',
			options1: [
			{value: 'a',label: '所有接待客服', key: _.uniqueId('select_')},
			{value: 'b',label: '售前组', key: _.uniqueId('select_')},
			{value: 'c',label: '售后组', key: _.uniqueId('select_')},
			],
			options2: [
			{value: 'a',label: '昨天', key: _.uniqueId('select_')},
			{value: 'b',label: '过去7天', key: _.uniqueId('select_')},
			{value: 'c',label: '过去一个月', key: _.uniqueId('select_')},
			],
			tableData1: [
			{name:'tzx',inlineNum: '333',noReply: '12',noReplyPercent:'111',redirectNum:'111',invalidNum:10,
				activeNum:20,messageNum:90,loginLong:8,onlineLong:8,onlinePercent: '90%',clientLong:21,hangUpLong:22,hangUpPercent:'21%'},
			
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
		
	}

</script>


<style lang="LESS" scoped>
	.select-box {
		text-align: right;
		margin-bottom: 20px;

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