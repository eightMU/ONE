<template>
	<div id="register">
		<x-header style="background-color: #fff" :left-options="{backText: ''}">注册</x-header>
		<div class="content">
			<div>
		    	<group>
	    	      <x-input placeholder="用户名" v-model='usernameValue' @input.native='check' @blur.native='checkUserInfo'>
	    	      	<i v-if='down' @click='changeDir' slot='right' :class="userIconClassName"></i>
	    	      </x-input>
	    	      <x-input placeholder="密码" :type='type' v-model='userPassword' @input.native='check'>
	    	      	<i slot='right' @click='changePasswordShow' :class="showPassword"></i>
	    	      </x-input>
	    	     <!--  <x-input title="禁用验证" :icon-type="iconType" :show-clear="false" @on-blur="checkUserInfo" placeholder-align="right"></x-input> -->
	    	    </group>
	    	    <router-link v-if='isShow' to='/user'><input @click='saveUserInfo' type="button" :style="{background:bg,color:color}" value='注册'></router-link>
	    	    <input v-else='' @click='saveUserInfo' type="button" :style="{background:bg,color:color}" value='注册'>

	    	    <div v-show='isShow'>用户名已存在</div>

    	   	</div>
		</div>
	</div>
</template>

<script>
import { XHeader } from 'vux'
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  name: 'register',
  components: { 
  	XHeader, 
  	XInput,
    XButton,
    Group,
    Cell },
  data(){
	return{
		index:0,
		down:true,
		type:'password',
		userIconClassName:'icon iconfont icon-jiantouxia',
		showPassword:'icon iconfont icon-liulan',
		bg:'',
		color:'',
		usernameValue:'',
		userPassword:'',
		isShow:false
	}
  },
  methods:{
  	check(){
  		console.log(222)
  		if (this.usernameValue&&this.userPassword) {
  			this.color = '#fff';
  			this.bg='#489ff1';
  			console.log(123)
  		} else {
  			this.color = ''
  			this.bg='';
  		}
  		this.isShow = false;
  	},
  	checkUserInfo(){
  		var userData = this.$store.state.userData;
  		console.log(333)
  		if (userData.length) {
  			for (var i = 0; i < userData.length; i++) {
  				if (this.usernameValue == userData[i].user) {
  					this.isShow = true;
  					return;
  				}
  			}  			
  		}
  	},
  	changeDir(){
  		if (this.userIconClassName == 'icon iconfont icon-jiantouxia') {
  			this.userIconClassName = 'icon iconfont icon-jiantoushang'
  		} else {
  			this.userIconClassName = 'icon iconfont icon-jiantouxia'
  		}
  	},
  	changePasswordShow(){
  		if (this.showPassword == 'icon iconfont icon-liulan') {
  			this.showPassword = 'icon iconfont icon-liulan password';
  			this.type = 'text'
  		} else {
  			this.showPassword = 'icon iconfont icon-liulan';
  			this.type = 'password'

  		}
  	},
  	saveUserInfo(){
  		  
  		this.$store.commit('saveUserInfo',{user:this.usernameValue,password:this.userPassword})		
  	}
  }

}
</script>


<style type="text/css">
	#register .vux-header {
		border-bottom: 1px solid #000;
	}
	#register .vux-header-title {
		height: .96rem;
		line-height: .96rem;
		font-size: .38rem;
		color: #000;
	}
	#register .vux-header-left {
		left: .35rem;
		top: .35rem;
	}
	#register .left-arrow:before {
		width: .3rem;
		height: .3rem;
		border-color: #000;
	}
	#register .content {
		height: 5rem;
		background-color: #eee;
	}
	#register .content>div {
		padding-top: .3rem;
		margin: 0 auto;
		width: 90%;
	}
	#register .weui-cells {
		border: 1px solid #f2f2f2;
		border-radius: .1rem;
	}
	#register .vux-tab {
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 1px solid #000;
		width: 100%;
		height: 1rem;
	}
	#register .vux-tab-item {
		font: .3rem/1rem '微软雅黑';
	}
	#register .iconfont {
		font-size: .35rem;
	}
	#register .password {
		color: #33334c;
	}
	#register .weui-cells {
		font-size: .3rem;
	}
	#register input[type='button'] {
		margin: .3rem 0;
		border-radius: .3rem;
		border: none;
		user-select: none;
		height: 1rem;
		font: .3rem/1rem '微软雅黑';
		color: #000;
		width: 100%;
	}
	#register .weui-icon-clear:before {
		font-size: .3rem;
	}
	#register .register {
		padding: .2rem;
		font: .28rem/.6rem '微软雅黑';
	}
</style>


