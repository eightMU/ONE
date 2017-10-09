<template>
  	<swiper :options="swiperOption">
  	  <swiper-slide v-for='item,index in imgData'>
        <router-link :to="'/sliderDetail/'+item.title+'/'+item.id">
          <img :src="item.cover">
        </router-link>
  	  </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
  	</swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'slider',
  components: { swiper, swiperSlide  },
  data(){
	return{
		swiperOption: {
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
         	autoplay: 2000,
        	autoplayDisableOnInteraction: false,
        	loop: true,
          onSlideChangeEnd: swiper => {
            // console.log('onSlideChangeEnd', swiper.realIndex)
          }
		  },
	}
  },
  computed:{
  	imgData(){
  		return this.$store.state.sliderData
  	}
  },
  methods:{
  	showDetail(id,n){
      this.$store.dispatch('getSliderDetail',id)
  		this.$store.commit('updateIndex',n)
  	}
  },
}
</script>
