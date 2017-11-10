<template>
  <div>
  <!--导航-->
  <div class="nav">
    <div class="nav-content">
      <div class="nav_content_left logo left">
        <img src="static/images/logo.png"/>
      </div>
      <div class="nav_content_right right">
        <span class="left"><img src="static/images/language.png"/></span>
        <b class="right" @click="navControl"><img src="static/images/chose.png"/></b>
      </div>
    </div>
  </div>
  <!--导航展开-->
  <div class="nav_zk">
    <div class="nav_zk_c">

      <div class="nav_box" v-for="(item,index) in navdata">
        <!--一级导航-->
        <div class="nav_box_h" v-if="index != 1">
          <h4><router-link :to="{ path:item.url}">{{item.title}}</router-link></h4>
          <b @click="navControlb($event)" class="navControlb_">+</b>
        </div>

        <!--一级导航-->
        <div class="nav_box_h" v-if="index === 1">
          <h4><router-link :to="{ path:'/gsxw'}">{{item.title}}</router-link></h4>
          <b @click="navControlb($event)">+</b>
        </div>

        <!--二级导航--><!--总控制-->
        <div class="nav_box_b" v-if="index != 5 && index != 3 && index != 2 && index != 8">
          <div class="nav_box_bb" v-for="child2 in item.child">
            <div class="nav_box_bbh">
              <h4><router-link :to="{ path:child2.url}">{{child2.title}}</router-link></h4>
              <b @click="navControlbb($event)">></b>
            </div>
            <div class="nav_box_bbb"  v-for="child3 in child2.child">
              <!--三级导航-->
                <router-link :to="{ path: 'fwzxDetails', query: { id: item.id,tb:item.title }} ">{{child3.title}}</router-link>
            </div>
          </div>
        </div>

        <!--二级导航--><!--解决方案-->
        <div class="nav_box_b" v-if="index === 2">
          <div class="nav_box_bb" v-for="(child2,index2) in item.child">
            <div class="nav_box_bbh">
              <h4><router-link :to="{ path: '/solutionList', query: { id: child2.id,tb: child2.title }} ">{{child2.title}}</router-link></h4>
              <b @click="navControlbb($event)">></b>
            </div>
            <div class="nav_box_bbb"  v-for="child3 in child2.child">
              <!--三级导航-->
              <a v-bind:href="child3.id">{{child3.title}}</a>
            </div>
          </div>
        </div>

        <!--二级导航--><!--产品中心-->
        <div class="nav_box_b" v-if="index === 3">
          <div class="nav_box_bb" v-for="child2 in item.child">
            <div class="nav_box_bbh">
              <h4><router-link :to="{ path: '/productList', query: { id: child2.id,tb: child2.title }} ">{{child2.title}}</router-link></h4>
              <b @click="navControlbb($event)">></b>
            </div>
            <div class="nav_box_bbb"  v-for="child3 in child2.child">
              <!--三级导航-->
              <a v-bind:href="child3.id">{{child3.title}}</a>
            </div>
          </div>
        </div>

        <!--二级导航--><!--研究中心-->
        <div class="nav_box_b" v-if="index === 5">
          <div class="nav_box_bb" v-for="child2 in item.child">
            <div class="nav_box_bbh">
              <h4><router-link :to="{ path: '/researchList', query: { id: child2.id,tb: child2.title }} ">{{child2.title}}</router-link></h4>
              <b @click="navControlbb($event)">></b>
            </div>
            <div class="nav_box_bbb"  v-for="child3 in child2.child">
              <!--三级导航-->
              <a v-bind:href="child3.id">{{child3.title}}</a>
            </div>
          </div>
        </div>

        <!--二级导航--><!--人才招聘-->
        <div class="nav_box_b" v-if="index === 8">
          <div class="nav_box_bb" v-for="(child2,index) in item.child">
            <div class="nav_box_bbh" v-if="index != 0">
              <h4><router-link :to="{ path: $options.filters.jiequ(child2.url)} ">{{child2.title}}</router-link></h4>
              <b @click="navControlbb($event)">></b>
            </div>
            <div class="nav_box_bbh" v-if="index === 0">
              <h4><router-link :to="{ path:'/gyzr'} ">{{child2.title}}</router-link></h4>
              <b @click="navControlbb($event)">></b>
            </div>
            <div class="nav_box_bbb"  v-for="child3 in child2.child">
              <!--三级导航-->
              <a v-bind:href="child3.id">{{child3.title}}</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'nav',
  data(){
    return{
      navdata:[],
      child:[],
    }
  },
  created(){
    this.nav()
  },
  mounted(){

  },
  filters: {
      jiequ: function (value) {
          if (!value) return ''
          value = value.substr(5,20)
          return value
      }
  },
  methods:{
      nav(){
        this.axios.get('http://www.people2000.net/mobile/index/menList').then((response) => {
          this.navdata = response.data.data
        })
      },
      navControlb(obj){
          var obj = obj.currentTarget; // 当前元素
          $(obj).parents('.nav_box_h').siblings('div').slideToggle()
          $(obj).parents('.nav_box').siblings().find('.nav_box_b').slideUp()
          $(obj).parents('.nav_box').siblings().find('.nav_box_h h4').removeClass('click')
          $(obj).parents('.nav_box').siblings().find('.nav_box_h b').removeClass('click')
          $(obj).siblings('h4').toggleClass('click')
          $(obj).toggleClass('click')
          $(obj).html('-')
          $(obj).parents('.nav_box').siblings().find('.nav_box_h b').html('+')
          var Index =$(obj).parents('.nav_box').index();
          setTimeout(function(){
              var display =$('.nav_box').eq(Index).find('.nav_box_b').css('display');
              if(display == "none"){
                  $('.nav_box').eq(Index).find('.nav_box_h').find('b').html('+')
              }else{
                  $('.nav_box').eq(Index).find('.nav_box_h').find('b').html('-')
              }
          },100)
      },
      navControlbb(obj){
          var obj = obj.currentTarget; // 当前元素
          $(obj).parents('.nav_box_bbh').siblings('div').slideToggle()
          $(obj).parents('.nav_box_bb').siblings().find('.nav_box_bbb').slideUp()
          $(obj).siblings('h4').toggleClass('click')
          $(obj).toggleClass('click')
          $(obj).parents('.nav_box_bb').siblings().find('.nav_box_bbh h4').removeClass('click')
          $(obj).parents('.nav_box_bb').siblings().find('.nav_box_bbh b').removeClass('click')
      },
      navControl(){
          $('.nav_box_bbb a:last-child').css({'border':'0'})
          $('.nav_box_bb:last-child').css({'border':'0'})
          $('.nav_box').eq(0).find('b').hide()

          var display =$('.nav_zk').css('display');
          if(display == 'none'){
             $('.nav_zk').stop().show()
          }else{
              $('.nav_zk').stop().hide()
          }
          $('.nav_box_h h4,.nav_box_bh a,.nav_box_bbh h4,.nav_box_bbb a').click(function(){
              $('.nav_zk').hide();
          })
      }
  }
}
</script>
