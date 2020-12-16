import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/playerinformation"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
	children:[
		{
			path:"/playerinformation",
			name:"PlayerInformation",
			component:()=>import("../views/playerInformation/PlayerInformation")
		},
		{
			path:"/noviceguidance",
			name:"NoviceGuidance",
			component:()=>import("../views/noviceguidance/NoviceGuidance")
		},
		 {
			path:'/recharge',
			name:"recharge",
			component:()=>import("../views/recharge/Recharge.vue")
		  },
		  {
			path:'/gift',
			name:"gift",
			component: ()=>import('../views/gift/Gift.vue')
		  },
		  {
			path:'/hangup',
			name:"hangup",
			component: ()=>import('../views/hangup/Hangup.vue')
		  },
		  {
			path:'/topupplayerscatter',
			name:"topupplayerscatter",
			component: ()=>import('../views/topupplayerscatter/Topupplayerscatter.vue')
		  },
		  {
			path:'/gearrechargescatter',
			name:"gearrechargescatter",
			component: ()=>import('../views/gearrechargescatter/Gearrechargescatter.vue')
		  },
		  {
			path:'/rolezr',
			name:"rolezr",
			component: ()=>import('../views/rolezr/Rolezr.vue')
		  },
		  {
			path:'/racedrawtimes',
			name:"recedrawtimes",
			component: ()=>import('../views/racedrawtimes/Racedrawtimes.vue')
		  },
	]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
