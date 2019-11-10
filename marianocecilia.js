newFunction(); 

function newFunction() {
        $('window').ready(() => {
                $('.main').onepage_scroll();
                // Buttons:
                let buttonLugar = $('#button-to-lugar');
                let buttonFiesta = $('#button-to-fiesta');
                let buttonFiestaBot = $('#button-to-fiesta-bot');
                let buttonRegalo = $('#button-to-regalo');
                let buttonTop = $('#button-to-top');
                
                buttonFiesta.click(() => {
                        $('.main').moveTo(2);
                });
                buttonLugar.click(() => {
                        $('.main').moveTo(1);
                });
                buttonFiestaBot.click(() => {
                        $('.main').moveTo(2);
                });
                buttonRegalo.click(() => {
                        $('.main').moveTo(3);
                });
                buttonTop.click(() => {
                        $('.main').moveTo(1);
                });

                $("body").css("background-image", "url('assets/leaves.png')");

                function cycleImages(){
                        var $active = $('#cycler .active');
                        var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
                        $next.css('z-index',2);//move the next image up the pile
                        $active.fadeOut(1500,function(){//fade out the top image
                            $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
                            $next.css('z-index',3).addClass('active');//make the next image the top one
                        });
                      }

                setInterval(cycleImages, 5000);
        });
}

