<template>
	<div class="playerinformation">
		<table>
			<tr>
				<td>
					<span>服务器：</span>
					<Select v-model="server_id" style="width:200px">
						<Option v-for="item in server" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</td>
				<td>
					<span>UID：</span>
					<Input v-model="uid" placeholder="请输入uid" clearable style="width: 200px" />
				</td>
				<td>
					<span>昵称：</span>
					<Input v-model="nickname"  placeholder="请输入昵称" clearable style="width: 200px" />
				</td>
				<td>
					 <Button type="primary">查询</Button>
				</td>
			</tr>
		</table>
		<div class="content">
			 <Table border :columns="columns" :data="data"></Table>
		</div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
			uid:"",
			nickname:"",
			server: [
			{
				value: '100',
				label: '美国服1'
			},
			{
				value: '101',
				label: '美国服2'
			},
			{
				value: '102',
				label: '美国服3'
			},
			{
				value: '103',
				label: '美国服4'
			},
			{
				value: '104',
				label: '美国服5'
			},
			{
				value: '105',
				label: '美国服6'
			}
		],
		server_id: '',
		 columns: [
					{
						title: 'Name',
						key: 'name'
					},
					{
						title: 'Age',
						key: 'age'
					},
					{
						title: 'Address',
						key: 'address'
					}
				],
			data: [
				{
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park',
					date: '2016-10-03'
				},
				{
					name: 'Jim Green',
					age: 24,
					address: 'London No. 1 Lake Park',
					date: '2016-10-01'
				},
				{
					name: 'Joe Black',
					age: 30,
					address: 'Sydney No. 1 Lake Park',
					date: '2016-10-02'
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park',
					date: '2016-10-04'
				}
			]
      }
    },
  }
</script>
<style scoped="scoped">
	.playerinformation td {
	  padding: 13px;
	  float: left;
	}
</style> 