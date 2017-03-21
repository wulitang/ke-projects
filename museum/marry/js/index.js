Zepto(function($){
    $(".index-menu").click(function () {
        $(".index-menu-list").toggleClass("show");
        $(".index-min").toggleClass("show-left")
    });
    $(".index-menu-list li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".index-menu-list").toggleClass("show");
        $(".index-min").toggleClass("show-left")
    });
    $(".add").click(function () {
        var i = $(this).parent().find("span").html()||0;
        i++;
        $(this).siblings().show();
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
