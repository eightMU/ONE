<template>
  <div id="index">
  	<header>
        <x-header style="background-color:transparent;">
           <i @click='isShow' slot="overwrite-left" class="icon iconfont icon-category"></i>{{title}}
           <router-link to='/login' slot="right">
             <i class="icon iconfont icon-wode"></i>
           </router-link>
        </x-header>
          
  	</header>
     <router-view></router-view>
     <ul id="sidebar" ref='side'  @click='isHide'>
       <li>X</li>
       <li v-for='item,index in sidebarData' @click='changeTilte(index)'>
       <router-link :to='item.link'>{{item.title}}</router-link>
       </li>
     </ul>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import $ from 'jquery'
export default {
  name: 'index',
  data(){
    return {
      title:'ONE',
      sidebarData:[{title:'ONE',link:'/'},
        {title:'阅读',link:'/reading'},
        {title:'音乐',link:'/music'}]
    }
  },
  components: { XHeader},
  methods:{
    isShow(e){
      var sidebar = this.$refs.side;
      $(sidebar).css({'left':'0'})
      var child = this.$refs.side.children;
      var n = $(child).length;
      var now = 0;
        var timer = 0;
        clearInterval(timer);
        timer =  setInterval(()=>{
         $(child).eq(now).css({'transform':'rotateY(0)'});
         now++;
         if (now == n) {
          clearInterval(timer);
         }
        },50);
        e.cancelBubble = true;
    },
    isHide(e){
      e.cancelBubble = true;
      var child = this.$refs.side.children;
      var n = $(child).length;
      var now = 0;
      var timer = 0;
      clearInterval(timer);
      timer =  setInterval(()=>{
       $(child).eq(now).css({'transform':'rotateY(90deg)'});
       now++;
       if (now == n) {
        clearInterval(timer);
        var sidebar = this.$refs.side;
        setTimeout(()=>{
           $(sidebar).css({'left':'-2rem'})
         },500)
       }
      },50)
    },
    hideBar(){
      var sidebar = this.$refs.side;
       $(sidebar).css({'left':'-2rem'})
    },
    login(){
      console.log('login')
    },
    changeTilte(n){
      this.title = this.sidebarData[n].title;
    }
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
   #sidebar {
    position: fixed;
    left: -2rem;
    top: 0;
    z-index: 1;
    width: 2rem;
    font: .3rem/2rem '微软雅黑';
    text-align: center;
   }
   #sidebar li {
    border-bottom: 1px solid #282942;
    color: #fff;
    transform: rotateY(90deg);
    transition: .3s;
    transform-origin: left center;
    background: #33334c;
   }
   #sidebar li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #fff;
   }
   
	
</style>
