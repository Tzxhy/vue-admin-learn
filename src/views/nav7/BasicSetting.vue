<template>
	<div style="margin-top: 30px;">
		<el-form
		:model="form"
		label-width="120px"
		label-position="left"
		style="width: 800px;">
			<el-form-item label="昵称">
		    <el-input v-model="form.nickName"></el-input>
		  </el-form-item>
		  <el-form-item label="机器人欢迎页">
		    <el-input v-model="form.welcome"></el-input>
		  </el-form-item>
		  <el-form-item label="未知回答问题">
		    <el-input v-model="form.haveNoIdea"></el-input>
		  </el-form-item>
		  <el-form-item label="客服不在线说辞">
		    <el-input v-model="form.outLine"></el-input>
		  </el-form-item>

		</el-form>
	</div>
</template>

<script>
	var echarts = require('echarts');

export default {
	data() {
		return {
			form: {
				nickName: '小欧机器人',
				welcome: '您好,请问有什么可以帮助您?',
				haveNoIdea: '对不起, 无法回答您的提问.',
				outLine: '抱歉, 客服全忙.'
			},
			valueService:'',
			options1: [
			{value: 'a',label: '康儿子', key: _.uniqueId('select_')},
			{value: 'a',label: '谭大爷', key: _.uniqueId('select_')},
			],
			options2: [
			{value: 'a',label: '主动回答', key: _.uniqueId('select_')},
			{value: 'a',label: '被动回答', key: _.uniqueId('select_')},
			],
			options3: [
			{value: 'a',label: '昨天', key: _.uniqueId('select_')},
			{value: 'a',label: '过去7天', key: _.uniqueId('select_')},
			],
			tableData1: [
			{nickName:'tzx',name: '333',account: '12',phone:'111',type:'111',actor:'普通客服',operate:''},
			{nickName:'tzx',name: '333',account: '12',phone:'111',type:'111',actor:'普通客服',operate:''},
			{nickName:'tzx',name: '333',account: '12',phone:'111',type:'111',actor:'普通客服',operate:''},
			{nickName:'tzx',name: '333',account: '12',phone:'111',type:'111',actor:'普通客服',operate:''},
			
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
	.select-box	{
		text-align: right;
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