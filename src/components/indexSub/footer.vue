<template>
  <div id="footer">
     <tab>
      <tab-item @on-item-click="changeTilte(index)" v-for='item,index in sidebarData' >   
        <router-link :to='item.link'>{{item.title}}</router-link>
      </tab-item>
    </tab>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  name: 'footer',
  data(){
    return {
      sidebarData:[{title:'ONE',link:'/'},
        {title:'阅读',link:'/reading'},
        {title:'音乐',link:'/music'},
        {title:'用户信息',link:'/user'}]
    }
  },
  components: { Tab, TabItem},
  methods:{
    changeTilte(n){
      this.$store.commit('updateTitle',this.sidebarData[n].title)
    }
  }
}
</script>



<style type="text/css">

   #footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background-color: #fff;
    z-index: 100;
   }
   #footer a {
    display: block;
    font: .3rem/1rem '微软雅黑';
   }
   #footer .router-link-exact-active {
     background-color: #4c93d4;
     color: #fff;
   }
   #footer .vux-tab-ink-bar {
    background-color: transparent;
   }
</style>
