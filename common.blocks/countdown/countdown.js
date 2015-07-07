(function($) {

    $.fn.bemCountdown = function() {
        this.each(function() {
            var countdown = $(this);
            countdown._days = $('.countdown__days', this);
            countdown._hrs = $('.countdown__hrs', this);
            countdown._mins = $('.countdown__mins', this);
            countdown._secs = $('.countdown__secs', this);
            countdown.endDate = new Date(countdown.data('countdown'));
            setInterval(function() {
                updateCountdown(countdown);
            }, 1000);
        });
        function updateCountdown(countdown) {
            var curDays, curHrs, curMins, curSecs,
                startDate = new Date(),
                dateDelta = countdown.endDate - startDate,
                timeInSec = parseInt(dateDelta/1000);
            curSecs = parseInt(timeInSec % 60);
            timeInSec /= 60;
            curMins = parseInt(timeInSec % 60);
            timeInSec /= 60;
            curHrs = parseInt(timeInSec % 24);
            timeInSec /= 24;
            curDays = parseInt(timeInSec);

            countdown._days.text(curDays);
            countdown._hrs.text(curHrs);
            countdown._mins.text(curMins);
            countdown._secs.text(curSecs);
        }
    };

    $('.countdown').bemCountdown();
})(jQuery);
