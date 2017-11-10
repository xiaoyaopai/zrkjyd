<template>
    <!--联系众人-->
    <div class="lxzr_content">
        <div class="lxzr_h">
            <img src="static/images/lxzr_h.png"/>
        </div>
        <div class="all_content" v-html="lxzr"></div>
    </div>
</template>

<script>
export default {
  name:'lxzr',

  data(){
    return{
        lxzr:[],//联系众人
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

  },
    watch: {
        $route () {
            this.Getgyzr()
        }
    },
  methods:{
      Getgyzr() {
          this.axios.get('http://www.people2000.net/mobile/index/article?cid=47').then((response) => {
              let data = response.data.data.data
              this.lxzr = data[0].content
              //console.log(data[0].content)
          })
      },
  }
}
</script>