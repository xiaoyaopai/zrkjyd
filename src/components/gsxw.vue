<template>
    <!--公司新闻-->
    <div class="xwdt_content">
        <div class="xwdt_h">
            <h4>{{ tag }}</h4>
        </div>
        <div class="xwdt_b">
            <ul>
                <li v-for="item in gsxw">
                    <div class="xwdt_bl left">
                        <h4>{{ item.created_at | day  }}</h4>
                        <p>{{ item.created_at | month }}</p>
                    </div>
                    <div class="xwdt_br right">
                        <router-link :to="{ path: 'xwxq', query: { id: item.id,tag:tag }} ">
                        <h4>{{ item.title| titleh }}</h4>
                        <p>{{ item.biref| titlep }}</p>
                        </router-link>
                    </div>
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
  name:'gsxw',

  data(){
    return{
        gsxw:[],
        tag:'公司新闻'

    }
  },
   filters: {
        titleh: function (value) {
            if (!value) return ''
            value = value.substr(0,15)+'...'
            return value
        },
       titlep: function (value) {
           if (!value) return ''
           value = value.substr(0,60)+'...'
           return value
       },
       day:function(unixTime, timeZone) {
            if (typeof (timeZone) == 'number')
            {
                unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
            }
            var time = new Date(unixTime * 1000);
            var ymdhis = "";
               var d=(time.getUTCDate()).toString();
               if(d.length>1){
                   return d;
               }else{
                   return "0"+d;
               }
            ymdhis += d+ "<b>";
            return ymdhis;
        },
       month: function(unixTime, timeZone) {
            if (typeof (timeZone) == 'number')
            {
                unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
            }
            var time = new Date(unixTime * 1000);
            var ymdhis = "";
            ymdhis += time.getUTCFullYear() + "-";
            var d=(time.getUTCMonth()+1).toString();
            if(d.length>1){
                ymdhis += d;
            }else{
                ymdhis += "0"+d;
            }
            return ymdhis;
        },
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
         var len = this.gsxw.length / 5 + 1
         this.axios.get('http://www.people2000.net/mobile/index/article?cid=52&page='+len).then((response) => {
            let data = response.data.data.data
            let datas = response.data.data
            if (data.length) {
                 this.gsxw = this.gsxw.concat(data);
                 $state.loaded();
                 if (this.gsxw.length / datas.total === 1) {
                     $state.complete();
                 }
             } else {
                 $state.complete();
             }
         })
      },
  },
    components: {
        InfiniteLoading,
    },
}
</script>
