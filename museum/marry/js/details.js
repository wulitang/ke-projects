//详情页js
Zepto(function($){
    //购物数量加减
    var num=$(".mui_number span").text();
    $(".add").click(function(){
        $(".mui_number span").text(++num);
    });
    $(".reduce").click(function(){
        if(num>1){
            $(".mui_number span").text(--num);
        }
    });
});
