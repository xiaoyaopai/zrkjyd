<template>
    <!--研究中心列表-->
    <div class="sfrz_content">
        <div class="sfrz_h">
            <h4>{{ tb }}</h4>
        </div>
        <div class="sfrz_b">
            <ul>
                <li v-for="item in researchList">
                    <router-link :to="{ path: 'researchDetails', query: { id: item.id }} ">
                       <h4>【{{ tb }}】{{ item.title }}</h4>
                       <p>{{ item.biref | capitalize }}</p>
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
  name:'researchList',
  data(){
    return{
        researchList:[],
        tb:this.$route.query.tb
    }
  },
  computed:{

  },
   created (){

   },
  filters: {
        capitalize: function (value) {
          if (!value) return ''
          value = value.substr(0,50)
          return value
      }
  },
    watch: {
        $route (to, from) {
            window.location.reload()
        }
    },
   methods:{
       infiniteHandler($state) {
           var uid =  this.$route.query.id //列表页id
           var len = this.researchList.length / 5 + 1
           this.axios.get('http://www.people2000.net/mobile/index/article?cid='+uid+'&page='+len).then((response) => {
               let data = response.data.data.data
               let datas = response.data.data
               if (data.length) {
                   this.researchList = this.researchList.concat(data);
                   $state.loaded();
                   if (this.researchList.length / datas.total === 1) {
                       $state.complete();
                   }
               } else {
                   $state.complete();
               }
           })

       }
    },
    components: {
        InfiniteLoading,
    },
}
</script>
