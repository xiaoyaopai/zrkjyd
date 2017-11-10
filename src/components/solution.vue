<template>
    <!--解决方案-->
    <div class="jjfa_content">
        <!--列表页banner-->
        <div class="lb_banner jjfa_banner">
            <h4><b>稳定 可控 优选</b><br/>为客户网络安全保驾护航</h4>
            <p><img src="static/images/jjfa_banner.png"/></p>
        </div>
        <div class="lb_title jjfa_title">
            <img src="static/images/jjfa_title.png"/>
        </div>
        <div class="sy_jjfa_b">
            <ul>
                <li v-for="(item,index) in solution">
                    <router-link :to="{ path: 'solutionList', query: { id: item.id,tb:item.tubiao }} ">
                        <span class="left" ><img v-bind:src="item.jutb"></span>
                        <div class="sy_jjfa_br right">
                            <h4>{{ item.title }}</h4>
                            <h5></h5>
                            <p>{{ item.dec | capitalize }}</p>
                        </div>
                    </router-link>
                </li>
                <infinite-loading @infinite="infiniteHandler">
                    <b slot="no-more">
                      没有更多内容了。。
                    </b>
                    <b slot="no-results">
                        敬请期待更多。。
                    </b>
                </infinite-loading>
            </ul>
        </div>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name:'solution',
  data(){
    return{
        solution:[],
    }
  },
   filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.substr(0,35)+'...'
            return value
        }
    },
  created (){

  },
    watch: {
        $route (to, from) {
            window.location.reload()
        }
    },
  methods:{
     infiniteHandler($state) {
         var len=this.solution.length / 3 + 1
         this.axios.get('http://www.people2000.net/mobile/index/category?pid=9&sort=sort&page='+len).then((response) => {
            let data = response.data.data.data
            let datas = response.data.data
            if (data.length) {
                 this.solution = this.solution.concat(data);
                 $state.loaded();
                 if (this.solution.length / datas.total === 1) {
                     $state.complete();
                 }
             } else {
                 $state.complete();
             }
         })
      },
  },
    components: {
        InfiniteLoading
    },
}
</script>
