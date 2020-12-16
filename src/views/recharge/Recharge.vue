<template>
   <div class="recharge">
	   <Button @click="value = true" type="primary">Open</Button>
	   <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value">
	       <p>Some contents...</p>
	       <p>Some contents...</p>
	       <p>Some contents...</p>
	   </Drawer>
	   <Button @click="value1 = true" type="primary">Open</Button>
	   <Drawer title="Basic Drawer" :closable="false" v-model="value1">
		   <p>Some contents...</p>
		   <p>Some contents...</p>
		   <p>Some contents...</p>
	   </Drawer>
   </div>
</template>
<script>
    export default {
        data () {
            return {
                value: false,
				value1: false
            }
        }
    }
</script>

<style>
</style>
