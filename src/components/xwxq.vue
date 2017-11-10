<template>
    <div>
    <!--新闻详情-->
    <div class="xwxq_content" id="top">
        <div class="xwxq_content_h">
            <h4>{{ xwxq.title }}</h4>
            <p><b>{{ tag }}</b><b>{{ xwxq.created_at | data }}</b></p>
        </div>
        <div class="xwxq_content_b">
            <p v-html="xwxq.content"></p>
        </div>
    </div>
    <!--向上箭头-->
    <div class="totop">
        <a href="#top"><img src="static/images/totop.png"/></a>
    </div>
  </div>
</template>

<script>
export default {
  name:'xwxq',
  data(){
    return{
        xwxq:[],
        tag:this.$route.query.tag
    }
  },
  computed:{

  },
  filters: {
        Space: function (value) {
            if (!value) return ''
            value = value.replace(/&nbsp;/g, "");
            return value
        },
        data: function (value) {
            if (!value) return ''
            value = new Date(parseInt(value) * 1000).toLocaleString().substr(0,17)
            return value
        }
   },
   created (){
        this.Getxwxq()

   },
    watch:{
       $route(to,from){
           this.Getxwxq()
       }
    },
    mounted(){
        this.Filter()
    },
   methods:{
          Getxwxq(){
                  var uid =  this.$route.query.id
                  this.axios.get('http://www.people2000.net/mobile/index/articleDetails?id='+uid).then((response) => {
                  this.xwxq =response.data.data;
              })
          },
         Filter(){
              setInterval(function(){
                  $('.xwxq_content p,.xwxq_content h1,.xwxq_content h2,.xwxq_content h3,.xwxq_content h4,.xwxq_content h5,.xwxq_content h6,.xwxq_content img,.xwxq_content span,.xwxq_content li').removeAttr("style")
             },100)
         }
    }

}
</script>
