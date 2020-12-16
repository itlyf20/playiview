<template>
    <Carousel v-model="value1" autoplay loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>
<style scoped="scoped">
	.demo-carousel{
		width: 100%;
		height: 300px;
		background-color: aqua;
	}
</style>