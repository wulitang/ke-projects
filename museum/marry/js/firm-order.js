//确认订单js
$(function(){
    //查看清单
    $(".more-list").click(function(){
        $(".merchbill").toggleClass("more-bill");
        if($(".merchbill").height()>186){
            $(this).text("收起更多清单");
        }
       else{
            $(this).text("查看更多清单");
        }
    });
    //支付选择
    $(".pay-wrap li").click(function(){
        $(this).find(".check").toggleClass("checked");
        $(this).siblings("li").find(".check").removeClass("checked");
    });
    //支付弹窗页面
    $(".cart_bottom").click(function(){
        if($(".pay-wrap").find("li").eq(0).find(".check").hasClass("checked")){
            window.location.href="";
        }
        else if($(".pay-wrap").find("li").eq(1).find(".check").hasClass("checked")){
            $(".pop-window").show();
        }
        else if($(".pay-wrap").find("li").eq(3).find(".check").hasClass("checked")){
            $(".pop-window").show();
            $(".window-wrap h3 span").text("银行卡号");
            $(".window-wrap img").remove();
            $(".window-wrap h3").after("<p>6222XXXXXXXXXX00000</p>");
        }
        else {
            $(".pop-window").show();
            $(".window-wrap h3 span").remove();
            $(".window-wrap h3").css("border-bottom","none");
            $(".window-wrap img").remove();
            $(".window-wrap h3").after("<p>已收到订单，请尽快前往门店支付！</p>");
        }
    });
    $(".window-close").click(function(){
        window.location.href="";
    })
});