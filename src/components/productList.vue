<template>
    <!--产品列表-->
    <div class="sfrz_content">
        <div class="sfrz_h">
            <h4>{{ tb }}</h4>
        </div>
        <div class="sfrz_b">
            <ul>
                <li v-for="item in productList">
                    <router-link :to="{ path: 'productDetails', query: { id: item.id }} ">
                       <h4 v-if="idd == 10">【{{ item.top }}】{{ item.title }}</h4>
                       <h4 v-else>【{{ tb }}】{{ item.title }}</h4>
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
  name:'productList',
  data(){
    return{
        productList:[],
        tb:this.$route.query.tb,
        idd:this.$route.query.id
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
           var uid =  this.$route.query.id
           var url='';
           var len = this.productList.length / 5 + 1
           if(uid == 10){
               url = 'http://www.people2000.net/mobile/index/article?id='+uid+'&page='+len;

           }else {
               url = 'http://www.people2000.net/mobile/index/article?cid='+uid+'&page='+len;
           }
           this.axios.get(url).then((response) => {
               let data = response.data.data.data
               let datas = response.data.data
               if (data.length) {
                   this.productList = this.productList.concat(data);
                   $state.loaded();
                   if (this.productList.length / datas.total === 1) {
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
    }
}
</script>