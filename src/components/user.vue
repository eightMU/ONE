<template>
	<div id="user">
		<x-header style="background-color: #fff" :left-options="{backText: ''}">用户信息</x-header>
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
</template>

<script>
import { XHeader } from 'vux'
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  name: 'user',
  components: { 
  	XHeader, 
  	XInput,
    XButton,
    Group,
    Cell },
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
  	}
  },
  methods:{
 
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
		height: 5rem;
		font: .25rem/.3rem '微软雅黑';
		background-color: #eee;
	}
	#user .userIcon {
		margin: 0 auto;
		padding: .3rem;
		width: 1rem;
		height: 1rem;
	}
	#user .userIcon img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	#user .username {
		text-align: center;
		font: .25rem/.3rem '微软雅黑';
	}
	
</style>


