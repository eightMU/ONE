<template>
	<div id="user">
		<x-header style="background-color:transparent;">
		   <i @click='isShow' slot="overwrite-left" class="icon iconfont icon-category"></i>用户信息
		   </router-link>
       <router-link to='/login' slot="right" @click.native='logout'>退出</router-link>
		</x-header>
		<div class="content">
			<div>
				<img class="userIcon" src="static/image/user-icon.jpg">
				<div class="username">{{username}}</div>
			</div>
			<div>
				<h3>我的关注</h3>
			</div>

		</div>
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
export default {
  name: 'user',
  components: { 
  	XHeader, 
  },
  data(){
	return{
		sidebarData:[{title:'ONE',link:'/'},
		  {title:'阅读',link:'/reading'},
		  {title:'音乐',link:'/music'}]
	}
  },
  computed:{
  	username(){
  		var userNumber = this.$store.state.userData.length;
  		if (userNumber) {
  			return this.$store.state.userData[userNumber-1].user;
  		} 
  	}
  },
  methods:{
    logout(){
      this.$store.commit('clearUserInfo')
    },
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
    changeTilte(n){
      this.title = this.sidebarData[n].title;
    }
  }

}
</script>


<style type="text/css">
	#user .vux-header-title {
		height: .96rem;
		line-height: .96rem;
		font-size: .38rem;
		color: #000;
	}
	#user .vux-header-left {
		left: .35rem;
		top: .35rem;
	}
	#user .left-arrow:before {
		width: .3rem;
		height: .3rem;
		border-color: #000;
	}
	#user .content {
		text-align: center;
		height: 5rem;
		font: .25rem/.3rem '微软雅黑';
		background-color: #eee;
	}
	#user .userIcon {
		padding: .3rem;
		width: 1rem;
		height: 1rem;
	}
	#user .userIcon img {
		border-radius: 50%;
	}
	#user .username {
		text-align: center;
		font: .25rem/.3rem '微软雅黑';
	}
  #user i {
    font-size: .5rem;
    color: #000;
  }
  #user .vux-header-right a {
    height: .5rem;
    line-height: .5rem;
    font-size: .3rem;
    color: #000;
  }
	
</style>


