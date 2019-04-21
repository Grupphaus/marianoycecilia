$('window').ready(() => {

        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        $("#loader").animate({
                opacity: 1
        }, 600)

        $('html, body').animate({
                scrollTop: 0
        }, 400);    

        $(".btn").click(function (e) { 
                e.preventDefault();
                
                $(".loader-main").animate({
                        opacity: 0
                }, 400, () => {
                        $("#loader").slideUp(800, () => {
                                $("#main").animate({
                                        opacity: 1
                                }, 500)
                                $("footer").animate({
                                        opacity: 1
                                }, 500)
                                    
                        });
                })
        });

        function zeros(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
                }

        let deadline = ('November 09 2019 20:30:00 GMT-3');
        let daysSpan = clock.querySelector('.days');
        let hoursSpan = clock.querySelector('.hours');
        let minutesSpan = clock.querySelector('.minutes');
        let secondsSpan = clock.querySelector('.seconds');

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
        let timeinterval = setInterval(updateClock, 1000);

        $(".loader-text").delay(500).animate({
                opacity: 1
        });

        $(".clock").delay(1000).animate({
                opacity: 1,
        }, 400);

        $(".btn").delay(1000).animate({
                opacity: 1
        }, 400);

        $("#button-to-fiesta").click(() => {
                $('html, body').animate({
                        scrollTop: $("#fiesta-wrapper").offset().top
                    }, 800);
        });

        $("#button-to-lugar").click(() => {
                $('html, body').animate({
                        scrollTop: 0
                    }, 800);
        });

        $("#button-to-fiesta-bot").click(() => {
                $('html, body').animate({
                        scrollTop: $("#fiesta-wrapper").offset().top
                    }, 800);
        });

        $("#button-to-regalo").click(() => {
                $('html, body').animate({
                        scrollTop: $("#regalo-wrapper").offset().top
                    }, 800);
        });

        $("#button-to-top").click(() => {
                $('html, body').animate({
                        scrollTop: 0
                    }, 800);
        });

        window.addEventListener('resize', () => {
                let vh = $("window").innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
              });
}); 
