// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backTop").style.display = "block";
    } else {
        document.getElementById("backTop").style.display = "none";
    }
}
/*回到顶部*/
/* $('#backTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 400);
    return false;
}); */
/*回到顶部*/
/* $('#backTop').click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}); */
// 点击按钮，返回顶部
/* function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} */

// 初始化加载 tooltipped.
$('.tooltipped').tooltip();