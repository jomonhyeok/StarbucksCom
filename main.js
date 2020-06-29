$(document).ready(function () { 
    var mySwiper = new Swiper ('.swiper-container', { 
        loop: true,
          speed : 1000,
          pagination : { // 페이징 설정
			el : '.swiper-pagination',
			clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    })//슬라이더

    $('header nav ul li a').click(function(){
        var index = $(this).parent().index();
        $.fn.fullpage.moveTo(index+1);
        $('header nav ul li a').removeClass('active');
        $(this).toggleClass('active');
    })//header nav active

    $('header nav label').click(function(){
        $('header nav ul').toggleClass('active');
        $('header nav ul li').toggleClass('active');
    })
    $('header nav ul li').click(function(){
        $('header nav ul').removeClass('active');
        $('header nav ul li').removeClass('active');
    })
    $('header nav label').click(function(){
        $('header nav label').toggleClass('active');
    })

    $('div.container').click(function(){
        $('div.container').toggleClass('active');
        $('div.reserve div.container div.middle').toggleClass('active');
        $('div.reserve div.container div.left').toggleClass('active');
        $('div.reserve div.container div.right').toggleClass('active');
    })//reserve animation

    $('div.footer div.wrap div.footer_Top div.footer_left > ul li').click(function(){
        if($('div.footer div.wrap div.footer_Top div.footer_left ul li span').eq($(this).index()).hasClass('active')){
            $('div.footer div.wrap div.footer_Top div.footer_left ul li span').removeClass('active');
        }else{
            $('div.footer div.wrap div.footer_Top div.footer_left ul li span').removeClass('active');
            $('div.footer div.wrap div.footer_Top div.footer_left ul li span').eq($(this).index()).toggleClass('active');
        }//footer의 빨간원

        if($('div.footer div.wrap div.footer_Top div.footer_left ol > li').eq($(this).index()).hasClass('active')){
            $('div.footer div.wrap div.footer_Top div.footer_left ol > li').removeClass('active');
        }else{
            $('div.footer div.wrap div.footer_Top div.footer_left ol > li').removeClass('active');
            $('div.footer div.wrap div.footer_Top div.footer_left ol > li').eq($(this).index()).toggleClass('active');
        }//footer menu
    });

    $('div.footer i').click(function(){
        $.fn.fullpage.moveTo(1);
    });//footer에서 header로 가기

    $('div.menu ul li').click(function(){
        $('div.menu ol li').removeClass();
        $('div.menu ol li').addClass('active'+($(this).index() + 1));
    }); //셔플
    if($(window).width()<1279){
        $('div.menu ul li').click(function(){
            if( $('div.menu ol li').hasClass('active')){
                $('div.menu ol li').removeClass('active');
            }else{
                $('div.menu ol li').removeClass();
                $('div.menu ol li').addClass('active');
            }
        });
    }
    $('div.menu ul li').click(function(){
        $('div.menu ul li').removeClass('active');
        $('div.menu ol li').removeClass('active');
        $(this).addClass('active');//밑에 텍스트 부분 밝게하기
        $('div.menu ol li').eq($(this).index()).addClass('active'); //어둡게 하기
    })
    //menu

    if($(window).width()<767){
        $('#full-page').fullpage({
            navigation: false,
            onLeave: function(origin, destination){
                if(origin.index== 1 && destination.index==0){ //스크롤 올릴때 제거
                    $('header nav label span').removeClass('silde2'); //black제거 
                }
            },
            afterLoad: function(origin, destination, direction, index){
                if(destination.index == 1){
                    $('header nav label span').addClass('silde2'); //두번째 제외 검은색
                }
                if(destination.index>1){//내려갈때 제거
                    $('header nav label span').removeClass('silde2'); //black 제거
                }

                if(destination.index == 3){
                    $('div.menu ul').addClass('active');
                }else{
                    $('div.menu ul').removeClass('active');
                }//아래서 올라오기

                if(destination.index == 1){
                    $('div.value div.wrap div.left').addClass('active');
                }else{
                    $('div.value div.wrap div.left').removeClass('active');
                }//아래서 올라오기

                if(destination.index == destinationNum){
                    $('header nav ul li a').removeClass('active');
                    $('header nav ul li').eq(destinationNum).find('a').addClass('active');
                }else{
                    $('header nav ul li a').removeClass('active');
                }
                fullpage_api.fitToSection();
            }
        })
    }
    $('#full-page').fullpage({
        navigation: true,
        navigationTooltips:['Home','Value', 'Story', 'Menu', 'Reserve'],
        scrollingSpeed: 500,
        onLeave: function(origin, destination, direction, index){
            if(origin.index== 1 && destination.index==0){ //스크롤 올릴때 제거
                $('header nav ul li a').removeClass('silde2'); //black제거 
            }
        },
        afterLoad: function(origin, destination, direction, index){
            if(destination.index == 1){
                $('header nav ul li:not(:nth-of-type(2)) a').addClass('silde2'); //두번째 제외 검은색
                $('#fp-nav ul li span:last-of-type').addClass('active'); //navigation 색깔
                $('#fp-nav ul li .fp-tooltip.fp-right').addClass('active'); //navigation 글씨
            }
            if(destination.index>1){//내려갈때 제거
                $('header nav ul li a').removeClass('silde2'); //black 제거
            }
            if(destination.index == 0){
                $('#fp-nav ul li').addClass('active'); //margin값 감소
            }
            if(destination.index == 3){
                $('div.menu ul').addClass('active');
            }else{
                $('div.menu ul').removeClass('active');
            }
            if(destination.index == 1){
                $('div.value div.wrap div.left').addClass('active');
            }else{
                $('div.value div.wrap div.left').removeClass('active');
            }

            var destinationNum = destination.index;
            if(destination.index == destinationNum){
                $('header nav ul li a').removeClass('active');
                $('header nav ul li').eq(destinationNum).find('a').addClass('active');
            }else{
                $('header nav ul li a').removeClass('active');
            }

            // if(destination.index == 0){
            //     $('header nav ul li a').removeClass('active');
            //     $('header nav ul li:nth-of-type(1) a').addClass('active');
            // }else if(destination.index == 1){
            //     $('header nav ul li a').removeClass('active');
            //     $('header nav ul li:nth-of-type(2) a').addClass('active');
            // }else if(destination.index == 2){
            //     $('header nav ul li a').removeClass('active');
            //     $('header nav ul li:nth-of-type(3) a').addClass('active');
            // }else if(destination.index == 3){
            //     $('header nav ul li a').removeClass('active');
            //     $('header nav ul li:nth-of-type(4) a').addClass('active');
            // }else if(destination.index == 4){
            //     $('header nav ul li a').removeClass('active');
            //     $('header nav ul li:nth-of-type(5) a').addClass('active');
            // }else{
            //     $('header nav ul li a').removeClass('active');
            // } //줄이기
        },
    });

    $('.swiper-button-prev').mouseover(function(){
        $('.swiper-button-prev > div').addClass('active');
    });
    $('.swiper-button-prev').mouseleave(function(){
        $('.swiper-button-prev > div').removeClass('active');
    });
    $('.swiper-button-prev').mousemove(function(e){
        var x = e.offsetX;
        var y = e.offsetY;
        $('.swiper-button-prev > div').css('left',x);
        $('.swiper-button-prev > div').css('top',y);  
    });
    $('.swiper-button-next').mouseenter(function(){
        $('.swiper-button-next > div').addClass('active');
    });
    $('.swiper-button-next').mouseleave(function(){
        $('.swiper-button-next > div').removeClass('active');
    });
    $('.swiper-button-next').mousemove(function(e){
        x= e.offsetX;
        y=e.offsetY;
        $('.swiper-button-next > div').css('left',x);
        $('.swiper-button-next > div').css('top',y);
    });//swiper 버튼 

    $('#fp-nav ul li .fp-tooltip.fp-right').click(function(){
        var index = $(this).parent().index();
        $.fn.fullpage.moveTo(index+1);
    })//fullpage navigation

    $( window ).resize( function() {
        location.reload();
    });//reload하기
})