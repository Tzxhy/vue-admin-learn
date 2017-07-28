<template>
	<div @click="change">
		<el-row :gutter="20" >
			<el-col :span="6" class="selected">
				<p class="num">0</p>
				<p>我处理中的工单</p>
			</el-col>
			<el-col :span="6">
				<p class="num">0</p>
				<p>我处理中的工单</p>
			</el-col>
			<el-col :span="6">
				<p class="num">0</p>
				<p>我处理中的工单</p>
			</el-col>
			<el-col :span="6">
				<p class="num">0</p>
				<p>我处理中的工单</p>
			</el-col>
		</el-row>
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
			change(e){
				if (e.target.className.indexOf('el-col')!=-1) {
					console.log('test');
				}
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