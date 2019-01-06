window.onclick = MouseClickFX;

function MouseClickFX(event) {
    MouseClickFX.prototype.start(event)
    //window.onload = MouseClickFX.prototype.start(event)
}

MouseClickFX.prototype.start = function (e) {
    MouseClickFX.prototype.optionSelect(e);
    //MouseClickFX.prototype.renderImage('img-bell', e);
};

MouseClickFX.prototype.optionSelect = function (event) {
    var bell = document.getElementById('bell');
    var bullet = document.getElementById('bullet');
    var buzzer = document.getElementById('buzzer');
    var splat = document.getElementById('splat');

    if (bell.checked) {
        MouseClickFX.prototype.renderImage('img-bell', event, '#E74C3C', 'bell');
    }

    if (bullet.checked) {
        MouseClickFX.prototype.renderImage('img-bullet-hole', event, '#BDC3C7', 'gunshot');
    }

    if (buzzer.checked) {
        MouseClickFX.prototype.renderImage('img-buzzer', event, '#FF0000', 'buzzer');
    }

    if (splat.checked) {
        MouseClickFX.prototype.renderImage('img-ink-splatter', event, '#F4D03F', 'splat');
    }
};

MouseClickFX.prototype.renderImage = function (id, event, styleColor = '', sound = '') {
    var elem = document.getElementById(id).cloneNode();
    elem.style.backgroundColor = styleColor;
    // spans to display the x|y coordinates
    var xspan = document.getElementById('x-coord');
    var yspan = document.getElementById('y-coord');
    // append duplicate node to body node
    document.getElementById('canvas').appendChild(elem);
    elem.style.display = '';
    // draw image at the center of the mouse click
    elem.style.left = event.clientX - (elem.offsetWidth / 2) + 'px';
    elem.style.top = event.clientY - (elem.offsetHeight / 2) + 'px';
    // show coordinates as texts
    xspan.textContent = '[ X Position ]: ' + event.clientX + 'px';
    yspan.textContent = '[ Y Position ]: ' + event.clientY + 'px';
    // play the sfx
    var sfx = new Audio();
    sfx.src = 'res/sound/' + sound + '.mp3';
    sfx.play();
    return elem;
};
