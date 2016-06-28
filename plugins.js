
(function($) {
    $.fn.hello = function(action) {
        var setting = $.extend({
            fadeOut: "slow",
            delay:"3000",
            fadeIn:"slow"
        }, action);
        this.each(function() {
            var element = $(this);
            element.click(function() {
                element.fadeOut(setting.fadeOut);
                element.fadeOut(setting.delay);
                element.fadeIn(setting.fadeIn);    
            });
        });
    }
})(jQuery)