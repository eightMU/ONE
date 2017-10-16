<template>
  <div id="index">
  	<header>
        <x-header :left-options="{showBack: false}" style="background-color:transparent;">
           {{title}}
           <router-link :to='path' slot="right">
             <i class="icon iconfont icon-wode"></i>
           </router-link>
        </x-header>
  	</header>
     <router-view></router-view>
     <x-footer></x-footer>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import { Tab, TabItem } from 'vux'
import xFooter from './indexSub/footer.vue'
export default {
  name: 'index',
  data(){
    return {
    }
  },
  components: { XHeader,Tab, TabItem,'x-footer':xFooter},
  computed:{
    path(){
      if (this.$store.state.nowUser.user) {
        return '/user'
      }
      return '/login'
    },
     title(){
      return this.$store.state.title
     } 
  },
  methods:{
    
  }
}
</script>



<style type="text/css">
	#index header {
		position: relative;
		height: 0.96rem;
		width: 100%;
    border-bottom: 1px solid #000;
		background: #fff;
	}
  #index h1 {
    height: .96rem;
     font: 0.38rem/0.96rem '微软雅黑';
     color: #000;
  }
  #index header div {
    height: 0.66rem;
    font: 0.38rem/0.66rem '微软雅黑';
  }
   #index .vux-header .vux-header-right {
    right: .3rem;
  }
   #index .vux-header .vux-header-left {
    left: .3rem;
   }
   #index header i {
    font-size: .5rem;
    color: #000;
   }
   #bottomBar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background-color: #fff;
    z-index: 100;
   }
   #bottomBar a {
    display: block;
    font: .3rem/1rem '微软雅黑';
   }
   #bottomBar .router-link-exact-active {
     background-color: #4c93d4;
     color: #fff;
   }
   #bottomBar .vux-tab-ink-bar {
    background-color: transparent;
   }
</style>
