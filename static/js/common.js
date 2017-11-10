// JavaScript Document
setInterval(function (){
    Imgatuo(); //模块高度和图片自适应
    Rczp();  //人才招聘
    Hykh(); //合作伙伴
    jggd()  //产品中心&领导关怀&解决方案&服务中心&公司视频&关于众人&生活在众人&精彩活动
},10)

//模块高度和图片自适应
function Imgatuo(){
//产品中心
    var Wid = $('.sy_cpzx_b ul li span').width()
    $('.sy_cpzx_b ul li span').height(Wid*0.85)
    $('.sy_cpzx_b ul li').height(Wid*0.85)
//领导关怀
    var Wid2 = $('.sy_ldgh_b ul li span').width()
    $('.sy_ldgh_b ul li span').height(Wid2)
//解决方案
    var Wid3 = $('.sy_jjfa_b ul li span').width()
    $('.sy_jjfa_b ul li span').height(Wid3)
//薪资福利
    var Wid4 = $('.ny_xzfl_b ul li span').width()
    $('.ny_xzfl_b ul li span').height(Wid4)
//研究中心
    var Wid5 = $('.yjzx_lb ul li span').width()
    $('.yjzx_lb ul li span').height(Wid5)
//关于众人
    var Wid5 = $('.gyzr_gshq_c dl dd').width()
    $('.gyzr_gshq_c dl dd').height(Wid5*0.72)
//生活在众人
    var Wid5 = $('.shzzr_bb dl dd span').width()
    $('.shzzr_bb dl dd span').height(Wid5*0.65)
//精彩活动
    var Wid5 = $('.jchd_hb').width()
    $('.jchd_hb').height(Wid5*0.458)
//资质证书
    var Wid6 = $('.zzry_box span').width()
    $('.zzry_box span').height(Wid6*0.64)
    $('.zzry_box span').css({'padding':'8px 0'})
//精彩活动
    var Wid7 = $('.jchd_bb_content .swiper-slide span ').width()
    $('.jchd_bb_content .swiper-slide span').height(Wid7*0.68)
//视频
    var Wid8 = $('.gssp_sp').width()
    $('.gssp_sp').height(Wid8*0.617)


}

//产品中心&领导关怀&解决方案&服务中心&公司视频&关于众人&生活在众人&精彩活动
function jggd(){
    $('.sy_cpzx_b ul li span').imagefit({})
    $('.sy_ldgh_b ul li span').imagefit({})
    $('.sy_jjfa_b ul li span').imagefit({})
    $('.ny_xzfl_b ul li span').imagefit({})
    $('.yjzx_lb ul li span').imagefit({})
    $('.fwzx_pxfw_br span').imagefit({})
    $('.gssp_slt span').imagefit({})
    $('.gyzr_gshq_c dl dd').imagefit({})
    $('.shzzr_bb dl dd span').imagefit({})
    $('.jchd_hb').imagefit({})
    $('.jchd_bb_content .swiper-slide span').imagefit({})
}

//人才招聘
function Rczp(){
    var rczpW = $('.rczp_bh_lb ul li').width()
    var rczpS = $('.rczp_bh_lb ul li').length
    var rczpB = rczpW*0.6
    $('.rczp_bh_lb ul li').css('marginRight',rczpB)
    $('.rczp_bh_lb ul').width(rczpW*rczpS+(rczpW*0.6*rczpS))
    $('.rczp_bh_lb ul li').click(function(){
        $(this).addClass('click').siblings('li').removeClass('click');
    })
}

//行业客户
function Hykh(){
    var sum = 0;
    $('.zlhz_b_lb ul li').each(function() {
        var zlhzW = $(this).width()
        sum += zlhzW;
    });
    var zlhzS = $('.zlhz_b_lb ul li').parents('.zlhz_b_lb').find('li').length
    $('.zlhz_b_lb ul li').css('marginRight',15 + 'px')
    $('.zlhz_b_lb ul').width(sum+(zlhzS*15))

    $('.zlhz_b_lb ul li').click(function(){
        $(this).addClass('click').siblings('li').removeClass('click');
    })
}

//文章页
$.event.add(window, "scroll", function() {
    $(function () {
        var ScrolTop = $(window).scrollTop();
        if(ScrolTop>140){
            $('.totop').fadeIn();
        }else{
            $('.totop').fadeOut();
        }
    });
})
