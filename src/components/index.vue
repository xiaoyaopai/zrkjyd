<template>
<div>
    <!--banner-->
    <div class="banner swiper-container">
        <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in Banner" v-if="index ===0">
                    <router-link to="/gyzr"><img v-bind:src="item.images"/></router-link>
                    <!--<a class="tit" v-text="item.name"></a>-->
                </div>
                <div class="swiper-slide"  v-for="(item,index) in Banner" v-if="index != 0">
                    <img v-bind:src="item.images"/>
                    <!--<a class="tit" v-text="item.name"></a>-->
                </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

    <!--产品中心-->
    <div class="sy_cpzx">
        <div class="sy_cpzx_h sy_bt">
            <h4>产品中心</h4>
            <router-link to="/product">了解更多＞</router-link>
        </div>
        <div class="sy_cpzx_b">
            <ul>
                <li v-for="(item,index) in Product">
                    <div class="sy_content" v-if="index === 2 || index === 0">
                        <span class="left"><img v-bind:src="url+(index+1) + '.png'" /></span>
                        <div class="sy_cpzx_br right">
                            <router-link :to="{ path: 'productList', query: { id: item.id,tb:item.tubiao }} ">
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.dec | capitalize }}</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="sy_content" v-else-if="index === 1">
                        <span class="right"><img v-bind:src="url+(index+1) + '.png'" /></span>
                        <div class="sy_cpzx_br left">
                            <router-link :to="{ path: 'productList', query: { id: item.id,tb:item.tubiao }} ">
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.dec | capitalize }}</p>
                            </router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!--领导关怀-->
    <div class="sy_ldgh">
        <div class="sy_ldgh_h sy_bt">
            <h4>领导关怀</h4>
            <router-link to="/ldgh">了解更多＞</router-link>
        </div>
        <div class="sy_ldgh_b">
            <ul>
                <li v-for="(itemLdgh,index) in Ldgh" v-if="index<4 && index != 1">
                    <router-link :to="{ path: 'xwxq', query: { id: itemLdgh.id,tag:tag }} ">
                    <span class="left"><img v-bind:src="itemLdgh.pic" /></span>
                    <div class="sy_ldgh_br right">
                        <a href="#">
                            <h4>{{ itemLdgh.title | capitalize3  }}</h4>
                            <p>{{ itemLdgh.biref | capitalize2  }}</p>
                        </a>
                    </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

    <!--解决方案-->
    <div class="sy_jjfa">
        <div class="sy_jjfa_h">
            <img src="static/images/sy_jjfa_h.png"/>
        </div>
        <div class="sy_jjfa_b">
            <ul>
                <li v-for="item in Solution">
                    <router-link :to="{ path: 'solutionList', query: { id: item.id,tb:item.tubiao }} ">
                        <span class="left"><img v-bind:src="item.jutb"/></span>
                        <div class="sy_jjfa_br right">
                            <h4>{{ item.title  }}</h4>
                            <h5></h5>
                            <p>{{ item.dec | capitalize }}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="sy_jjfa_f">
            <router-link to="/solution">了解更多＞</router-link>
        </div>
    </div>

    <!--联系我们-->
    <div class="sy_lxwm">
        <div class="sy_lxwm_h">
            <img src="static/images/sy_lxwm_h.png">
        </div>
        <div class="sy_lxwm_b">
            <h4>{{ phone }}</h4>
            <p>北京 | 上海 | 重庆 | 深圳 | 西安 | 香港</p>
        </div>
    </div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
 name:'index',
 data(){
   return{
       Banner:[],//banner
       Product:[],//产品中心
       Solution:[],//解决方案
       Ldgh:[],//解决方案
       phone:'',//电话
       tag:'领导关怀',
       url:'static/images/sy_cpzx_0',
     }
 },
 computed: {

 },
  filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.substr(0,32)+'...'
            return value
        },
        capitalize2: function (value) {
          if (!value) return ''
          value = value.substr(0,48)+'...'
          return value
        },
          capitalize3: function (value) {
              if (!value) return ''
              value = value.substr(0,12)+'...'
              return value
          }
  },
 created (){
        this.banner()
        this.product()
        this.solution()
        this.Getbottom()
        this.ldgh()
 },
  mounted () {
        this.Swiper()
  },
    methods: {
     //banner
     banner(){
         this.axios.get('http://www.people2000.net/mobile/index/advert?classid=18').then((response) => {
             this.Banner = response.data.data
         })
     },
     //产品中心
     product(){
         this.axios.get('http://www.people2000.net/mobile/index/category?pid=10&limit=3').then((response) => {
             this.Product = response.data.data
         })
     },
     //解决方案
     solution(){
            this.axios.get('http://www.people2000.net/mobile/index/category?pid=9&page=1').then((response) => {
                this.Solution = response.data.data.data
            })
      },
        //领导关怀
        ldgh(){
            this.axios.get('http://www.people2000.net/mobile/index/article?cid=54&page=1').then((response) => {
                this.Ldgh = response.data.data.data

            })
        },
      Getbottom(){
            this.axios.get('http://www.people2000.net/mobile/index/bottom').then((response) => {
                this.phone = response.data.data.phone1
            })
     },
     Swiper(){
         var swiper = new Swiper('.swiper-container', {
             pagination : '.swiper-pagination',
             paginationClickable: true,
             longSwipesRatio: 0.3,
             touchRatio:1,
             autoplay: 3000,
             observer:true,//修改swiper自己或子元素时，自动初始化swiper
             observeParents:true,//修改swiper的父元素时，自动初始化swiper
         });
     }
 },
    components: {
        swiper,
        swiperSlide
    }
}
</script>


