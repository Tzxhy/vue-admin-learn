<template>
	<div style="margin-top: 30px;">
		<el-row  >
			<el-col :span="6" v-for="(item,index) in items" :item="item" :index="index" :key="item.key"
				:class="{selected:choose[index]}" @click.native="change(index)">
				<p>{{item.num}}</p>
				<p>{{item.text}}</p>
			</el-col>
		</el-row>
		<el-table :data="tableData" class="text-center">
			<el-table-column class="text-center"
				prop="no"
				label="编号">
			</el-table-column>
			<el-table-column class="text-center"
				prop="priority"
				label="优先级">
			</el-table-column>
			<el-table-column class="text-center"
				prop="title"
				label="标题">
			</el-table-column>
			<el-table-column class="text-center"
				prop="creator"
				label="工单发起人">
			</el-table-column>
			<el-table-column class="text-center"
				prop="create_date"
				label="创建日期">
			</el-table-column>
			<el-table-column class="text-center"
				prop="accept_customer_service"
				label="受理客服">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				choose: [true, false, false, false],
				items:[
				{num: 123, text: "我处理中的工单",key: _.uniqueId('work_') },
				{num: 223, text: "我客服组处理中的工单",key: _.uniqueId('work_') },
				{num: 333, text: "我客服组未分配的工单",key: _.uniqueId('work_') },
				{num: 444, text: "所有未分配工单",key: _.uniqueId('work_') },
				],
				tableData: [
				{
					no: '2016-05-02',
					priority: 1,
					title: '维护与老客服交流',
					creator: '狗儿子',
					create_date: '2017年7月28日 16:42:55',
					accept_customer_service: '谭大爷'
				},{
					no: '2016-05-02',
					priority: 1,
					title: '维护与老客服交流',
					creator: '狗儿子',
					create_date: '2017年7月28日 16:42:55',
					accept_customer_service: '谭大爷'
				},{
					no: '2016-05-02',
					priority: 1,
					title: '维护与老客服交流',
					creator: '狗儿子',
					create_date: '2017年7月28日 16:42:55',
					accept_customer_service: '谭大爷'
				},{
					no: '2016-05-02',
					priority: 1,
					title: '维护与老客服交流',
					creator: '狗儿子',
					create_date: '2017年7月28日 16:42:55',
					accept_customer_service: '谭大爷'
				},
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
			}
		}
	}

</script>


<style lang="LESS" scoped>
	.el-row {
		margin-bottom: 30px;
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