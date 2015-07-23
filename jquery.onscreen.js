;(function($) {
    var win = $(window);
    function check(el) {
        el = $(el);
        if (!el.is(':visible')) {
            return false;
        }
        var viewport = {
                top : win.scrollTop(),//  + 15,
                left : win.scrollLeft()
            };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        var bounds = el.offset();
        bounds.right = bounds.left + el.outerWidth();
        bounds.bottom = bounds.top + el.outerHeight();// - 15;
        if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)) {
            return true;
        } else {
            return false;
        }
    }
    $.expr[':']['onscreen'] = function(el) {
        return check($(el));
    }
    $.expr[':']['notonscreen'] = function(el) {
        return !check($(el));
    }
})(jQuery);
