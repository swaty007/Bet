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
                // $('.tp-revslider-slidesli').slideUp();
                if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_1') {
                    // $('.tp-revslider-slidesli.active-revslide').slideDown(200);
                    this.fullAnimate_1();
                }else{
                    if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_2') {
                        this.fullAnimate_1();
                    }else {console.log(50);}
                }

            },
            fullAnimate_1: function () {
                setTimeout(function () {
                    $('.active-revslide .team_fl_2>img').toggleClass('rotare_2');
                },400);
                setTimeout(function () {
                    $('.active-revslide .team_fl_2>img').toggleClass('rotare_2');
                },1200);

                $( ".active-revslide .player_1" ).hide();
                $( ".active-revslide .player_2" ).hide();
                $( ".active-revslide .rates" ).hide();
                $('.active-revslide .time').hide();
                $('.active-revslide .buttonSlider').hide();
                $( ".active-revslide .rates" ).animate({left:"show",opacity:1},2500);
                $( ".active-revslide .team_flags" ).hide().animate({'top':"show",opacity:1},1600,function () {

                    $( ".active-revslide .player_1" ).toggle('slide',800,function () {
                        $( ".active-revslide .player_2" ).toggle('drop',{ direction: "right" },800,function () {
                            $( ".active-revslide .rates" ).hide().toggle('clip',{direction: "horizontal"},600,function () {
                                $('.active-revslide .time').toggle('drop').effect('pulsate',500,function () {
                                    $('.active-revslide .buttonSlider').effect('explode').toggle('clip');
                                });
                            });
                        })
                    });
                });
                $('.active-revslide .team_fl_1>img').toggleClass('rotare_1');

            },
            hide_1: function () {
                $( ".active-revslide .rates" ).animate({'left':"hide",opacity:0},1500);
                $( ".active-revslide .team_flags" ).animate({'top':"hide",opacity:0},1500);
                $( ".active-revslide .player_1" ).hide('slide',500);
                $( ".active-revslide .player_2" ).hide('drop',{ direction: "right" },500);
                $('.active-revslide .time').hide('drop',500);
                $('.active-revslide .buttonSlider').hide('clip',{direction: "horizontal"},2000); //fold

                $('.active-revslide .team_fl_1>img').toggleClass('rotare_1');
                $('.active-revslide .team_fl_2>img').toggleClass('rotare_2');
                setTimeout(function () {
                    $('.active-revslide .team_fl_2>img').toggleClass('rotare_2');
                },800)

                setTimeout(function () {
                    app.afterHide();
                },2000)
            },
            fullAnimate_2: function () {
                console.log(12);
            },
            hide_2: function () {

            },
            afterHide: function () {
                if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_1') {
                    $('.tp-revslider-slidesli').removeClass('active-revslide');
                    $('#slider_2').addClass('active-revslide');
                    // $('.tp-revslider-slidesli.active-revslide').slideDown(200);
                    app.initialize();
                }else{
                    if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_2') {
                        $('.tp-revslider-slidesli').removeClass('active-revslide');
                        $('#slider_1').addClass('active-revslide');
                        app.initialize();
                    }else {console.log(50);}
                }
            }
        }; //end app



        $('#change-slider').on('click',function () {
            if (flag == 0) {
                lock(5000);
                if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_1') {
                    app.hide_1();
                }
                if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_2') {
                    app.hide_1();
                }
            } else {
                console.log(3);
            }
        });
        app.initialize();
    }());
});
//End  MAIN SLIDER




















