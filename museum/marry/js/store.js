// JavaScript Document
Zepto(function($){
	$(".nice-select .current").click(function(){
		$(".nice-select .list").toggle();	
	});
	$(".nice-select .list li").click(function(){
		var id=$(this).attr("data-value");
		var tetx=$(this).text();
	   $(".current").attr("data-id",id);
	   $(".current").text(tetx);
	   $(".nice-select .list").hide();
	});
});