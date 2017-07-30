<template>
	<div style="margin-top: 30px;">
		<div style="text-align:right;">
			<el-input
				v-model="serach"
				style="width: 300px;"
				placeholder="搜索问题&知识点关键字"
				icon="search"></el-input>
			<el-dropdown>
				<el-button
					type="primary">添加<i class="el-icon-caret-bottom"></i></el-button>
				<el-dropdown-menu
					slot="dropdown">
					<el-dropdown-item
						v-for="item in dropdownItems"
						:key="item.key">
						{{item.type}}
					</el-dropdown-item>

				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<el-tabs
			type="border-card">
			<el-tab-pane
				label="问题">
				<el-table
					:data="tableData1">
					<el-table-column
						label="问题标题"
						prop="title"></el-table-column>
					<el-table-column
						label="归属知识点"
						prop="belong"></el-table-column>	
					<el-table-column
						label="创建时间"
						prop="createTime"></el-table-column>
					<el-table-column
						label="操作"
						>
							<template scope="scope">
								<el-button
									style="color:#000;"
									type="text"
									icon="edit"></el-button>
								<el-button
									style="color:#000;"
									type="text"
									icon="delete"></el-button>
							</template>
						</el-table-column>
					</el-table>
			</el-tab-pane>
			<el-tab-pane
				label="知识点">
				<el-table
					:data="tableData2">
					<el-table-column
						label="知识点标题"
						prop="title"></el-table-column>
					<el-table-column
						label="创建时间"
						prop="createTime"></el-table-column>
					<el-table-column
						label="操作"
						>
							<template scope="scope">
								<el-button
									style="color:#000;"
									type="text"
									icon="edit"></el-button>
								<el-button
									style="color:#000;"
									type="text"
									icon="delete"></el-button>
							</template>
						</el-table-column>
					</el-table>
			</el-tab-pane>
		</el-tabs>
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
			dropdownItems: [
				{type: '添加问题',key:_.uniqueId('dropdown_')},
				{type: '添加知识点',key:_.uniqueId('dropdown_')},

			],
			
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
				{title:'天上有几颗星星?',belong: '科学',createTime: '2017-07-30 22:38:18'},
				{title:'天上有几颗月亮?',belong: '科学',createTime: '2017-07-30 22:38:18'},
				{title:'天上有几颗太阳?',belong: '科学',createTime: '2017-07-30 22:38:18'},
				{title:'天上有几个银河?',belong: '科学',createTime: '2017-07-30 22:38:18'},
				{title:'么么哒是什么意思?',belong: '生活',createTime: '2017-07-30 22:38:18'},
			

			],
			tableData2: [
				{title:'天上有几颗星星?',createTime: '2017-07-30 22:38:18'},
				{title:'天上有几颗月亮?',createTime: '2017-07-30 22:38:18'},
				{title:'天上有几颗太阳?',createTime: '2017-07-30 22:38:18'},
				{title:'天上有几个银河?',createTime: '2017-07-30 22:38:18'},
				{title:'么么哒是什么意思?',createTime: '2017-07-30 22:38:18'},
			

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