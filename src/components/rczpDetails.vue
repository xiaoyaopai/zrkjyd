<template>
    <!--人才招聘详情-->
    <div class="xwxq_content">
        <div class="xwxq_content_h">
            <h4 v-text="rczpDetails.title"></h4>
            <p><i v-text="rczpDetails.money"></i><b v-text="$options.filters.capitalize(rczpDetails.experience)"></b></p>
        </div>
        <div class="xwxq_content_b">
            <h4>职位描述：</h4>
            <p v-text="rczpDetails.miaoshu"></p>
            <h4>岗位要求：</h4>
            <p v-text="rczpDetails.yaoqiu"></p>
        </div>
    </div>
</template>

<script>
export default {
  name:'rczpDetails',
  data(){
    return{
        rczpDetails:[],
    }
  },
  computed:{

  },
  filters: {
       capitalize: function (value) {
           if (!value) return ''
           value = value.substr(0,35)+'...'
           return value
        }
   },
   created (){
        this.Getrczp()
   },
   mounted(){

   },
    watch: {
        $route () {
            this.Getrczp()
        }
    },
   methods:{
          Getrczp(){
                  var uid =  this.$route.query.id
                  this.axios.get('http://www.people2000.net/mobile/index/zhaopinDetails?id='+uid).then((response) => {
                  this.rczpDetails =response.data.data[0];
              })
          }
        }
}
</script>