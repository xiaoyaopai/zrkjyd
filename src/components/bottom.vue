<template>
  <!--footer-->
  <div class="footer">
    <div class="footer_c">
      <h4><a href="">法律声明</a> | <a href="">友情链接</a> | <a href="">网站统计</a></h4>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'bottom',
  data(){
    return{
      message:'',
    }
  },
  created (){
    this.Getbottom()
  },
  methods:{
    Getbottom(){
      this.axios.get('http://www.people2000.net/mobile/index/bottom').then((response) => {
        this.message = response.data.data.copyright + ' '+ response.data.data.record_msg
      })
    }
  }

}
</script>
