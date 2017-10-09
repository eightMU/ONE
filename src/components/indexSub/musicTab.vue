<template>
  <div id="musicTab">
    <tab :line-width=2 active-color='#745962' v-model="index">
      <tab-item class="vux-center" :selected="now === item" v-for="(item, index) in list" @click="now = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item>
        <div class="tab-swiper vux-center">{{1}} Container</div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center">{{2}} Container</div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center">{{3}} Container</div>
      </swiper-item>
    </swiper>

  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'

export default {
  name: 'musicTab',
  props:['data'],
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list: ['歌曲故事', '歌词', '歌曲信息'],
      now: '歌曲故事',
      index: 0,
    }
  },
  created(){
    // console.log(this)
  },
  methods: {
   
  }
}
</script>

  
<style type="text/css">
 

</style>