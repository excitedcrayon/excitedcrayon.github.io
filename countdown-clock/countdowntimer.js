function CountDownTimer() {
    window.onload = this.start();
}

CountDownTimer.prototype.start = function () {
    const now = new Date();
    const date = new Date(now.getFullYear(), 11, 31);
    var currentTime = now.getTime();
    var downTime = date.getTime();
    var remTime = downTime - currentTime; // get the remaining time
    var second = Math.floor(remTime / 1000);
    var minute = Math.floor(second / 60);
    var hour = Math.floor(minute / 60);
    var day = Math.floor(hour / 24);

    hour %= 24;
    minute %= 60;
    second %= 60;

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    this.dispElement('clock-day', day);
    this.dispElement('clock-hour', hour);
    this.dispElement('clock-minute', minute);
    this.dispElement('clock-second', second);

    setTimeout(CountDownTimer.prototype.start.bind(this), 1000);
};

CountDownTimer.prototype.dispElement = function (id, string) {
    var elem = document.getElementById(id);
    elem.innerText = string;
    elem.textContent = string;
    return elem;
};
