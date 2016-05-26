this js deprecated, use «Intersection Observer API»

# jquery.onscreen

jquery onscreen filter

### example usage 

```
function appear() {
    $el.filter(':notonscreen').removeClass('animated'); 
    $el.filter(':onscreen').addClass('animated');
    var time = setTimeout(appear,250);
};
var $el = $('.class');
var time = appear(appear,250);

```
