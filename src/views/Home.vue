<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
	.titleright{
		font-size: 20px;
		position: absolute;
		right: 40px;
	}
</style>
<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="70" v-model="isCollapsed">
                <Menu
				  theme="dark"
				  width="auto"
				  :class="menuitemClasses"
				  accordion
				>
				  <template v-for="(item, componentIndex) in menu">
					<!-- 展开并且有子菜单 -->
					<Submenu v-if="!isCollapsed && item.children.length" :key="componentIndex" :name="componentIndex">
					  <template slot="title">
						<Icon :type="item.icon" />
						<span>{{ item.name }}</span>
					  </template>
					  <MenuItem v-for="(children, index) in item.children" :key="index" :name="children.to" :to="children.to">
						{{ children.name }}
					  </MenuItem>
					</Submenu>
		 
					<!-- 展开但没有子菜单 -->
					<MenuItem v-else-if="!isCollapsed" :name="item.to" :to="item.to" :key="componentIndex">
					  <Icon :type="item.icon" />
					  <span>{{ item.name }}</span>
					</MenuItem>
		 
					<!-- 不展开有子菜单 -->
					<Dropdown v-else-if="isCollapsed && item.children.length" :key="componentIndex" placement="right-start" class="menu-dropdown">
					  <MenuItem :name="item.to" :to="item.to" >
						<Icon :type="item.icon" />
						<span>{{ item.name }}</span>
					  </MenuItem>
					  <DropdownMenu slot="list">
						  <DropdownItem v-for="(children, index) in item.children" :key="index" style="padding: 0;margin:0; background-color:#515a6e;">
							<MenuItem :name="children.to" :to="children.to">{{ children.name }}</MenuItem>
						  </DropdownItem>
					  </DropdownMenu>
					</Dropdown>
		 
					<!-- 不展开无子菜单 -->
					<Tooltip v-else-if="isCollapsed" :content="item.name" placement="right" :key="componentIndex">
						<MenuItem :name="item.to" :to="item.to">
						  <Icon :type="item.icon" />
						  <span>{{ item.name }}</span>
						</MenuItem>
					</Tooltip>
				  </template>
				</Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', display:'flex', boxShadow: '0 2px 2px 2px rgba(0,0,0,.1)'}">
					<h1>后台管理系统</h1>
					<div class="titleright">
						<span style="padding: 15px;">欢迎，Admin</span>
						<span style="padding: 15px;"><a href="#">退出登录</a></span>
					</div>
				</Header>
                <Content :style="{padding: '5px 5px'}">
                    <Card>
                        <div style="height: 88.5vh">
							<router-view></router-view>
						</div>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
              isCollapsed: false,
			  keepAliveList: [],
			  title: "Home",
			  showSettingPage: false,
			  showSuggestionPage: false,
			  menu: [
				{
				  name: "主页",
				  to: "home",
				  icon: "md-apps",
				  children: []
				},
				{
				  name: "玩家管理",
				  to: "playerinformation",
				  icon: "ios-contacts-outline",
				  children: [
					{
					  name: "玩家信息查询",
					  to: "playerinformation"
					},
					{
					  name: "新手引导",
					  to: "noviceguidance"
					}
				  ]
				},
				{
				  name: "角色管理",
				  to: "rolezr",
				  icon: "ios-contact-outline",
				  children: [
					{
					  name: "角色整容练度",
					  to: "rolezr"
					},
					{
					  name: "玩家充值查询",
					  to: "recharge"
					},
					{
					  name: "挂机关卡",
					  to: "hangup"
					}
				  ]
				},
				{
				  name: "付费与货币",
				  to: "racedrawtimes",
				  icon: "logo-yen",
				  children: [
					{
					  name: "种族抽",
					  to: "racedrawtimes"
					},
					{
					  name: "每日礼包统计",
					  to: "gift"
					},
					{
					  name: "档位充值",
					  to: "gearrechargescatter"
					},
					{
					  name: "充值玩家",
					  to: "topupplayerscatter"
					},
					{
					  name: "商城购买",
					  to: "shopbuy"
					},
					{
					  name:"抽卡统计",
					  to:"lottery"
					},
					{
					  name: "付费角色排行",
					  to: "feeroleph"
					}
				  ]
				},
				{
				  name: "留存率",
				  to: "retention",
				  icon: "ios-create-outline",
				  children: [
					{
					  name: "留存率",
					  to: "retention"
					}
				  ]
				}
			  ]
			};
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>