<template>
	<div style="margin-top: 30px;">
		<div class="select-box">
			<el-select v-model="valueService" style="float:left;" clearable placeholder="所有角色">
				<el-option
					v-for="item in options1"
					:key= "item.key"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-input
				style="display:inline-block;width: 300px;"
				v-model="input"
				icon="search"
				placeholder="请输入客服姓名/昵称/帐号/手机号"></el-input>
			<el-button type="primary"
			@click="dialogFormVisible = true;">新增客服</el-button>
		</div> 
	<el-table
		:data="tableData1"
		>
			<el-table-column
				label="昵称"
				prop="nickName"></el-table-column>
			<el-table-column
				label="姓名"
				prop="name"></el-table-column>
			<el-table-column
				label="帐号"
				prop="account"></el-table-column>
			<el-table-column
				label="手机号"
				prop="phone"></el-table-column>
			<el-table-column
				label="角色"
				prop="actor"></el-table-column>
			<el-table-column
				label="操作"
				>
					<template scope="scope">
						<el-button type="text">编辑</el-button>
						<el-button type="text">删除</el-button>
					</template>
				</el-table-column>
		</el-table>
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-change="currentPage"
			:page-sizes="[10,20,30,40]"
			:page-size="10"
			layout="total, sizes, prev, pager, next, jumper"
			:total="400">
		</el-pagination>
		<el-dialog title="新增客服" :visible.sync="dialogFormVisible">
	  <el-form :model="newService" label-width="80px">
	    <el-form-item label="帐号">
	      <el-input v-model="newService.account"></el-input>
	    </el-form-item>
	    <el-form-item label="姓名">
	      <el-input v-model="newService.name"></el-input>
	    </el-form-item>
	    <el-form-item label="昵称">
	      <el-input v-model="newService.nickName"></el-input>
	    </el-form-item>
	    <el-form-item label="手机号">
	      <el-input v-model="newService.phone"></el-input>
	    </el-form-item>
	    <el-form-item label="邮箱">
	      <el-input v-model="newService.email"></el-input>
	    </el-form-item>
	    <el-form-item label="密码">
	      <el-input v-model="newService.password"></el-input>
	    </el-form-item>
	    <el-form-item label="角色">
	      <el-select v-model="newService.role" placeholder="请选择">
	        <el-option label="管理员" value="1"></el-option>
	        <el-option label="普通客服" value="2"></el-option>
	      </el-select>
	    </el-form-item>
	    <el-form-item label="最大接待人数">
	      <el-input v-model="newService.maxService"></el-input>
	    </el-form-item>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible = false">取 消</el-button>
	    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
	  </div>
	</el-dialog>
	</div>
</template>

<script>
	var echarts = require('echarts');

export default {
	data() {
		return {
			input: '',
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
			dialogFormVisible: false,
			newService: {
				account: '',
				name: '',
				nickName: '',
				phone: '',
				email: '',
				password: '',
				role: '',
				maxService: '10'
			}


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
		},
		currentPage(){

		},
		handleSizeChange(){

		},
		handleCurrentChange(){

		},
	},
	computed: {
		
	},
		
}

</script>


<style lang="LESS" scoped>
	.select-box	{
		text-align: right;
		margin-top: 20px;
		margin-bottom: 20px;
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