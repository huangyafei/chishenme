$i = 0;
$('#start').click(function () {
    $i++;
    if ($i >= 6) {
        $('#start').hide();
        $('#stop').show();
    }
})
$('#stop').click(function () {
    alert('这么作？今天别吃了！')
    $(this).hide();
})
$(function () {
    let now = new Date(), hour = now.getHours();
    let title = $("#title");
    if (hour < 6) {
        title.html("三更半夜的吃啥吃？")
    } else if (hour < 9) {
        title.html("早餐吃什么？")
    } else if (hour < 14) {
        title.html("中午吃什么？")
    } else if (hour < 19) {
        title.html("晚上吃什么？")
    } else if (hour < 24) {
        title.html("夜宵吃什么？")
    }
})