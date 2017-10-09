<template>
  <div id="sliderDetail">
  	<header ref='header'>
  		<x-header :left-options="{backText: ''}" 
  		style="background-color:#745962;"><span>{{title}}</span></x-header>
  	</header>
	<ul>
		<li v-for='item in list'>
			<router-link :to="'/detail/'+ item.manual +'/'+ item.character+ '/' + item.type +'/'+ item.item_id">
				<h3>{{item.title}}</h3>
				<span>{{item.author}}</span>
				<p>{{item.introduction}}</p>
			</router-link>
		</li>
	</ul>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name: 'sliderDetail',
  components:{ XHeader },
  computed:{
  	title(){
		return this.$route.params.title;
  	},
  	list(){
  		return this.$store.getters.sliderDetail;
  	},
  },
  created(){
  	var id = this.$route.params.id;
    this.$store.dispatch('getSliderDetail',id)
  }
}
</script>


<style type="text/css">
	#sliderDetail header {
		/*transform: translateY(-2rem);*/
		/*transition: .3s;*/
	}
	#sliderDetail ul {
		margin-top: .3rem;
	}
	#sliderDetail li {
		margin: .5rem .3rem;
		padding: .2rem .5rem .1rem;
		border-radius: .3rem;
		background: #eee8eb;
		/*transition: .3s;*/
	}
	#sliderDetail li a {
		display: block;
		width: 100%;
		height: 100%;
	}
	/*#sliderDetail li:nth-of-type(2n){
		transform: translateX(10rem);
	}
	#sliderDetail li:nth-of-type(2n+1){
		transform: translateX(-15rem);
	}*/
	#sliderDetail h3 {
		margin: .2rem 0;
		font: bold .3rem/.3rem '微软雅黑';
	}
	#sliderDetail li span {
		font: .25rem/.4rem '微软雅黑';
		color: #808080;
	}
	#sliderDetail p {
		margin-top: .2rem;
		font: .28rem/.4rem '微软雅黑';
	}
</style>