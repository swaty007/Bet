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

var MainSlide = (function() {
    var app = {
        initialize : function (){
            // this.slideToggle();
            // this.clip1();
            // this.pulsate();
            // this.toggleblind();
            $('.tp-revslider-slidesli.active-revslide').slideDown();
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
            $( ".active-revslide .team_flags" ).hide().animate({'top':"show"},1600,function () {

                $( ".active-revslide .player_1" ).toggle('slide',500,function () {
                    $( ".active-revslide .player_2" ).toggle('drop',{ direction: "right" },500,function () {
                        $( ".active-revslide .rates" ).toggle('clip',500,function () {
                            $('.active-revslide .time').toggle('drop').effect('pulsate',500,function () {
                                $('.active-revslide .buttonSlider').effect('explode').toggle('clip');
                            });
                        });
                    })
                });
            });
            $('.active-revslide .team_fl_1>img').toggleClass('rotare_1');


        },
        slideToggle: function () {
            $( ".player_1" ).toggle('slide');
            $( ".player_2" ).toggle('slide',{ direction: "right" },3000);
        },
        clip1: function () {
            $( ".team_flags" ).hide();
            // $( ".team_flags" ).toggle('clip');
            $( ".team_flags" ).animate({'top':"show"},2000);
            // $( ".team_flags" ).animate({'top':"show"},{2000});
            $('.team_fl_1>img').addClass('rotare_1');
            $('.team_fl_2>img').addClass('rotare_1');
            // $( ".team_flags" ).hide();
            // $( ".team_flags" ).toggle('clip');

        },
        pulsate: function () {
            $( ".time" ).effect('pulsate',{times:5},500);//,3000
        },
        toggleblind: function () {
            // $(".rates").toggle( "blind" );
            $( ".rates" ).animate({'left':"show"},2000);
        }
    }

    $('#change-slider').on('click',function () {
        if ($('.tp-revslider-slidesli').hasClass('active-revslide')) {
            $('.tp-revslider-slidesli').slideUp(200);
            $('.tp-revslider-slidesli').toggleClass('active-revslide');

        } else {
            ;
            console.log(3);
        };

        setTimeout(function () {
            app.initialize();
        },2000)
    });
    app.initialize();
}());



















