<template>
  <div class="racedrawtimes">
	  <div class="class0">
	  	   <Upload
	  	       multiple
	  	       action="//jsonplaceholder.typicode.com/posts/">
	  	       <Button icon="ios-cloud-upload-outline">Upload files</Button>
	  	   </Upload>
	  </div>
	  	
	  	<div class="class1">
	  		<Upload
	  		        multiple
	  		        type="drag"
	  		        action="//jsonplaceholder.typicode.com/posts/">
	  		        <div style="padding: 20px 0">
	  		            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
	  		            <p>Click or drag files here to upload</p>
	  		        </div>
	  		    </Upload>
	  	</div>
  </div>
</template>
<script>
    export default {
        
    }
</script>
