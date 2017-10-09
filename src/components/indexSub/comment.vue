<template>
  <div id="comment">
	<h3>评论列表</h3>
	<ul class="commentList">
		<li v-for="(item, index) in items">
			<div class="user">
				<img :src="item.user.web_url">
				<div class="username">
					<div>{{item.user.user_name}}</div>
					<div>{{item.created_at}}</div>
				</div>
				<div class="mark"><i class="iconfont icon-shoucang"></i><span>{{item.praisenum}}</span></div>
			</div>
			<div class="content">{{item.content}}</div>
		</li>
	</ul>
  </div>
</template>

<script>

import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
export default {
  name: 'comment',
  components: { VueScroller  },
  data(){
  	return {
  		items: this.$store.getters.comment
  	}
  },
  created(){
   var manual= this.$route.params.manual;
  	if (manual == 'serialcontent') {
  		manual = 'serial'
  	}
   var id = this.$route.params.id;
   var index = 0;
   this.$store.dispatch('getComment',{manual,id,index});
 	},

}
</script>

<style type="text/css">
	#comment {
		position: relative;
		height: 50rem;
	}
	#comment h3 {
		text-indent: .3rem;
		line-height: .8rem;
		border-bottom: 3px solid #ccc;
	}
	#comment .commentList {
		background-color: #eee;
	}
	#comment img {
		position: absolute;
		left: 0;
		top: 0;
		width: .8rem;
		height: .8rem;
		border-radius: 50%;
	}
	#comment li {
		padding: .1rem .3rem;
		margin-bottom: .2rem;
		background-color: #fff;
	}
	#comment .user {
		position: relative;
	}
	#comment .username {
		margin-left: 1rem;
		font: .25rem/.4rem '微软雅黑';
	}
	#comment .username div:nth-of-type(1) {
		color: #233ae7;
	}
	#comment .mark {
		position: absolute;
		right: .6rem;
		top: .5rem;
	}
	#comment .mark i {
		font-size: .35rem;
	}
	#comment .mark span {
		position: absolute;
		top: -.2rem;
		left: .5rem;
	}
	#comment .content {
		margin-top: .2rem;
		font: .26rem/.5rem '微软雅黑';
	}
</style>
