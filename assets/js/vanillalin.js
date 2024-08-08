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
$('#backTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 400);
    return false;
});

AOS.init({
    easing: 'ease-in-out-sine',
    duration: 700,
    delay: 100
});
