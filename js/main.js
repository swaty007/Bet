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


// modal window register
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('a#login_modal').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '40%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
});
// end modal window register


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
                lock(4000);
                if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_1') {
                    $('#mainSliderWrapper').css('backgroundImage', 'url(./img/mainSlider/layer-1.jpg)');
                    this.fullAnimate_1();
                }else{
                    if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_2') {
                        $('#mainSliderWrapper').css('backgroundImage', 'url(./img/mainSlider/layer-2.png)');
                        this.fullAnimate_2();
                    }else {
                        if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_3') {
                            $('#mainSliderWrapper').css('backgroundImage', 'url(./img/mainSlider/layer-3.jpg)');
                            this.fullAnimate_3();
                        }else {
                            if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_4') {
                                $('#mainSliderWrapper').css('backgroundImage', 'url(./img/mainSlider/layer-4.png)');
                                this.fullAnimate_4();
                            }
                        }
                    }
                }

            },
            // fullAnimate_1: function () {
            //     setTimeout(function () {
            //         $('.active-revslide .team_fl_2>img').toggleClass('rotare_2');
            //     },400);
            //     setTimeout(function () {
            //         $('.active-revslide .team_fl_2>img').toggleClass('rotare_2');
            //     },1200);
            //
            //     $( ".active-revslide .player_1" ).hide();
            //     $( ".active-revslide .player_2" ).hide();
            //     $( ".active-revslide .rates" ).hide();
            //     $('.active-revslide .time').hide();
            //     $('.active-revslide .buttonSlider').hide();
            //     $( ".active-revslide .rates" ).animate({left:"show",opacity:1},100);
            //     $( ".active-revslide .team_flags" ).hide().animate({'top':"show",opacity:1},1000,function () {
            //
            //         $( ".active-revslide .player_1" ).toggle('drop',800,function () {
            //             $( ".active-revslide .player_2" ).toggle('drop',{ direction: "right" },800,function () {
            //                 $( ".active-revslide .rates" ).hide().toggle('clip',{direction: "horizontal"},600,function () {
            //                     $('.active-revslide .time').toggle('drop').effect('pulsate',500,function () {
            //                         $('.active-revslide .buttonSlider').effect('explode').toggle('clip');
            //                     });
            //                 });
            //             })
            //         });
            //     });
            //     $('.active-revslide .team_fl_1>img').toggleClass('rotare_1');
            //
            // },
            // hide_1: function () {
            //     $( ".active-revslide .rates" ).animate({'left':"hide",opacity:0},900);
            //     $( ".active-revslide .team_flags" ).animate({'top':"hide",opacity:0},900);
            //     $( ".active-revslide .player_1" ).hide('drop',500);
            //     $( ".active-revslide .player_2" ).hide('drop',{ direction: "right" },500);
            //     $('.active-revslide .time').hide('drop',500);
            //     $('.active-revslide .buttonSlider').hide('clip',{direction: "horizontal"},900); //fold
            //
            //     $('.active-revslide .team_fl_1>img').toggleClass('rotare_1');
            //     $('.active-revslide .team_fl_2>img').toggleClass('rotare_2');
            //     setTimeout(function () {
            //         $('.active-revslide .team_fl_2>img').toggleClass('rotare_2');
            //     },800)
            //
            //     setTimeout(function () {
            //         app.afterHide();
            //     },1000)
            // },
            fullAnimate_1: function () {
                $( ".active-revslide .img_slide1" ).hide();
                $( ".active-revslide .img_slide2" ).hide();
                $( ".active-revslide .img_slide3" ).hide();
                $( ".active-revslide .img_slide4" ).hide();
                $( ".active-revslide .img_slide5" ).hide();
                $( ".active-revslide .logo_slide" ).hide();

                $( ".active-revslide .img_slide3" ).show('clip',900).effect('pulsate',800,function () {
                    $( ".active-revslide .img_slide5" ).animate({left:'show'},700);
                    $( ".active-revslide .logo_slide" ).animate({right:'show'},700,function () {
                        $( ".active-revslide .img_slide2" ).show('clip',900);
                        $( ".active-revslide .img_slide1" ).show('drop',900,function () {
                            $( ".active-revslide .img_slide4" ).animate({right:'show'},1000)
                        })
                    })
                })


            },
            hide_1: function () {
                $( ".active-revslide .logo_slide" ).hide('clip',500);
                $( ".active-revslide .img_slide1" ).hide('clip',500);
                $( ".active-revslide .img_slide2" ).hide('drop',{direction:'right'},500);
                $( ".active-revslide .img_slide3" ).effect('explode').hide();
                $( ".active-revslide .img_slide4" ).animate({right:'hide'},700);
                $( ".active-revslide .img_slide5" ).animate({left:'hide'},700);
                setTimeout(function () {
                                app.afterHide();
                            },1000)
            },
            fullAnimate_2: function () {
                $( ".active-revslide .slide_img1" ).hide();
                $( ".active-revslide .slide_img2" ).hide();
                $( ".active-revslide .text" ).hide();
                $( ".active-revslide .img_text" ).hide();
                $( ".active-revslide .slide_img1").show('blind',{direction: "vertical"},800)
                    $( ".active-revslide .slide_img2").animate({top:'show'},1500,function () {
                        // $( ".active-revslide .slide_img1 .text").show('clip',2000,function () {
                        $( ".active-revslide .img_text").effect('pulsate').show('clip',function () {
                            $( ".active-revslide .slide_img2 .text").animate({right:'show'},600,function () {
                                $( ".active-revslide .slide_img1 .text").animate({left:'show'},900);
                            })
                        })
                    })

            },
            hide_2: function () {
                $( ".active-revslide .slide_img1").hide('blind',500);
                $( ".active-revslide .slide_img2").animate({top:'hide'},900);
                $( ".active-revslide .slide_img1 .text").hide('slide',500);
                $( ".active-revslide .slide_img2 .text").hide('drop',{ direction: "right" },500);
                $( ".active-revslide .img_text").hide('clip',500);

                setTimeout(function () {
                    app.afterHide();
                },1000)
            },
            fullAnimate_3: function () {
                $( ".active-revslide .slide_img1" ).hide();
                $( ".active-revslide .slide_img2" ).hide();
                $( ".active-revslide .i10" ).hide();
                $( ".active-revslide .dakikada" ).hide();
                $( ".active-revslide .para_cekme" ).hide();
                $( ".active-revslide .logo_slide" ).hide();
                $( ".active-revslide .slide_img3" ).hide();
                $( ".active-revslide .slide_img4" ).hide();

                        $( ".active-revslide .slide_img3" ).show('clip',500,function () {
                            $( ".active-revslide .i10" ).show('clip',500,function () {
                                $( ".active-revslide .dakikada" ).animate({right:'show'},700);
                                $( ".active-revslide .para_cekme" ).animate({left:'show'},700,function () {
                                    $( ".active-revslide .slide_img2" ).animate({left:'show'},500,function () {
                                        $( ".active-revslide .slide_img1" ).show('clip',{direction: "horizontal"},500,function () {
                                            $( ".active-revslide .slide_img4" ).show('drop',{ direction: "right" },500,function () {
                                                $( ".active-revslide .logo_slide" ).show('blind',500);
                                            })
                                        })
                                    })
                                })
                            })
                        })


            },
            hide_3: function () {
                $( ".active-revslide .slide_img1" ).hide('clip',{direction: "horizontal"});
                $( ".active-revslide .slide_img2" ).hide('drop',{ direction: "right" },500);
                $( ".active-revslide .i10" ).hide('clip',500);
                $( ".active-revslide .dakikada" ).animate({right:'hide'},700)
                $( ".active-revslide .para_cekme" ).animate({left:'hide'},700);
                $( ".active-revslide .logo_slide" ).hide('clip',500);
                $( ".active-revslide .slide_img3" ).animate({left:'hide'},500);
                $( ".active-revslide .slide_img4" ).hide('blind',500);

                setTimeout(function () {
                    app.afterHide();
                },1000)
            },
            fullAnimate_4: function () {
                $(".active-revslide .text_img").hide();
                $(".active-revslide .img_slide1").hide();
                $(".active-revslide .img_slide2").hide();
                $(".active-revslide .img_slide3").hide();
                $(".active-revslide .img_slide4").hide();
                $(".active-revslide .img_slide5").hide();
                $(".active-revslide .img_slide6").hide();
                $(".active-revslide .img_slide7").hide();
                $(".active-revslide .img_slide8").hide();
                $(".active-revslide .img_slide9").hide();
                $(".active-revslide .img_slide10").hide();
                $(".active-revslide .img_slide11").hide();





                $(".active-revslide .img_slide1").show('drop',{direction: "left"},400);
                $(".active-revslide .img_slide4").show('drop',{direction: "right"},400,function () {
                    $(".active-revslide .img_slide2").show('drop',400);
                    $(".active-revslide .img_slide5").show('drop',{ direction: "right" },400,function () {
                        $(".active-revslide .img_slide3").show('drop',{direction: "left"},400);
                        $(".active-revslide .img_slide6").show('drop',{direction: "right"},400,function () {
                            $(".active-revslide .img_slide7").show('drop',400);
                            $(".active-revslide .img_slide8").show('drop',{direction:'right'},400,function () {
                                $(".active-revslide .img_slide9").show('drop',400);
                                $(".active-revslide .img_slide11").show('drop',{direction:'right'},400,function () {
                                    $(".active-revslide .text_img").show('clip',{direction: "vertical"},1500);
                                    $(".active-revslide .img_slide10").animate({bottom:'show'},1500);
                                })
                            })
                        })
                    })
                })





                // $(".active-revslide .text_img").show('clip',{direction: "horizontal"},1500).effect('pulsate');
                // $(".active-revslide .img_slide1").show('blind',{direction: "vertical"},600);
                // $(".active-revslide .img_slide4").show('blind',{direction: "vertical"},600,function () {
                //     $(".active-revslide .img_slide2").show('drop',600);
                //     $(".active-revslide .img_slide5").show('drop',{ direction: "right" },600,function () {
                //         $(".active-revslide .img_slide3").show('clip',{direction: "horizontal"},600);
                //         $(".active-revslide .img_slide6").show('clip',{direction: "horizontal"},600,function () {
                //             $(".active-revslide .img_slide7").show('blind',600);
                //             $(".active-revslide .img_slide8").show('blind',600,function () {
                //                 $(".active-revslide .img_slide9").show('clip',600);
                //                 $(".active-revslide .img_slide11").show('clip',600);
                //                 $(".active-revslide .img_slide10").animate({bottom:'show'},1000);
                //             })
                //         })
                //     })
                // })

                // $(".active-revslide .text_img").show('clip',{direction: "horizontal"},15000).effect('pulsate');
                // $(".active-revslide .img_slide1").show('blind',{direction: "vertical"},20000);
                // $(".active-revslide .img_slide4").show('blind',{direction: "vertical"},20000);
                // $(".active-revslide .img_slide2").show('drop',20000);
                // $(".active-revslide .img_slide5").show('drop',{ direction: "right" },20000);
                // $(".active-revslide .img_slide3").show('clip',{direction: "horizontal"},20000);
                // $(".active-revslide .img_slide6").show('clip',{direction: "horizontal"},20000);
                // $(".active-revslide .img_slide7").show('blind',20000);
                //              $(".active-revslide .img_slide8").show('blind',20000);
                // $(".active-revslide .img_slide9").show('clip',20000);
                //                 $(".active-revslide .img_slide11").show('clip',20000);
                //                 $(".active-revslide .img_slide10").animate({bottom:'show'},10000);

            },
            hide_4: function () {
                $(".active-revslide .text_img").hide('clip',{direction: "horizontal"},1500);
                $(".active-revslide .img_slide1").hide('drop',600);
                $(".active-revslide .img_slide2").hide('drop',600);
                $(".active-revslide .img_slide3").hide('drop',600);
                $(".active-revslide .img_slide4").hide('drop',{ direction: "right" },600);
                $(".active-revslide .img_slide5").hide('drop',600);
                $(".active-revslide .img_slide6").hide('drop',{direction: "right"},600);
                $(".active-revslide .img_slide7").hide('drop',600);
                $(".active-revslide .img_slide8").hide('drop',{direction:'right'},600);
                $(".active-revslide .img_slide9").hide('drop',600);
                $(".active-revslide .img_slide10").animate({bottom:'hide'},1000);
                $(".active-revslide .img_slide11").hide('drop',{direction:'right'},600);

                setTimeout(function () {
                    app.afterHide();
                },1000)
            },
            afterHide: function () {
                if ($('#change-slider').hasClass('button_right')) {

                    if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_1') {
                        $('.tp-revslider-slidesli').removeClass('active-revslide');
                        $('#slider_2').addClass('active-revslide');
                        // $('.tp-revslider-slidesli.active-revslide').slideDown(200);
                        app.initialize();
                    }else{
                        if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_2') {
                            $('.tp-revslider-slidesli').removeClass('active-revslide');
                            $('#slider_3').addClass('active-revslide');
                            app.initialize();
                        }else {if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_3') {
                            $('.tp-revslider-slidesli').removeClass('active-revslide');
                            $('#slider_4').addClass('active-revslide');
                            app.initialize();
                        }else {if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_4') {
                            $('.tp-revslider-slidesli').removeClass('active-revslide');
                            $('#slider_1').addClass('active-revslide');
                            app.initialize();
                        }}}}



                }else{

                    if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_1') {
                        $('.tp-revslider-slidesli').removeClass('active-revslide');
                        $('#slider_4').addClass('active-revslide');
                        // $('.tp-revslider-slidesli.active-revslide').slideDown(200);
                        app.initialize();
                    }else{
                        if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_2') {
                            $('.tp-revslider-slidesli').removeClass('active-revslide');
                            $('#slider_1').addClass('active-revslide');
                            app.initialize();
                        }else {if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_3') {
                            $('.tp-revslider-slidesli').removeClass('active-revslide');
                            $('#slider_2').addClass('active-revslide');
                            app.initialize();
                        }else {if ($('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_4') {
                            $('.tp-revslider-slidesli').removeClass('active-revslide');
                            $('#slider_3').addClass('active-revslide');
                            app.initialize();
                        }}}}

                }

            },
            autoslide: function () {
                $('#change-slider').removeClass('button_right');
                $('#change-slider').addClass('button_left');
                if (flag == 0) {
                    lock(4000);
                    if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_1') {
                        app.hide_1();
                    }
                    if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_2') {
                        app.hide_2();
                    }
                    if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_3') {
                        app.hide_3();
                    }
                    if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_4') {
                        app.hide_4();
                    }
                } else {
                    console.log(3);
                }

                setTimeout(function () {
                    app.autoslide();
                },8000)
            }
        }; //end app



        $('#change-slider .button2').on('click',function () {
            $('#change-slider').removeClass('button_left');
            $('#change-slider').addClass('button_right');
            if (flag == 0) {
                lock(4000);
                if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_1') {
                    app.hide_1();
                    return;
                }
                if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_2') {
                    app.hide_2();
                    return;
                }
                if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_3') {
                    app.hide_3();
                    return;
                }
                if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_4') {
                    app.hide_4();
                    return;
                }
            } else {
                console.log(3);
            }
        });
        $('#change-slider .button1').on('click',function () {
            $('#change-slider').removeClass('button_right');
            $('#change-slider').addClass('button_left');
            if (flag == 0) {
                lock(4000);
                if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_1') {
                    app.hide_1();
                    return;
                }
                if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_2') {
                    app.hide_2();
                    return;
                }
                if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_3') {
                    app.hide_3();
                    return;
                }
                if ( $('.tp-revslider-slidesli.active-revslide').attr('id') == 'slider_4') {
                    app.hide_4();
                    return;
                }
            } else {
                console.log(3);
            }
        });




        app.initialize();
        setTimeout(function () {
            app.autoslide();
        },5000)
    }());
});
//End  MAIN SLIDER




















