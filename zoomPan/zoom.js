"use strict";

window.onload = function () {
    var photo = document.querySelector('.photo');
    console.log('Loaded');
    // event for when mouse cursor enters viewport
    photo.addEventListener('mouseover', function () {
        this.style.transform = "scale(1.02)";
        this.style.transition = "transform 1.5s linear";
    });

    // event for moving mouse cursor inside viewport
    photo.addEventListener('mousemove', function (e) {
        var bounds = this.getBoundingClientRect();
        var widthOffset = (event.pageX - this.offsetLeft);
        var width = bounds.width;
        var transformX = (widthOffset / width) * 100 + '%';

        var heightOffset = (event.pageY - this.offsetTop);
        var height = bounds.height;
        var transformY = (heightOffset / height) * 100 + '%';

        this.style.transformOrigin = transformX + transformY;
        this.style.transition = "transition-origin 1.5 ease";
        //console.log(event);
    });

    // event for them mouse cursor leaves viewport
    photo.addEventListener('mouseout', function () {
        var resetTransformX = 0 + '%';
        var resetTransformY = 0 + '%';
        this.style.transform = "scale(1)";
        this.style.transition = "transform 1.5s ease-in";
    });
}
