    $(function () {
    var run = 0,
        heading = $("h1"),
        timer;

    $("#start").click(function () {
        var list = $("#list").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
        if (!run) {
            heading.html(heading.html().replace("吃这个！", "吃什么？"));
            $(this).val("停止");
            timer = setInterval(function () {
                var r = Math.ceil(Math.random() * list.length),
                    food = list[r - 1];
                $("#what").html(food);
                var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (37 - 14) + 14);
                $("<span class='temp'></span>").html(food).hide().css({
                    "top": rTop,
                    "left": rLeft,
                    "color": "rgba(0,0,0,." + Math.random() + ")",
                    "fontSize": rSize + "px"
                }).appendTo("body").fadeIn("slow", function () {
                    $(this).fadeOut("slow", function () {
                        $(this).remove();
                    });
                });
            }, 50);
            run = 1;
        } else {
           heading.html(heading.html().replace("吃什么？", "吃这个！"));
            $(this).val("不行，换一个");
            clearInterval(timer);
            run = 0;
        };
    });

    document.onkeydown = function enter(e) {
        var e = e || event;
        if (e.keyCode == 13) $("#start").trigger("click");
    };
});