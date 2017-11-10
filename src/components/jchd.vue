<template>
    <!--精彩活动-->
    <div class="jchd_content">
        <div class="jchd_h">
            <div class="jchd_hh">
                <img src="static/images/jchd_hh.png"/>
            </div>
            <div class="jchd_hb">
                <img src="static/images/jchd_hb.png"/>
            </div>
        </div>
        <div class="jchd_b">
            <div class="jchd_bh">
                <h4>精彩活动</h4>
            </div>
            <div class="jchd_bb">
                <div class="jchd_bb_box swiper-container" v-for="(item,index) in jchd" v-if="index>6">
                    <div class="jchd_bb_content swiper-wrapper">
                        <div class="swiper-slide" v-for="(itemList,index) in item.ddd">
                            <span><img v-bind:src="itemList.images"/></span>
                        </div>
                    </div>
                   <div class="jchd_bf"><p>{{ item.dec }}</p></div>
                   <a class="jchd_bb_left swiper-button-prev"><img src="static/images/fwzx_left.png"/></a>
                   <a class="jchd_bb_next swiper-button-next"><img src="static/images/fwzx_right.png"/></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'jchd',
  data(){
    return{
        jchd:[],//精彩活动
    }
  },
  created (){
        this.Getgyzr()
  },
  mounted () {
        this.Swiper()
   },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.substr(0,35)+'...'
            return value
        }
    },
    watch: {
        $route () {
            this.Getgyzr()
            this.Swiper()
        }
    },
  methods:{
        Getgyzr() {
            this.axios.get('http://www.people2000.net/mobile/index/jchd').then((response) => {
                let data = response.data.data
                this.jchd = data
            })
    },
    Swiper(){
        setTimeout(function(){
            var swiper = new Swiper('.swiper-container', {
                pagination : '.swiper-pagination',
                paginationClickable: true,
                longSwipesRatio: 0.3,
                touchRatio:1,
                //autoplay: 3000,
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