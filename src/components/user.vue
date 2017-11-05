<template>
	<div id="user">
   <div v-if='hasUser'>
      <x-header :left-options="{showBack: false}" style="background-color:transparent;">
         用户信息
          <span slot="right" @click='logout'>退出</span>
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
   </div>
   <div  class='login' v-else=''>
     <router-link to='/login'>请登录</router-link>
   </div>
   <x-footer></x-footer>
	</div>
</template>

<script>
import { XHeader } from 'vux'
import xFooter from './indexSub/footer.vue'
export default {
  name: 'user',
  components: { 
  	XHeader, 
    'x-footer':xFooter
  },
  data(){
  	return{
      
  	}
  },
  computed:{
  	username(){
  		var userNumber = this.$store.state.userData.length;
  		if (userNumber) {
  			return this.$store.state.userData[userNumber-1].user;
  		} 
  	},
    hasUser(){
      if (!this.$store.state.nowUser.user) {
        return false
      }
      return true
    }
  },
  methods:{
    logout(){
      this.$store.commit('clearUserInfo')
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
  #user .vux-header-right {
    width: 1rem;
    height: .96rem;
    text-align: center;
    top: 0;
    right: 0;
    line-height: 1rem;

  }
  #user .vux-header-right span {
    display: block;
    font-size: .3rem;
    color: #000;
  }
  #user .login {
    margin: 2rem auto;
    text-align: center;
    font: 1rem '微软雅黑';
  }
	
</style>


