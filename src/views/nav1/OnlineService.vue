<template>
	<div>
		<el-row :gutter="20" >
			<el-col :span="6"  :class="{'selected': choose[0]}" @click.native="change" data-num="0">
				<p class="num"  >{{n.robotNum}}</p>
				<p>机器人回话数</p>
			</el-col>
			<el-col :span="6" :class="{'selected': choose[1]}" @click.native="change" data-num="1">
				<p class="num"> {{n.personNum}}</p>
				<p>人工会话数</p>
			</el-col>
			<el-col :span="6" :class="{'selected': choose[2]}" @click.native="change" data-num="2">
				<p class="num">{{n.waitNum}}</p>
				<p>排队人数</p>
			</el-col>
			<el-col :span="6" :class="{'selected': choose[3]}" @click.native="change" data-num="3">
				<p class="num">{{n.onlineNum}}</p>
				<p>在线客服人数1</p>
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
			change(e){
				let target = e.currentTarget;
				// this.choose.fill(false);  不会触发更新
				this.choose = [false, false, false, false]
				this.choose[target.getAttribute('data-num')] = true;
				console.log(this.choose);
				// target.
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