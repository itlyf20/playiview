<template>
	<div class="noviceguidance">
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
			<Table border :columns="columns" :data="data">
				<template slot-scope="{ row }" slot="name">
					<strong>{{ row.name }}</strong>
				</template>
				<template slot-scope="{ row, index }" slot="action">
					<Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button>
					<Button type="error" size="small" @click="remove(index)">删除</Button>
				</template>
			</Table>
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
                        slot: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '玩家信息',
                    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
                })
            },
            remove (index) {
                this.data.splice(index, 1);
            }
        }
    }
</script>
<style scoped="scoped">
	.noviceguidance td {
	  padding: 13px;
	  float: left;
	}
</style> 
