(function () {

        function zeros(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
                }

        let deadline = ('November 09 2019 20:15:00 GMT-3');
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
                        clock.innerHTML = t.days + ' DÍAS ' + '<br>' +
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

        updateClock();
        let timeinterval = setInterval(updateClock, 1000);


        initializeClock('clockdiv', deadline);
}());