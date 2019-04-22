newFunction(); 

function newFunction() {
        $('window').ready(function() {
                var buttonLugar = $('#button-to-lugar');
                var buttonFiesta = $('#button-to-fiesta');
                var buttonFiestaBot = $('#button-to-fiesta-bot');
                var buttonRegalo = $('#button-to-regalo');
                var buttonTop = $('#button-to-top');

                $('#loader').animate({
                        opacity: 1
                }, 600);
                $('html, body').animate({
                        scrollTop: 0
                }, 400);
                $('.btn').click(function (e) {
                        e.preventDefault();
                        $('.loader-main').animate({
                                opacity: 0
                        }, 400, function() {
                                $('#loader').slideUp(800, function() {
                                        $('#main').animate({
                                                opacity: 1
                                        }, 600);
                                        $('footer').animate({
                                                opacity: 1
                                        }, 600);
                                });
                        });
                });
                function zeros(i) {
                        if (i < 10) {
                                i = '0' + i;
                        }
                        return i;
                }
                var deadline = ('November 09 2019 20:30:00 GMT-3');
                var daysSpan = clock.querySelector('.days');
                var hoursSpan = clock.querySelector('.hours');
                var minutesSpan = clock.querySelector('.minutes');
                var secondsSpan = clock.querySelector('.seconds');
                function getTimeRemaining(deadline) {
                        var t = Date.parse(deadline) - Date.parse(new Date());
                        var seconds = zeros(Math.floor((t / 1000) % 60));
                        var minutes = zeros(Math.floor((t / 1000 / 60) % 60));
                        var hours = zeros(Math.floor((t / (1000 * 60 * 60)) % 24));
                        var days = Math.floor(t / (1000 * 60 * 60 * 24));
                        return {
                                'total': t,
                                'days': days,
                                'hours': hours,
                                'minutes': minutes,
                                'seconds': seconds
                        };
                }
                function initializeClock(id, deadline) {
                        var clock = document.getElementById('clock');
                        var timeinterval = setInterval(function () {
                                var t = getTimeRemaining(deadline);
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
                        var t = getTimeRemaining(deadline);
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
                var timeinterval = setInterval(updateClock, 1000);
                $('.loader-text').delay(500).animate({
                        opacity: 1
                });
                $('.clock').delay(1000).animate({
                        opacity: 1,
                }, 400);
                $('.btn').delay(1000).animate({
                        opacity: 1
                }, 400);
                buttonFiesta.click(function() {
                        $('.main').moveTo(2);
                });
                buttonLugar.click(function() {
                        $('.main').moveTo(1);
                });
                buttonFiestaBot.click(function() {
                        $('.main').moveTo(2);
                });
                buttonRegalo.click(function() {
                        $('.main').moveTo(3);
                });
                buttonTop.click(function() {
                        $('.main').moveTo(1);
                });
                $('.main').onepage_scroll();
        });
}

