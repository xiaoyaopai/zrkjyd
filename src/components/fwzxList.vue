<template>
    <!--服务中心列表-->
    <div class="sfrz_content">
        <div class="sfrz_h">
            <h4>{{ tb }}</h4>
        </div>
        <div class="sfrz_b">
            <ul>
                <li v-for="item in fwzxList">
                    <router-link :to="{ path: 'fwzxDetails', query: { id: item.id }} ">
                       <h4>【{{ tb }}】{{ item.title }}</h4>
                       <p>{{ item.biref | capitalize }}</p>
                     </router-link>
                </li>
             </ul>
        </div>
    </div>
</template>

<script>
export default {
  name:'fwzxList',
  data(){
    return{
        fwzxList:[],
        tb:this.$route.query.tb//列表页列表标题
    }
  },
  computed:{

  },
   created (){
     this.Getfwzx()
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
            this.Getfwzx()
        }
    },
   methods:{
       Getfwzx() {
           var uid =  this.$route.query.id //列表页id
           this.axios.get('http://www.people2000.net/mobile/index/article?cid='+uid).then((response) => {
               let data = response.data.data.data
               this.fwzxList = data
           })
       },
   }
}
</script>