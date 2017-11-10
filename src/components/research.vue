<template>
    <!--研究中心-->
    <div class="yjzx_content">
        <!--列表页banner-->
        <div class="lb_banner yjzx_banner">
            <h4><b>为客户网络安全保驾护航</b></h4>
            <p><img src="static/images/yjzx_banner.png"/></p>
        </div>
        <!--列表页title-->
        <div class="lb_title yjzx_title">
            <img src="static/images/yjzx_title.png"/>
        </div>
        <div class="yjzx_lb">
            <ul>
                <li v-for="item in research">
                    <router-link :to="{ path: 'researchList', query: { id: item.id,tb: item.tubiao }} ">
                    <span class="left"><img v-bind:src="item.jutb"/></span>
                    <div class="yjzx_lbr right">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.dec | capitalize }}</p>
                    </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name:'research',
  data(){
    return{
        research:[],
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
       this.Getresearch()
  },
    watch: {
        $route () {
            this.Getresearch()
        }
    },
  methods:{
     Getresearch() {
         this.axios.get('http://www.people2000.net/mobile/index/category?pid=12').then((response) => {
            let data = response.data.data
            this.research = data
         })
      },
  }
}
</script>