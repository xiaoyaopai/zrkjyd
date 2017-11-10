<template>
    <!--人才招聘-->
    <div class="rczp_content">
        <div class="rczp_h">
            <h4>人才招聘宣传语或标语</h4>
            <img src="static/images/rczp_h.png">
            <p>前景令人鼓舞、催人奋进, 但幸福不会从天而降巨大能量！</p>
        </div>
        <div class="rczp_b">
            <div class="rczp_bh">
                <h4>招聘职位</h4>
                <div class="rczp_bh_lb">
                    <ul>
                        <li class="click" @click="Getrczpxx()">
                            <router-link :to="{ path: 'rczp', query: { id: '999'}} ">
                                全部
                            </router-link>
                        </li>
                        <li v-for="(item,index) in rczp" @click="Getrczpxx()">
                            <router-link :to="{ path: 'rczp', query: { id: item.id}} ">
                            {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="rczp_bb" v-for="(item2,index) in rczpxx">
                <router-link :to="{ path: 'rczpDetails', query: { id: item2.id }} ">
                <ul>
                    <li>
                        <h4 v-text="item2.title"></h4>
                        <p><b v-text="item2.money" style="margin-right: 2%;"></b> {{ item2.experience | capitalize }} </p>
                    </li>
                </ul>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'rczp',
  data(){
    return{
        rczp:[],//人才招聘
        rczpxx:[],//人才招聘
    }
  },
   filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.substr(0,14)+'...'
            return value
        }
    },

  created (){
      this.Getrczp()
      this.Getrczpxx()
  },
  mounted () {

  },
    watch: {
        $route () {
            this.Getrczp()
            this.Getrczpxx()
        }
    },
  methods:{
      Getrczp(){
          this.axios.get('http://www.people2000.net/mobile/index/zhaopinList').then((response) => {
              this.rczp = response.data.data
          })
      },
      Getrczpxx(){
          var uid =  this.$route.query.id
          var url = '';
          if(uid){
              url = 'http://www.people2000.net/mobile/index/zhaopin?zid='+uid;
          }else{
              url = 'http://www.people2000.net/mobile/index/zhaopin?zid=999';
          }
          this.axios.get(url).then((response) => {
              this.rczpxx = response.data.data
          })
      },
  }
}
</script>