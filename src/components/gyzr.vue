<template>
    <!--关于众人-->
    <div class="gyzr_content">
        <div class="lb_banner gyzr_banner">
            <h4><b>专业 进取 开拓 自信</b></h4>
            <p><img src="static/images/gyzr_banner.png"></p>
        </div>

        <div class="gyzr_nrq">
            <h4>—— 众人科技 ——</h4>
            <h5>专业网络与信息安全产品和服务提供商</h5>
            <p>众人科技成立于2007年，是专业从事网络信息安全技术研发和产品生产的高新技术企业，公司坚持“自主可控”的国产化发展战略，申报国家发明专利过百项，核心技术“填补国内空白，达到国际先进水平”，是国产信息安全标准的制定者和推动者。<br>
                众人科技建立了以密码技术为基础、以身份认证技术为核心、以移动互联网和物联网应用为拓展、以信息安全为主导的产业模式，在身份认证、网络安全、应用安全、信息安全等方面积累了深厚的安全工程建设、安全服务经验，针对不同行业客户的不同应用场景和需求，提供不同的系统解决方案和配套安全产品，已广泛用于政府、军队、金融、电信等涉及国家基础设施和民众网络信息安全的重要领域。</p>
        </div>

        <div class="gyzr_gshq">
            <div class="gyzr_gshq_h">
                <img src="static/images/gyzr_gshd_h.png"/>
            </div>
            <div class="gyzr_gshq_c swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <dl>
                            <dd v-for="(item,index) in gshj" v-if="index<=3" v-bind:title="item.name"><img v-bind:src="item.images"/></dd>
                        </dl>
                    </div>
                    <div class="swiper-slide">
                        <dl>
                            <dd v-for="(item,index) in gshj" v-if="index<=7 && index>=4" v-bind:title="item.name"><img v-bind:src="item.images"/></dd>
                        </dl>
                    </div>
                    <div class="swiper-slide">
                        <dl>
                            <dd v-for="(item,index) in gshj" v-if="index<=12 && index>=8" v-bind:title="item.name"><img v-bind:src="item.images"/></dd>
                        </dl>
                    </div>
                </div>
                <div class="swiper-pagination gyzr_gshq_b"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'gshj',

  data(){
    return{
        gshj:[],//公司环境
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
         this.axios.get('http://www.people2000.net/mobile/index/advert?classid=17').then((response) => {
            let data = response.data.data
            this.gshj = data
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