<template>
	<div style="margin-top: 30px;">
		<h4>部署网页组件(推荐)</h4>
		<el-row>
  		<el-col :span="2"><p>特性包括:</p></el-col>
  		<el-col :span="10"><p>自动识别访客,通过API对接登录用户身份和资料<br>自动采集用户访问轨迹</p></el-col>
		</el-row>
		<el-row>
  		<el-col :span="2"><p>组件代码:</p></el-col>
  		<el-col :span="10"><p>将此代码拷贝至BODY标签结束之前,即可完成部署.</p>
  		<el-input
			readonly="true"
			v-model="code1"></el-input>
			<el-button
				type="text">预览实际效果</el-button>
  		</el-col>
		</el-row>
		<h4>部署聊天链接</h4>
		<el-row>
  		<el-col :span="2"><p>聊天链接:</p></el-col>
  		<el-col :span="10"><p>聊天链接支持移动端和,即可完成部署.</p>
  		<el-input
			readonly="true"
			v-model="code2"></el-input>
			<el-button
				type="text">预览实际效果</el-button>
  		</el-col>
		</el-row>
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
			
			],
			code1: 'www.baidu.com',
			code2: 'www.baidu.com',


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
	.text-center {
		text-align: center;
	}

	thead th {
		.text-center;
	}
</style>