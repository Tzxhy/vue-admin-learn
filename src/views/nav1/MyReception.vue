<template>
	<div style="margin-top: 30px;">
		<div class="block">
	    <el-date-picker
	      v-model="timeValue"
	      type="daterange"
	      placeholder="选择日期范围">
	    </el-date-picker>
	    <el-button type="primary">查询</el-button>
  	</div>
  	<p>我的数据</p>
  	<el-row :gutter="20" style="display: flex;justify-content:space-between; " >
			<el-col :span="4" v-for="(item,index) in items" :item="item" :index="index" :key="item.key"
				:class="{selected:choose[index]}" @click.native="change(index)">
				<p>{{item.text}}</p>
				<p>{{item.num}}</p>
			</el-col>
		</el-row>
		<p>今日访客</p>
		<div>
			<p v-if="hasData">暂无数据</p>
			<div v-else>
				echarts图
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return { 
				choose: [true, false, false, false],
				hasData: false,
				items: [
					{num: 123,text:'接待会话量',key: _.uniqueId('work_')},
					{num: 123,text:'平均满意度',key: _.uniqueId('work_')},
					{num: 123,text:'在线时长',key: _.uniqueId('work_')},
					{num: 123,text:'平均响应时间',key: _.uniqueId('work_')},
					{num: 123,text:'平均接待时间',key: _.uniqueId('work_')},
				],
				timeValue: ''
			}
		},
		methods: {
			change(index){
				// this.choose.fill(false);  不会触发更新
				this.choose = [false, false, false, false]
				this.choose[index] = true;
			}
		}
	}

</script>


<style lang="LESS" scoped>
	.el-row {

	}
	.el-col-4 {
		text-align: center;
		cursor: pointer;
		background-color: #fff;
		border-radius: 5px;
		padding-top: 10px;
		padding-bottom: 10px;
		&.selected {
			background-color: #09aeb0;
		}
		p {
			width: auto;
			margin: 10px auto;
		}
	}
</style>