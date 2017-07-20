// Banner Slide
var $item = $('.carousel .item');
// var $wHeight = $(window).height();
$wHeight = 150;
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
    });
    $(this).remove();
});

$(window).on('resize', function (){
    $wHeight = 150;
    $item.height($wHeight);
});

$('.carousel').carousel({
    interval: 6000,
    pause: "false"
});
// End banner slide


// MAIN SLIDER
var flag=0;
function lock(time) {
    flag = 1;
    setTimeout('flag = 0',time);
}
$(document).ready(function () {

    var MainSlide = (function() {
        var app = {
            initialize : function (){
                lock(5000);
                $('.tp-revslider-slidesli.active-revslide').slideDown(200);
                this.fullAnimate();
            },
            fullAnimate: function () {
                setTimeout(function () {
                    $('.active-revslide .team_fl_2>img').toggleClass('rotare_2');
                },800);
                setTimeout(function () {
                    $('.active-revslide .team_fl_2>img').toggleClass('rotare_2');
                },1600);
                $( ".active-revslide .player_1" ).hide();
                $( ".active-revslide .player_2" ).hide();
                $( ".active-revslide .rates" ).hide();
                $('.active-revslide .time').hide();
                $('.active-revslide .buttonSlider').hide();
                $( ".active-revslide .rates" ).animate({'left':"show"},2000);
                $( ".active-revslide .team_flags" ).hide().animate({'top':"show"},1600,function () {

                    $( ".active-revslide .player_1" ).toggle('slide',500,function () {
                        $( ".active-revslide .player_2" ).toggle('drop',{ direction: "right" },500,function () {
                            $( ".active-revslide .rates" ).hide().toggle('clip',500,function () {
                                $('.active-revslide .time').toggle('drop').effect('pulsate',500,function () {
                                    $('.active-revslide .buttonSlider').effect('explode').toggle('clip');
                                });
                            });
                        })
                    });
                });
                $('.active-revslide .team_fl_1>img').toggleClass('rotare_1');


            },
            hide: function () {
                $( ".active-revslide .rates" ).animate({'left':"hide"},1500);
                $( ".active-revslide .team_flags" ).animate({'top':"hide"},1500);
                $( ".active-revslide .player_1" ).toggle('slide',500);
                $( ".active-revslide .player_2" ).toggle('drop',{ direction: "right" },500);
                $('.active-revslide .time').toggle('drop',500);
                $('.active-revslide .buttonSlider').toggle('clip');
                $('.tp-revslider-slidesli').toggleClass('active-revslide');
                $('.tp-revslider-slidesli.active-revslide').slideUp(100);
                setTimeout(function () {
                    app.initialize();
                },2000)
            }
        };
        $('#change-slider').on('click',function () {
            if (flag == 0) {
                lock(5000);
                app.hide();
            } else {
                console.log(3);
            }
        });
        app.initialize();
    }());
});
//End  MAIN SLIDER




















