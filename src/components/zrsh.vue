<template>

    <!--生活在众人-->
    <div class="shzzr_content">
        <div class="shzzr_h">
            <h4>寻找最善良的你</h4>
            <img src="static/images/shzzr_h.png"/>
            <p>前景令人鼓舞、催人奋进, 但幸福不会从天而降巨大能量！</p>
        </div>
        <div class="shzzr_b">
            <div class="shzzr_bh">
                <img src="static/images/shzzr_bh.png"/>
            </div>
            <div class="shzzr_bb swiper-container">
                <div  class="swiper-wrapper">
                    <div class="swiper-slide">
                        <dl>
                            <dd v-for="(item,index) in zrsh" v-if="index<=3"><span><img v-bind:src="item.images"/></span><p v-text="item.name"></p></dd>
                        </dl>
                    </div>
                    <div class="swiper-slide">
                        <dl>
                            <dd v-for="(item,index) in zrsh" v-if="index<=7 && index>=4"><span><img v-bind:src="item.images"/></span><p v-text="item.name"></p></dd>
                        </dl>
                    </div>
                    <div class="swiper-slide">
                        <dl>
                            <dd v-for="(item,index) in zrsh" v-if="index<=12 && index>=8"><span><img v-bind:src="item.images"/></span><p v-text="item.name"></p></dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination shzzr_bc"></div>
        </div>

    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'zrsh',
  data(){
    return{
        zrsh:[],//生活在众人
    }
  },
  created (){
        this.Getgyzr()
  },
  mounted () {
        this.Swiper()
   },
    watch: {
        $route () {
            this.Getgyzr()
        }
    },
  methods:{
        Getgyzr() {
            this.axios.get('http://www.people2000.net/mobile/index/advert?classid=4').then((response) => {
                let data = response.data.data
                this.zrsh = data
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
  }, components: {
    swiper,
    swiperSlide
}
}
</script>