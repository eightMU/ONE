<template>
  <div id="detail">
    <header class="nav" ref='header'>
      <x-header :left-options="{backText: ''}" 
      style="background-color:rgba(116,89,98,1);"><span>{{character}}</span></x-header>
    </header>
    <scroller :on-infinite="infinite" ref="my_scroller">
      <article v-if="character == '问答'">
        <div v-if='content'>
          <h3 class="question_title">{{content.question_title}}</h3>
          <div class="user">{{content.asker.user_name}}：</div>
          <div class="question_content">{{content.question_content}}</div>
          <div class="user">{{content.answerer.user_name}}：</div>
          <div class="answer_content" v-html='content.answer_content'></div>
        </div>
      </article>
      <article v-else=''>
        <div v-if='data'>
          <header>
            <img :src="authorImg">
            <div class="author">
              <div>{{authorName}}</div>
              <time>{{time}}</time>
            </div>
            <div class="audio" @click='isPlay' v-if='audio'>
              <i v-if='play' class="iconfont icon-bofang"></i>
              <i v-else='' class="iconfont icon-zanting"></i>
              <audio ref='audio' :src='data.audio'></audio>
              <p>有声阅读</p>
            </div>
          </header>
          <div class="mainbody">
            <h3>{{title}}</h3>
            <div v-html='content'></div>
          </div>
        </div>
      </article>
      <!-- <comment></comment> -->
    </scroller>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import Comment from '@/components/indexSub/comment'
import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
export default {
  name: 'detail',
  components: { XHeader,Comment,VueScroller },
  data(){
  	return {
  		play: true
  	}
  },
  created(){
  	var manual = this.$route.params.manual;
  	var id = this.$route.params.id;
    if (manual == 'serial') {
      manual = 'serialcontent'
    }
  	this.$store.dispatch('getDetail',{type:manual,id:id})
  },
  computed:{
    data(){
      return this.$store.getters.data;
    },
  	character(){
 		   return this.$route.params.character; 
  	},
  	authorImg(){
      if (this.$store.getters.data.author_list) {
         return this.$store.getters.data.author_list[0].web_url
       }
  	},
    authorName(){
      var type = this.$route.params.type;
      if (type == 1) {
        return this.$store.getters.data.hp_author
      } else if(type == 2) {
        return this.$store.getters.data.author.user_name
      }
    },
    title(){
      var type = this.$route.params.type;
      if (type == 1) {
        return this.$store.getters.data.hp_title
      } else if (type == 2) {
         return this.$store.getters.data.title
      } 
    },
  	content(){
      var type = this.$route.params.type;
      if (type == 1) {
        return this.$store.getters.data.hp_content
      } else if (type == 2) {
         return this.$store.getters.data.content
      } else if(type == 3) {
          return this.$store.getters.data
      }
  	},
  	audio(){
  		return this.$store.getters.data.audio
  	},
    time(){
      var content = this.$store.getters.data;
      if (content.hp_makettime) {
        return content.hp_makettime.split(' ')[0];
      } else if (content.maketime) {
        return content.maketime.split(' ')[0];
      }
    }
  },
  methods:{
  	isPlay(){
  		this.play = !this.play;
  		if (this.$refs.audio.paused) {
  			this.$refs.audio.play();
  		} else {
  			this.$refs.audio.pause();
  		}
  	},
    infinite(done){
      // this.count = this.$store.getters.comment.length;
      // var count = this.$store.getters.commentLength;
      // var manual = this.$route.params.manual;
      // if (manual == 'serialcontent') {
      //   manual = 'serial'
      // }
      // var id = this.$route.params.id;
      // var index = this.$store.getters.comment[this.count-1].id;
      // this.$store.dispatch('getComment',{manual,id,index});
    }
  }
}
</script>

<style type="text/css">
  #detail .nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    background-color: #745962;
  }
  #detail>div {
    padding-top: 1rem;
    box-sizing: border-box;
  }
	#detail article {
		padding: .2rem;
	}
	#detail article header {
		position: relative; 
    height: 1rem;
	}
	#detail article img {
		position: absolute;
		left: 0;
		top: 0;
		width: .7rem;
		height: .7rem;
	}
	#detail .author {
		margin-left: .9rem;
		font: .25rem/.4rem '微软雅黑';
	}
  #detail .author div {
    color: #4c93d4;
  }
	#detail .audio {
		position: absolute;
		right: .3rem;
		top: 0;
		text-align: center;
	}
	#detail .audio i {
		font-weight: bold;
		font-size: .5rem;
		color: #745962;
	}
	#detail .audio p {
		font: .2rem/.5rem '微软雅黑'
	}
	#detail h3 {
		font: bold .3rem/.5rem '微软雅黑';
	}
	#detail .mainbody div {
		font: .27rem/.4rem '微软雅黑';
	}
  #detail .question_title {
    font: bold .3rem/.4rem '微软雅黑';
  }
  #detail .question_content, 
  #detail .answer_content {
    font: .28rem/.4rem '微软雅黑';
  }
  #detail .user {
    padding-top: .5rem;
    font: .28rem/.4rem '微软雅黑';
    color: #4c93d4;
  }
</style>


