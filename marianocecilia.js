$('window').ready(() => {

        $("#loader").animate({
                opacity: 1
        })
        $(".btn").click(function (e) { 
                e.preventDefault();
                
                $(".loader-main").animate({
                        opacity: 0
                }, 300, () => {
                        $("#loader").slideUp(800, () => {
                                $("#main").animate({
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
        })

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
        })

        $("#button-to-lugar").click(() => {
                $('html, body').animate({
                        scrollTop: 0
                    }, 800);
        })

        $("#button-to-fiesta-bot").click(() => {
                $('html, body').animate({
                        scrollTop: $("#fiesta-wrapper").offset().top
                    }, 800);
        })

        $("#button-to-regalo").click(() => {
                $('html, body').animate({
                        scrollTop: $("#regalo-wrapper").offset().top
                    }, 800);
        })

        $("#button-to-top").click(() => {
                $('html, body').animate({
                        scrollTop: 0
                    }, 800);
        })

        var keys = [32,33,34,35,36,37,38,39,40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
  disable_scroll_mobile();
}

// MOBILE
function disable_scroll_mobile(){
  document.addEventListener('touchmove',preventDefault, false);
}

disable_scroll();
}); 
