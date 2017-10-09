<template>
  <div id="reading">
    <slider></slider>
    <div id="readList">
      <swiper :options="swiperOption">
        <swiper-slide v-for='item,index in readData.essay'>
          <ul>
            <router-link tag='li' :to="'/detail/essay/短篇/1/'+ item.content_id">
              <div class="title">
                <h3>{{item.hp_title}}</h3>
                <span>短篇</span>
              </div>
              <div class="author">{{item.author_list | connect}}</div>
              <p>{{item.guide_word}}</p>
            </router-link>
            <router-link tag='li' :to="'/detail/question/问答/3/'+ readData.question[index].question_id">
              <div class="title">
                <h3>{{readData.question[index].question_title}}</h3>
                <span>问答</span>
              </div>
              <p class='special'>{{readData.question[index].answer_content}}</p>
            </router-link>
            <router-link tag='li' :to="'/detail/serial/连载/2/'+ readData.serial[index].id">
              <div class="title">
                <h3>{{readData.serial[index].title}}</h3>
                <span>连载</span>
              </div>
              <div class="author">{{readData.serial[index].author_list | connect}}</div>
              <p>{{readData.serial[index].excerpt}}</p>
            </router-link>
          </ul>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Slider from '@/components/slider'
export default {
  name: 'reading',
  data(){
  	return{
  		swiperOption: {
        spaceBetween: 30,
		  } 
  	}
  },
  components: { Slider },
  created(){
		this.$store.dispatch('getSliderList')
		this.$store.dispatch('getReadList')
	},
  computed:{
    readData(){
      return this.$store.getters.readData
    }
  },
  
  filters:{
    connect(v){
      var str='';
      v.forEach((value,index)=>{
        str += value.user_name + ''
      })
      return str
    }
  }
}
</script>

<style type="text/css">
	#reading img {
		width: 100%;
	}
  #readList {
    padding: .4rem;
  }
  #readList li {
    margin-bottom: .5rem;
  }
  #readList .title {
    position: relative;
  }
  #readList h3 {
    margin: 0 1.2rem 0 0;
    font: bold .3rem/.5rem '微软雅黑';
  }
  #readList .title span {
    position: absolute;
    top: 0;
    right: .1rem;
    padding: 0 .3rem;
    border: 1px solid #4c93d4;
    border-radius: .2rem;
    font: .2rem/.5rem '微软雅黑';
  }
  #readList .author {
    color: #808080;
    font: .26rem/.6rem '微软雅黑';
    height: .6rem;
  }
  #readList p {
    color: #808080;
    font: .26rem/.4rem '微软雅黑';
  }
  #readList .special {
    margin-top: .3rem;
  }
</style>
