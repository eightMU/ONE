<template>
		<div id="mask" v-if='oneList' v-isShow='imgShow' @click='hideImg'>
      <div class="content">
        <p>{{oneList[0].volume}}</p>
        <img :src="oneList[0].img_url">
        <div>
          <span>{{oneList[0].title}}</span>
          <span>|</span>
          <span>{{oneList[0].pic_info}}</span>
        </div>
      </div>
		</div>
</template>

<script type="text/javascript">
  export default {
    name: 'mask',
    computed:{
      imgShow(){
        return this.$store.state.imgShow
      },
      oneList(){
        return this.$store.state.readData.content_list
      }
    },
    methods:{
      hideImg(){
        this.$store.commit('hideMaskImg');
      }
    },
    directives: {
      isShow: {
        bind(el){
          el.onclick = function() {
            el.style.left = "100%"
          }
        },
        update(el,binding){
          let boo = binding.value;
          if (boo) {
            el.style.left = "0"
          }
        }
      }
    }
  }
</script>
  
<style type="text/css">
  #mask {
    position: fixed;
    left: 100%;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    color: #fff;
    font: 0.24rem/0.94rem '微软雅黑';
    background: rgba(0,0,0,.9);
    transition: .2s;
  }
  #mask .content {
    margin: .5rem .4rem;
    text-align: left;
    font: .24rem/.94rem '微软雅黑';
  }
  #mask img {
    width: 100%;
  }
  #mask div {
    text-align: left;
  }
</style>