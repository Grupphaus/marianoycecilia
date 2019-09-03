newFunction(); 

function newFunction() {
        $('window').ready(() => {

                // Buttons:
                let buttonLugar = $('#button-to-lugar');
                let buttonFiesta = $('#button-to-fiesta');
                let buttonFiestaBot = $('#button-to-fiesta-bot');
                let buttonRegalo = $('#button-to-regalo');
                let buttonTop = $('#button-to-top');
                // Countdown elements:
                let deadline = ('November 09 2019 20:00:00 GMT-3');
                let daysSpan = clock.querySelector('.days');
                let hoursSpan = clock.querySelector('.hours');
                let minutesSpan = clock.querySelector('.minutes');
                let secondsSpan = clock.querySelector('.seconds');

                $('#loader').animate({
                        opacity: 1
                }, 600);


                // Displays main content after clicking on "Ver información" button
                $('.btn').click((e) => {
                        e.preventDefault();
                        $('.loader-main').animate({
                                opacity: 0
                        }, 400, () => {
                                $('#loader').slideUp(800, () => {
                                        $("body").css("background-image", "url('assets/leaves.png')");
                                        $('#main').animate({
                                                opacity: 1
                                        }, 800);
                                        $('footer').animate({
                                                opacity: 1
                                        }, 800);
                                });
                        });
                });

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

                // Prepends a zero to any clock number < 10
                function zeros(i) {
                        if (i < 10) {
                                i = '0' + i;
                        }
                        return i;
                }
                
                function getTimeRemaining(deadline) {
                        let t = Date.parse(deadline) - Date.parse(new Date());
                        let seconds = zeros(Math.floor((t / 1000) % 60));
                        let minutes = zeros(Math.floor((t / 1000 / 60) % 60));
                        let hours = zeros(Math.floor((t / (1000 * 60 * 60)) % 24));
                        let days = Math.floor(t / (1000 * 60 * 60 * 24));
                        return {
                                'total': t,
                                'days': days,
                                'hours': hours,
                                'minutes': minutes,
                                'seconds': seconds
                        };
                }

                function initializeClock(id, deadline) {
                        let clock = document.getElementById('clock');
                        let timeinterval = setInterval(() => {
                                let t = getTimeRemaining(deadline);
                                clock.innerHTML = 'FALTAN ' + t.days + ' DÍAS ' + '<br>' +
                                        t.hours + ' : ' +
                                        t.minutes + ' : ' +
                                        t.seconds;
                                if (t.total <= 0) {
                                        clearInterval(timeinterval);
                                }
                        }, 1000);
                }

                function updateClock() {
                        let t = getTimeRemaining(deadline);
                        daysSpan.innerHTML = t.days;
                        hoursSpan.innerHTML = t.hours;
                        minutesSpan.innerHTML = t.minutes;
                        secondsSpan.innerHTML = t.seconds;
                        if (t.total <= 0) {
                                clearInterval(timeinterval);
                        }
                }

                initializeClock('clockdiv', deadline);

                updateClock();

                // Refreshes the clock every second
                let timeinterval = setInterval(updateClock, 1000);

                $('.loader-text').delay(500).animate({
                        opacity: 1
                }, 400);
                $('.clock').delay(1000).animate({
                        opacity: 1,
                }, 400);
                $('.btn').delay(1000).animate({
                        opacity: 1
                }, 400);
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
                $('.main').onepage_scroll();
        });
}

