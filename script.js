document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
    var eventTime= moment("2020-09-28 00:00").toDate().getTime();
    var currentTime = moment().toDate().getTime();
    var diffTime = eventTime - currentTime;
    var duration = moment.duration(diffTime, 'milliseconds');

    document.documentElement.style.setProperty('--timer-day', "'" + duration.days() + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + duration.hours() + "'");
    document.documentElement.style.setProperty('--timer-minutes', "'" + duration.minutes() + "'");
    document.documentElement.style.setProperty('--timer-seconds', "'" + duration.seconds() + "'");
    requestAnimationFrame(updateTime);
}
