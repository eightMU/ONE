<template>
	<div id="poster">
      <swiper :options="swiperOption">
        <swiper-slide v-for='item,index in photo'>
        	<div class="picList">
        		<div class='img' @click='showImg(index)' :style="{'backgroundImage':'url('+item.hp_img_url+')'}"></div>
        		<div class="author"><span>{{item.hp_author}}</span></div>
        		<p class="content">{{item.hp_content}}</p>
        		<div class='time'><time>{{ item.hp_makettime | ymd }}</time></div>
        	</div>
        </swiper-slide>
      </swiper>
		  <div v-if='img' :class="maskClass" @click='hideImg()'>
	        <p>{{img.hp_title}}</p>
	        <img :src="img.hp_img_url">
	        <span>{{img.hp_author}}</span>
	    </div>
	</div>
</template>

<script type="text/javascript">
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'photo',
    data(){
    	return {
    		swiperOption: {
	          pagination: '.swiper-pagination',
	          paginationClickable: true,
             onSlideChangeEnd: swiper => {
            // console.log('onSlideChangeEnd', swiper)
          }
	        },
          maskClass:'mask',
          n:0,  //第几张图片
    	}
    },
	created(){
		if (!this.$store.getters.photoData.length) {
			this.$store.dispatch('getList');
		}
	},
    computed:{
      photo(){
        return this.$store.getters.photoData
      },
      img(){
        var photo = this.$store.getters.photoData;
        var n = this.n;
        if (photo.length) {
          return {hp_title:photo[n].hp_title,
            hp_img_url:photo[n].hp_img_url,
            hp_author:photo[n].hp_author}
        }
        return ''
      }
    },
    methods:{
      showImg(n){
        this.n = n;
        this.maskClass = 'mask maskActive';     
      },
      hideImg(){
        this.maskClass = 'mask';
      }
    },
    filters:{
    	ymd(v){
    		return v.split(' ')[0]
    	}
    }
  }
</script>
  
<style type="text/css">
  #poster .picList {
	margin: .2rem;
	padding: .2rem;
  }
  #poster .img {
  	height: 3.72rem;
  	background-size: cover;
  }
  #poster .author {
  	margin-top: .1rem;
	font: .2rem/.5rem '微软雅黑';
	text-align: center;
  }
  #poster .content {
  	margin-top: .2rem;
  	font: .25rem/.5rem '微软雅黑';
  }
  #poster .time {
  	font: .25rem/.5rem '微软雅黑';
  	text-align: right;
  }
 #poster .mask {
  	position: fixed;
    left: 50%;
    top: 30%;
    width: 0;
    height: 0;
    overflow: hidden;
    color: #fff;
    font: 0.24rem/0.94rem '微软雅黑';
    background: rgba(0,0,0,.9);
    transition: .5s;
    z-index: 100;
  }
   #poster .maskActive {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    transform: rotate(360deg)
   }
  .mask p {
    margin: .5rem .4rem;
    text-align: left;
    font: .24rem/.24rem '微软雅黑';
  }
  .mask span {
  	margin-left: .4rem;
  	font: .24rem/.24rem '微软雅黑';
  }
  .mask img {
    width: 100%;
  }
</style>