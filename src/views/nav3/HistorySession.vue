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
			<el-select v-model="valueType" clearable plackholder="请选择">
				<el-option
					v-for="item in options2"
					:key= "item.key"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="valueTime" clearable plackholder="请选择">
				<el-option
					v-for="item in options3"
					:key= "item.key"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
		</div> 

	</div>
</template>

<script>
	var echarts = require('echarts');

export default {
	data() {
		return {
			valueService: '',
			valueType: '',
			valueTime: '',
			
			
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
			{name:'tzx','inline-num': '333','no-reply': '12','no-reply-percent':'111','redirect-num':'111'},
			{name:'tzx','inline-num': '221','no-reply': '12','no-reply-percent':'111','redirect-num':'111'},
			{name:'tzx','inline-num': '321','no-reply': '12','no-reply-percent':'111','redirect-num':'111'},
			{name:'tzx','inline-num': '312','no-reply': '12','no-reply-percent':'111','redirect-num':'111'},
			{name:'tzx','inline-num': '321','no-reply': '12','no-reply-percent':'111','redirect-num':'111'},

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