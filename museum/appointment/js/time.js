Zepto(function($){
    var _date = document.getElementById('date');
    var datePicker = new window.DatePicker({
        confirmCbk: function(data) {
            var dateweek = new Date(data.year, parseInt(data.month - 1), data.day);
            var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
            var weektime = "" + weeks[dateweek.getDay()];
            _date.value = data.year + '-' + data.month + '-' + data.day + weektime;
        }
    });
    _date.onfocus = function(e) {
        _date.blur();
        datePicker.open();
    };
    $(".choose-time li").click(function () {
        if($(this).hasClass('hold')){
            alert("该时间暂不接待");
        }else{
            $(this).addClass("active").siblings().removeClass("active");
        }
    });
    $(".go-next").click(function () {
        $(".pop-window").show();
    });
    $(".window-close").click(function(){
        $(".pop-window").hide();
    });
    $(".book-sure button").click(function(){
        $(".pop-window").hide();
    })
});
