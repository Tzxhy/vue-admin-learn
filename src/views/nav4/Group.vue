<template>
	<div style="margin-top: 30px;text-align:right;">
		<el-button
			type="primary">新增分组</el-button>
		<div style="text-align:left;">
			<ul>
				<li
					v-for="item in groups"
					:key="item.key"
				>
					<template>
						<h3 class="header">{{item.title}} (<span>{{item.num}}</span>)</h3>
						<div class="name">
							<p>{{item.names.join(',')}}</p>
						</div>
					</template>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	var echarts = require('echarts');

export default {
	data() {
		return {
			
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
			groups: [
				{title: '么么哒',key: _.uniqueId('g_'),num:5,names:['谭智轩','狗儿子']},
				{title: '么么哒',key: _.uniqueId('g_'),num:5,names:['谭智轩','狗儿子']},
				{title: '么么哒',key: _.uniqueId('g_'),num:5,names:['谭智轩','狗儿子']},
				{title: '么么哒',key: _.uniqueId('g_'),num:5,names:['谭智轩','狗儿子']},
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
	li {
		list-style: none;
		width: 30%;
		border: 1px solid #aaa;
		float: left;
		margin-right: 3%;
		margin-bottom: 20px;
	}
	h3.header {
		margin-top: 0;
		line-height: 40px;
		padding-left: 20px;
		background-color: #f4f4f4;
	}
	.name {
		padding: 20px;
	}


</style>