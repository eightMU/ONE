<template>
	<div id="login">
		<x-header style="background-color: #fff" :left-options="{backText: ''}">登录</x-header>
		<div class="content">
			<div>
		    	<group>
	    	      <x-input placeholder="用户名" v-model='usernameValue' @input.native='check'>
	    	      	<i v-if='down' @click='changeDir' slot='right' :class="userIconClassName"></i>
	    	      </x-input>
	    	      <x-input placeholder="密码" :type='type' v-model='userPassword' @input.native='check'>
	    	      	<i slot='right' @click='changePasswordShow' :class="showPassword"></i>
	    	      </x-input>
	    	    </group>
	    	    <router-link to='/user'><input type="button" @click='saveUserInfo' :style="{background:bg,color:color}" value='登陆'></router-link>
	    	    <div>默认输入直接进入</div>
    	   	</div>
		</div>
	</div>
</template>

<script>
import { XHeader } from 'vux'
import { XInput, Group, XButton, Cell } from 'vux'
import { Tab, TabItem } from 'vux'
export default {
  name: 'login',
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
		userPassword:''
	}
  },
  methods:{
  	check(){
  		if (this.usernameValue&&this.userPassword) {
  			this.color = '#fff';
  			this.bg='#489ff1';
  		} else {
  			this.color = ''
  			this.bg='';
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
	#login .vux-header {
		border-bottom: 1px solid #000;
	}
	#login .vux-header-title {
		height: .96rem;
		line-height: .96rem;
		font-size: .38rem;
		color: #000;
	}
	#login .vux-header-left {
		left: .35rem;
		top: .35rem;
	}
	#login .left-arrow:before {
		width: .3rem;
		height: .3rem;
		border-color: #000;
	}
	#login .content {
		height: 5rem;
		background-color: #eee;
	}
	#login .content>div {
		padding-top: .3rem;
		margin: 0 auto;
		width: 90%;
	}
	#login .weui-cells {
		border: 1px solid #f2f2f2;
		border-radius: .1rem;
	}
	#login .vux-tab {
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 1px solid #000;
		width: 100%;
		height: 1rem;
	}
	#login .vux-tab-item {
		font: .3rem/1rem '微软雅黑';
	}
	#login .iconfont {
		font-size: .35rem;
	}
	#login .password {
		color: #33334c;
	}
	#login .weui-cells {
		font-size: .3rem;
	}
	#login input[type='button'] {
		margin: .3rem 0;
		border-radius: .3rem;
		border: none;
		user-select: none;
		height: 1rem;
		font: .3rem/1rem '微软雅黑';
		color: #000;
		width: 100%;
	}
	#login .weui-icon-clear:before {
		font-size: .3rem;
	}
	#login .register {
		padding: .2rem;
		font: .28rem/.6rem '微软雅黑';
	}
</style>


