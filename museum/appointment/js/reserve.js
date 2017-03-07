// JavaScript Document
Zepto(function($){
	//选择菜单
	$(".more_top").click(function(){
			$(".reserve_nav").toggle();
		});
	//选择项目
	$(".reserve_list li").click(function(){
		var hs=$(this).find("h4").text();
		var sp=$(this).find("span").text();
	   $(this).addClass('reserve_pick')//变成空白
			   .siblings().removeClass();//实现后删除节点兄弟姐弟
		$(".reserve_total h4 b").text(hs);
		$(".reserve_total p span").text(sp);
	});	
	
});