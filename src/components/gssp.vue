<template>
    <!--公司视频-->
    <div class="gssp_content">
        <div class="gssp_h">
            <h4>{{ tag }}</h4>
        </div>
        <div class="gssp_b">
            <ul>
                <li v-for="(item,index) in gsxw" @click="PLAY($event)">
                    <div class="gssp_sp">
                        <!--视频存放区-->
                        <div class="gssp_box">
                            <video v-bind:id="'media'+(index)" controls="controls"  preload="auto">
                                <source v-bind:src="item.content" type="video/mp4" />
                                <!--<source src="http://www.w3school.com.cn/i/movie.ogg" type="video/ogg" />-->
                            </video>
                        </div>
                        <!--视频缩略图-->
                        <div class="gssp_slt"><!--<span>--><img style="width:100%; height:100%;" v-bind:src="item.pic"/><!--</span>--></div>
                        <!--视频遮罩层-->
                        <div class="gssp_bfan" ><img src="static/images/gssp_zzc.png"/></div>
                    </div>
                    <div class="gssp_wz">
                        <h4 v-text="item.title"></h4>
                        <dl><dd v-for="itemChild in item.ta">{{ itemChild.title }}</dd></dl>
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

    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name:'gssp',

  data(){
    return{
        gsxw:[],
        tag:'公司视频'
    }
  },
   filters: {
        titleh: function (value) {
            if (!value) return ''
            value = value.substr(0,15)+'...'
            return value
        },
    },
created (){

  },
    watch: {
        $route (to, from) {
            window.location.reload()
        }
    },
  methods:{
     infiniteHandler($state) {
         var len=this.gsxw.length / 5 + 1
         this.axios.get('http://www.people2000.net/mobile/index/videoList?page='+len).then((response) => {
            let data = response.data.data.data
            let datas = response.data.data
            if (data.length) {
                 this.gsxw = this.gsxw.concat(data);
                 $state.loaded();
                 if (this.gsxw.length / datas.total === 1) {
                     $state.complete();
                 }
             } else {
                 $state.complete();
             }
         })
      },
      PLAY(obj){
          var obj = obj.currentTarget; // 当前元素
          $(obj).find('.gssp_bfan').hide();
          $(obj).find('.gssp_slt').hide();
          var Index = $(obj).index()
          var myVideo=document.getElementById("media"+Index);
          if (myVideo.paused){
              myVideo.play();
          } else {
              myVideo.pause();
          }
      }
  },
    components: {
        InfiniteLoading,
    },
}
</script>
