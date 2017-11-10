<template>
    <div class="zlhz_content">
        <div class="zlhz_h">
            <h4 class="zlhz_h4">与众多合作伙伴</h4>
            <img src="static/images/zlhz_h.png">
            <p class="zlhz_p">共同保障客户的安全</p>
        </div>
        <div class="zlhz_c">
            <h4><img src="static/images/zlhz_ch.png"/></h4>
            <ul>
                <router-link to="/partner"><li>行业客户</li></router-link>
                <router-link to="/zlhz"><li class="click">战略合作</li></router-link>
            </ul>
        </div>
        <div class="zlhz_b">
            <h4 v-text="zlhz.dec"></h4>
            <p><img src="static/images/zlhz_01.png"/></p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'zlhz',
        data(){
            return{
                zlhz:[],//战略合作
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
            this.Gethzhb();
        },
        watch:{
            $route (to,from){
               this.Gethzhb()
            }
        },
        mounted () {

        },
        methods:{
            Gethzhb() {
                this.axios.get('http://www.people2000.net/mobile/index/hezuo?pid=11').then((response) => {
                    let data = response.data.data
                    this.zlhz = data
                })
            }
        }
    }
</script>