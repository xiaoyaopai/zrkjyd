<template>
    <!--资质证书-->
    <div class="zzry_content">
        <div class="zzry_h">
            <h4>专业 进取 开拓 自信</h4>
            <img src="static/images/zzry_h.png">
            <p>前景令人鼓舞、催人奋进, 但幸福不会从天而降巨大能量！</p>
        </div>
        <div class="zzry_c">
            <h4><img src="static/images/zzry_ch.png"/></h4>
            <ul>
                <router-link to="/zzzs"><li class="click">资质证书</li></router-link>
                <router-link to="/ryzs"><li>荣誉证书</li></router-link>
            </ul>
        </div>
        <div class="zzry_b">
            <ul>
                <li v-for="item in zzzs" @click="OpenImg($event)">
                    <div class="zzry_box left">
                        <span><img v-bind:src="item.images"/></span>
                        <p v-text="item.name"></p>
                    </div>
                </li>
                <infinite-loading @infinite="infiniteHandler">
                    <b slot="no-more">
                        没有更多内容了。。
                    </b>
                    <b slot="no-results">
                        敬请期待更多。。
                    </b>
                </infinite-loading>
            </ul>
        </div>
        <!--弹窗-->
        <div class="img_tc">
            <!--弹窗内容区-->
            <div class="img_tc_c">
                <div class="img_tc_box"></div>
            </div>
            <!--弹窗背景-->
            <div class="img_tc_bg" @click="CloseImg($event)"></div>
        </div>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name:'zzzs',
  data(){
    return{
        zzzs:[],//联系众人
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

  },
  mounted () {

  },
    watch: {
        $route (to, from) {
            window.location.reload()
        }
    },
  methods:{
      infiniteHandler($state) {
          var len = this.zzzs.length / 6 + 1
          this.axios.get('http://www.people2000.net/mobile/index/advert?classid=13&page='+len).then((response) => {
              let data = response.data.data.data
              let datas = response.data.data.total
              if (data.length) {
                  this.zzzs = this.zzzs.concat(data);
                  $state.loaded();
                  if (this.zzzs.length / datas === 1) {
                      $state.complete();
                  }
              } else {
                  $state.complete();
              }
          })
      },
      OpenImg(obj) {
          var obj = obj.currentTarget; // 当前元素
          var Index = $(obj).index();
          var str = '';
          $(obj).parents('.zzry_b ul').each(function(){
             var img =  $(this).find('li').eq(Index).find('img')[0].src
             str += '<img src='+ img +' />';
          })
          $('.img_tc').show();
          $('.img_tc_box').html(str)
          $("body").css('overflow','hidden')
          $('.img_tc_box').each(function () {
              new RTP.PinchZoom($(this), {});
          });
          setTimeout(function(){
              var _box_h = $('.pinch-zoom-container').height()
              $('.img_tc_c').height(_box_h.toFixed(0));
              $('.img_tc_c').css('margin-top',-(_box_h/2));
          },1)
          $('.pinch-zoom-container').css('overflow','inherit')
      },
      CloseImg(obj) {
          var obj = obj.currentTarget; // 当前元素
          $(obj).parent().hide();
          $('.img_tc_c').removeAttr("style");
          $('body').css('overflow','inherit')
          $('.pinch-zoom-container').removeAttr("style");
       }
  },
    components: {
        InfiniteLoading,
    }
}
</script>