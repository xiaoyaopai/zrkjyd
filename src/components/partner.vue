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
                <router-link to="/partner"><li class="click">行业客户</li></router-link>
                <router-link to="/zlhz"><li>战略合作</li></router-link>
            </ul>
        </div>
        <div class="zlhz_b">
            <div class="zlhz_b_lb">
                <ul>
                    <li v-for="(item,index) in hzhblb" @click="GethzhbList()" class="click" v-if="index === 0">
                        <router-link :to="{ path: 'partner', query: { pid: item.id }} ">{{ item.name}}</router-link>
                    </li>
                    <li v-for="(item,index) in hzhblb" @click="GethzhbList()" v-if="index > 0">
                        <router-link :to="{ path: 'partner', query: { pid: item.id }} ">{{ item.name}}</router-link>
                    </li>
                </ul>
            </div>

            <div class="zlhz_box">
                <ul>
                    <li>
                        <dl>
                            <dd v-for="item in partner"><img v-bind:src="item.image"></dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';
    export default {
        name:'partner',
        data(){
            return{
                hzhblb:[],//合作伙伴列表
                partner:[],//合作伙伴
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
            this.GethzhbList();
            this.GethzhbList1()
        },
        mounted () {

        },
        watch: {
            $route () {
                this.Gethzhb();
                this.GethzhbList();
                this.GethzhbList1()
            }
        },
        methods:{
            Gethzhb() {
                this.axios.get('http://www.people2000.net/mobile/index/hezuoList').then((response) => {
                    let data = response.data.data
                    this.hzhblb = data
                })
            },
            GethzhbList1() {
                this.axios.get('http://www.people2000.net/mobile/index/hezuo?pid=2').then((response) => {
                    let data = response.data.data
                    this.partner = data
                })
            },
            GethzhbList() {
                var uid =  this.$route.query.pid
                this.axios.get('http://www.people2000.net/mobile/index/hezuo?pid='+uid).then((response) => {
                    let data = response.data.data
                    this.partner = data
                })
            },
        }
    }
</script>