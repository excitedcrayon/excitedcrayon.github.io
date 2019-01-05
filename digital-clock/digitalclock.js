"use strict";

function DigitalClock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "AM";

    var d = {
        hour: date.getHours(), // 0-23
        minute: date.getMinutes(), // 0-59
        second: date.getSeconds(), // 0-59
        period: "AM"
    };

    if (d.hour == 0) {
        d.hour = 12;
    }

    if (d.hour > 12) {
        d.hour = d.hour - 12;
        d.period = "PM";
    }

    d.hour = (d.hour < 10) ? "0" + d.hour : d.hour;
    d.minute = (d.minute < 10) ? "0" + d.minute : d.minute;
    d.second = (d.second < 10) ? "0" + d.second : d.second;

    var time = d.hour + ":" + d.minute + ":" + d.second + " " + d.period;
    var elem = document.getElementById('clock-display');
    elem.innerHTML = time;
    elem.textContent = time;
    setTimeout(DigitalClock, 1000);
}
