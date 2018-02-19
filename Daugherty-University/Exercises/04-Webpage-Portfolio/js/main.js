(function () {
    // Smooth Scrolling
    $('a.page-scroll').click(function() {
        var target = $(this.hash);
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 900);
        return false;
    });
}());