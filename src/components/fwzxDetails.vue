<template>
    <div>
    <!--服务中心详情-->
    <div class="cplb_article_content" id="top"  @click="Wzy1">
        <!--详情页内容区-->
        <div class="cplb_xq left" v-html="$options.filters.Space(fwzxDetails.content)">
        </div>
        <!--详情页导航区-->
        <div class="cplb_nav right">
            <h4>目录</h4>
            <ul></ul>
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
  name:'fwzxDetails',
  data(){
    return{
        fwzxDetails:[],
    }
  },
  computed:{

  },
  filters: {
        Space: function (value) {
            if (!value) return ''
            value = value.replace(/&nbsp;/g, "");
            return value
        }
   },
   created (){
        this.Getfwzx()
   },
    mounted(){
        this.Filter()
        this.GetTiltle()
    },
    watch: {
        $route () {
            this.Getfwzx()
            this.Filter()
            this.GetTiltle()
        }
    },
   methods:{
          Getfwzx(){
                  var uid =  this.$route.query.id
//                  var params = new URLSearchParams();
//                  params.append('id', uid);
                  this.axios.get('http://www.people2000.net/mobile/index/articleDetails?id='+uid).then((response) => {
                  this.fwzxDetails =response.data.data;
              })
          },
         Filter(){
              setInterval(function(){
                  $('.cplb_xq p,.cplb_xq h1,.cplb_xq h2,.cplb_xq h3,.cplb_xq h4,.cplb_xq h5,.cplb_xq h6,.cplb_xq img,.cplb_xq span,.cplb_xq li').removeAttr("style")
             },100)
         },
           GetTiltle(){
               setTimeout(function(){
                   var md = '';
                   var _index = 1;
                   $('.cplb_xq').find('h4').each(function () {
                       var _text = $(this).text();
                       if(_text.length > 0){
                           if(_index == 1){
                               md+='<li class="click"><a href="#f'+_index+'">0'+_index+'.'+_text+'</a></li>'
                           } else {
                               md+='<li><a href="#f'+_index+'">0'+_index+'.'+_text+'</a></li>'
                           }
                           $(this).attr('id','f'+_index);
                           _index ++;
                       }
                   })
                   $('.cplb_nav ul').append(md);
                   $('.cplb_nav ul li').click(function(){
                       $(this).addClass('click').siblings('li').removeClass('click')
                   })
               },2000)
           },
           Wzy1() {
               $('.cplb_article_content').toggleClass('move');
           }
        }
}
</script>
