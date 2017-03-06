//订单详情
$(function(){
    //打开
    $(".receipt").click(function(){
		$("#details-layer").show();	
	});
	//关闭
	$(".details-layer h4 span").click(function(){
		$("#details-layer").hide();
	});
	//确定
	$(".details-fulfil").click(function(){
		var val=$(".details-layer input").val();
		if(val.length != 0){
			$(".details-number p b").text(val);
		}else{
			$(".details-number p b").text("（空）");
			}
	   $("#details-layer").hide();
	});
	
	
});

