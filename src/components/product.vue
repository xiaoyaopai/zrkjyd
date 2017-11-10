<template>
<!--产品中心-->
<div class="cpzx_content">
     <div class="lb_banner cpzx_banner">
        <h4><b>自主可控 创新技术</b><br>申报国家发明专利过百项</h4>
        <p><img src="static/images/cpzx_banner.png"></p>
     </div>
     <div class="cpzx_h cpzx_title">
        <img src="static/images/cpzx_title.png">
     </div>
     <div class="cpzx_c">
       <p>{{ cpzxContent.dec }}</p>
         <router-link :to="{ path: 'productList', query: { id: '10',tb:'全部数据' }} "><img src="static/images/ljxq_btn.png"/></router-link>
     </div>
     <div class="cpzx_b" id="slideBox">
         <div class="cpzx_box_h bd" >
           <ul>
             <li>
                 <div class="cpzx_box_child"  v-for="(item,index) in product">
                     <router-link :to="{ path: 'productList', query: { id: item.id,tb:item.tubiao }} ">
                   <span>
                       <img v-bind:src="url+(index+1)+'.png'" /></span>
                   <p>{{item.title}}</p>
                   </router-link>
                 </div>
             </li>
             </ul>
           </div>
           <div class="cpzx_box_b hd"><ul></ul></div>
   </div>
</div>
</template>

<script>
export default {
  name:'product',
  data(){
    return{
      product:[],
      cpzxContent:'',
      url:"http://www.people2000.net/static/index/images/cpzx-pc-b-0",
    }
  },
  created (){
    this.Getcpzx()
  },
    watch: {
        $route () {
            this.Getcpzx()
        }
    },
  methods:{
    Getcpzx(){
          this.axios.get('http://www.people2000.net/mobile/index/category?pid=10').then((response) => {
          this.product = response.data.data
          })
          this.axios.get('http://www.people2000.net/mobile/index/categoryId?id=10').then((datas) => {
            this.cpzxContent = datas.data.data
          })
    }
  }
}
</script>