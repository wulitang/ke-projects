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
    //购物车数量加减
    $(".add").click(function(){
        var num=$(this).siblings("span").text();
        $(this).siblings("span").text(++num);
    });
    $(".reduce").click(function(){
        var num=$(this).siblings("span").text();
        if(num>1){
            $(this).siblings("span").text(--num);
        }
        else if(num==1){
            $(this).parents("li").remove();
        }
    });
});

