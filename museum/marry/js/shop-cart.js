//购物车js
$(function(){
    //商品单项选择
    $(".check").click(function(){
        $(this).toggleClass("checked");
    });
    //全选
    $(".all-check").click(function(){
        $(".shop-list .check").each(function(){
            if($(".all-check .check").hasClass("checked")){
                $(this).addClass("checked");
            }
            else{
                $(this).removeClass("checked");
            }
        });
    });
});

