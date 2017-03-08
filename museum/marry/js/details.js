//详情页js
Zepto(function($){
    //购物数量加减
    $(".add").click(function () {
        var i = $(this).parent().find("span").html()||0;
        i++;
        $(this).siblings().css("display","inline-block");
        $(this).parent("div").find("span").html(i);
    });
    $(".reduce").click(function () {
        var pic =$(this).parent().find("span").html();
        pic--;
        $(this).parent().find("span").html(pic);
        if(pic<1){
            $(this).parent("div").find("span").hide();
            $(this).hide();
        }
    });
});
