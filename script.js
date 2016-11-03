$(document).ready(function() {

    for (var i = 0; i < 31; i++) {


        $('body').append('<div class="redBox"></div>');
        $('body').append('<div class="blackBox"></div>');

    }
    $('body').append('<div class="redBox"></div>');
    $('div').css('width', '11.1%').css('paddingBottom', '11.1%').css('float', 'left')
    $('.redBox').css('background-color', 'red');
    $('.blackBox').css('background-color', 'black');


});
// ('background-color', 'red').css
