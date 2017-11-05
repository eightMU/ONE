<template>
	<div id="musicPages">
      	<swiper :options="swiperOption">
			<swiper-slide v-for='item in data'>
				<div class="poster" :style="{'backgroundImage':'url('+item.feeds_cover+')'}">
					<img class="poster" :src="item.cover">
					<div class="play" @click='isPlay'>
						<!-- <i v-if='play' class="iconfont icon-bofang"></i>
						<i v-else='' class="iconfont icon-zanting"></i> -->
			  	  		<audio :src='item'></audio>
					</div>
					<p>
						<span>{{item.title}} </span>
						<span>{{item.author.user_name}} </span>|
						<span>{{item.album}}</span>
					</p>
				</div>
				<div class="content">
					<tab :line-width=2 active-color='#745962' v-model="index">
				      <tab-item class="vux-center" :selected="now === item" v-for="(item, index) in list" @click="now = item" :key="index">{{item}}</tab-item>
				    </tab>
				    <div v-if='index == 0'>
				    	<h3>{{item.story_title}}</h3>
				    	<span class="author">{{item.story_author.user_name}}</span>
				    	<div v-html='item.story'></div>
				    </div>
				    <div v-if='index == 1'>
						<pre>{{item.lyric}}</pre>
				    </div>
				    <div v-if='index == 2'>
				    	<pre>{{item.info}}</pre>
				    	<div>{{item.charge_edt}}</div>
				    </div>
				</div>
		  	</swiper-slide>
      	</swiper>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Tab, TabItem } from 'vux'
export default {
  name: 'music',
  components: { swiper,swiperSlide,Tab,TabItem },
  data(){
	return{
		swiperOption: {
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		},
  		play: true,
  		list:['歌曲故事','歌词','歌曲信息'],
  		now:'歌曲故事',
  		index:0
	}
  },
  created(){
  		this.$store.dispatch('getMusicList')
  },
  computed:{
  	data(){
  		return this.$store.getters.musicData;
  	}

  },
  methods:{
  	isPlay(){
  		this.play = !this.play;
  		// if (this.$refs.audio.paused) {
  		// 	this.$refs.audio.play();
  		// } else {
  		// 	this.$refs.audio.pause();
  		// }
  	}
  }
}
</script>

<style type="text/css">
	#musicPages .poster {
		position: relative;
		height: 3.5rem;
		text-align: center;
	}
	#musicPages .poster img {
		position: absolute;
		left: 50%;
		top: 50%;
		margin: -1rem 0 0 -1rem;
		width: 2rem;
		height: 2rem;
	}
	#musicPages .poster i {
		position: absolute;
		left: 50%;
		top: 50%;
		margin: -.5rem 0 0 -.5rem;
		font-size: 1rem;
		color: #fff;
	}
	#musicPages .poster p {
		padding-top: 3rem;
		font: .25rem '微软雅黑';
		color: #fff;
	}
	#musicPages .content {
	 padding: .3rem;
	 font: .28rem/.34rem '微软雅黑';
	}
	#musicPages .content .author {
		color: #4c93d4;
	}
	#musicPages .content p {
		margin-top: .2rem;
		font: .28rem/.45rem '微软雅黑';
	}
	#musicPages .content pre {
		font: .28rem/.6rem arial,'微软雅黑';
	}
	#musicPages  h3 {
	 font-size: .35rem;
	 line-height: .6rem;
	}
	#musicPages .vux-tab-item {
	 font-size: .3rem;
	}
	#musicPages .vux-tab-selected {
	 font-size: .34rem;
	 font-weight: bold;
	}
</style>

