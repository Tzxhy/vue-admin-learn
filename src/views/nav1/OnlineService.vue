<template>
	<div style="margin-top: 30px;">
		<el-row :gutter="20" >
			<el-col :span="6" v-for="(item,index) in items" :item="item" :index="index" :key="item.key"
				:class="{selected:choose[index]}" @click.native="change(index)">
				<p>{{item.text}}</p>
				<p>{{item.num}}</p>
			</el-col>
		</el-row>
		<p>当前在线接待概况</p>
		<el-table :data="tableData">
			<el-table-column
				prop="no"
				label="编号">
			</el-table-column>
			<el-table-column 
				prop="name"
				label="姓名">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return { 
				items: [
					{num: 123,text:'机器人回话数',key: _.uniqueId('work_')},
					{num: 123,text:'人工会话数',key: _.uniqueId('work_')},
					{num: 123,text:'排队人数',key: _.uniqueId('work_')},
					{num: 123,text:'在线客服人数',key: _.uniqueId('work_')},
				],
				n: {
					robotNum: 123,
					personNum: 123,
					waitNum: 123,
					onlineNum: 123,
				},
				choose: [
					true, false, false, false
				],
				tableData: [
				{
					no: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},{
					no: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},{
					no: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},{
					no: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				]
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
	.el-col-6 {
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