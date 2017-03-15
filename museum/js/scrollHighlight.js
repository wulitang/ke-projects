
(function($) {
	$.fn.scrollHighlight = function(options) {
		
		return this.each(function() {
			var defualts = {
				childItem: "a", //高亮的节点
				attribute: "href", //高亮节点属性
				highlight: 'highlight', //给高亮节点添加的类
				buffer: 0, //距离节点的距离
				cancelFlag: true, //当超过节点时是否取消高亮，默认是取消高亮
				container: window,
				mode: 'vertical' ,//滚动的模式，默认为竖直方向，可以为其他如horizontal(水平方向)
				
			};
			var opts = $.extend({}, defualts, options),
				obj = $(this),
				mode = opts.mode,
				buffer = opts.buffer,
				highlight = opts.highlight,
				childItem = opts.childItem,
				attribute = opts.attribute,
				$con = $(opts.container),
				$w = $(window);
		
			if (obj.length <= 0) return;
			var resizeTimer; // Set resizeTimer to empty so it resets on page load

			var item = obj.find(childItem),
				i = 0,
				len = item.length,
				wrap = [],
				index = [],
				anchor = [];
			for (; i < len; i++) {
				anchor.push(item.eq(i).attr(attribute)); //获取需要高亮的所有节点
			}

			var aLen = anchor.length;
			for (var j = 0; j < aLen; j++) {
				var that = $(anchor[j]);
				if (that.length && that.is(":visible")) { //筛选出容器内存在的节点并且是显示的
					wrap.push(anchor[j]); //将节点放置在数组wrap中
					index.push(j); //筛选出他们的位置
				}
			}
			var wLen = wrap.length;

			//滚动时的函数
			function onScroll(e) {
				
				var pos = [];
				var xy =  (mode == 'vertical') ? $w.scrollTop() + buffer : $w.scrollLeft() + buffer;
				
				function myOffset(attr){
					//获取元素上边(左边)偏移值
					return (mode == 'vertical') ? $(attr).offset().top : $(attr).offset().left;
				}
				function myOuter(attr){
					//获取元素外部高度(宽度)
					return (mode == 'vertical') ? $(attr).outerHeight() : $(attr).outerWidth();
				}
				function myPos(i) {
					//当是垂直(水平)滚动时，滚动高度(宽度)大于它的上边(左边)的偏移值，高亮。
					if (xy >= pos[i]) {
						item.removeClass(highlight).eq(index[i]).addClass(highlight);
						
					}
				}
				for (var i = 0; i < wLen; i++) {
					pos.push(myOffset(wrap[i])); //存储每个节点的偏移值
					myPos(i); //当是垂直(水平)滚动时，获取节点上边(左边)的偏移值，并和滚动高度(宽度)对比，当滚动高度(宽度)大于它的时候，高亮。
					if (opts.cancelFlag && (xy > pos[i] + myOuter(wrap[i]))) { //当滚动高度(宽度)超过它的位置加上它的高度(宽度)时，取消节点的高亮
						item.eq(index[i]).removeClass(highlight);
					}
					
				}
			}
			//点击跳转到相应的位置
			item.each(function(index) {
				$(this).click(function(e) {
					var that = $(anchor[index]),
					$con = opts.container == window ? $("html,body") : $(opts.container);
					if (that.length && that.is(":visible")) {
						
						if (mode == 'vertical') {
							$con.animate({
								scrollTop: that.offset().top - buffer + $con.scrollTop()
							}, 300);
						} else {
							$con.animate({
								scrollLeft: that.offset().left - buffer + $con.scrollLeft()
							}, 300);
						}
					}
					// return false;
				})
			})
			// 当有滚动时执行下面代码
			$con.on("scroll", function() {
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(onScroll, 100);
			});
			// 当发现调整屏幕大小时，重新执行代码
			$con.on("resize", function() {
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(onScroll, 100);
			});
		});
	};
})(jQuery);