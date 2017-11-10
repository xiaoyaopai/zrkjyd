<template>
    <!--服务中心-->
    <div class="fwzx_content">
        <!--banner-->
        <div class="lb_banner fwzx_banner">
            <h4><b>提供全程安全保障</b><br><b>提升客户业务效能</b></h4>
            <p><img src="static/images/fwzx_banner.png"></p>
        </div>
        <!--安全服务-->
        <div class="fwzx_aqfw">
            <div class="fwzx_aqfw_h">
                <img src="static/images/fwzx_title.png">
            </div>
            <div class="fwzx_aqfw_b">
                <div class="fwzx_aqfw_conten swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in aqfw">
                            <router-link :to="{ path: 'fwzxList', query: { id: item.id,tb:item.title }} ">
                                <div class="fwzx_aqfw_left left">
                                    <img v-bind:src="url+(index+1)+'.png'">
                                </div>
                                <div class="fwzx_aqfw_right right">
                                    <h3><img src="static/images/fwzx_aqfw_right_title.png"/><b>0{{ index+1 }}</b></h3>
                                    <h4>{{ item.title }}</h4>
                                    <h5></h5>
                                    <p>{{ item.dec | capitalize }}</p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <a class="fwzx_aqfw_prev swiper-button-prev"><img src="static/images/fwzx_left.png"></a>
                <a class="fwzx_aqfw_next swiper-button-next"><img src="static/images/fwzx_right.png"></a>
            </div>
        </div>
        <!--技术服务-->
        <div class="fwzx_jsfw">
            <div class="fwzx_jsfw_h">
                <img src="static/images/fwzx_jsfw_h.png"/>
            </div>
            <div class="fwzx_jsfw_b">
                <img src="static/images/fwzx_jsfw_b.png"/>
                <div  v-for="(item,index) in jsfw" class="fwzx_jsfw_khzc" v-if="index === 0">
                    <router-link :to="{ path: 'fwzxList', query: { id: item.id,tb:item.title }} ">
                    <h4 v-text="item.title"></h4>
                    <p>{{ item.dec | capitalize }}</p>
                    </router-link>
                </div>
                <div  v-for="(item,index) in jsfw" class="fwzx_jsfw_shfw" v-if="index === 1">
                    <router-link :to="{ path: 'fwzxList', query: { id: item.id,tb:item.title }} ">
                    <h4 v-text="item.title"></h4>
                    <p>{{ item.dec | capitalize }}</p>
                    </router-link>
                </div>
            </div>
        </div>
        <!--培训服务-->
        <div class="fwzx_pxfw">
            <div class="fwzx_pxfw_h">
                <img src="static/images/fwzx_pxfw_h.png"/>
            </div>
            <div class="fwzx_pxfw_b">
                <ul>
                    <li v-for="item in pxfw">
                        <router-link :to="{ path: 'fwzxList', query: { id: item.id,tb:item.title }} ">
                        <img style="width:100%;" src="static/images/fwzx_pxfw_bg.png"/>
                        <div class="fwzx_pxfw_bl">
                            <h4 v-text="item.name"></h4>
                            <p>{{ item.dec | capitalize2  }}</p>
                        </div>
                        <div class="fwzx_pxfw_br">
                            <span>
                               <img v-bind:src="item.images"/>
                            </span>
                        </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'fwzx',
  data(){
    return{
        aqfw:[],
        jsfw:[],
        pxfw:[],
        url:'http://www.people2000.net/static/index/images/aqfw-b-0'
    }
  },
    watch: {
        $route () {
            this.Getfwzx()
        }
    },
  created (){
     this.Getfwzx()
  },
    mounted () {
        this.Swiper()
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.substr(0,32)+'...'
            return value
        },
        capitalize2: function (value) {
            if (!value) return ''
            value = value.substr(0,20)+'...'
            return value
        }
    },
  methods:{
      Getfwzx(){
          this.axios.get('http://www.people2000.net/mobile/index/categoryId?id=77').then((response) => {
              this.aqfw = response.data.data
          })
          this.axios.get('http://www.people2000.net/mobile/index/categoryId?id=79').then((response) => {
              this.jsfw = response.data.data
          })
          this.axios.get('http://www.people2000.net/mobile/index/categoryId?id=86').then((response) => {
              this.pxfw = response.data.data
          })
      },
      Swiper(){
          setTimeout(function(){
              var swiper = new Swiper('.swiper-container', {
                  pagination : '.swiper-pagination',
                  paginationClickable: true,
                  longSwipesRatio: 0.3,
                  touchRatio:1,
                  autoplay: 3000,
                  observer:true,//修改swiper自己或子元素时，自动初始化swiper
                  observeParents:true,//修改swiper的父元素时，自动初始化swiper
                  prevButton:'.swiper-button-prev',
                  nextButton:'.swiper-button-next',
              });
          },1000)
      }
  }, components: {
        swiper,
        swiperSlide
    }
}
</script>