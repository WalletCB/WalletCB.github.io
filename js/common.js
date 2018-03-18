'use strict';
var block = $('.js__block'),
    slider = $('.js__slider'),
    sliderAll = $('.faq__block'),
    slideCount = $('.faq__block').children().length / 2,
    nowSlide = 1;

$(document).ready(function(){

    $(block).hover(function () {
        $('.start__block-text', this).hide();
        $('.start__block-price', this).hide();
        $('.js__block-btn', this).show();
    }, function () {
        $('.js__block-btn', this).hide();
        $('.start__block-text', this).show();
        $('.start__block-price', this).show();
    });

    $('.faq__slider-up').click(function () {
        innerWidth < 540 ? prevSlide() : nextSlide();
        $(slider).html(nowSlide + '/6');
    });

    $('.faq__slider-down').click(function () {
        innerWidth < 540 ? nextSlide() : prevSlide();
        $(slider).html(nowSlide + '/6');
    });


});


function nextSlide() {
    if (nowSlide == slideCount || nowSlide <= 0 || nowSlide > slideCount) {
        $(sliderAll).css('transform', 'translate(0, 0)');
        nowSlide = 1;
    } else {
        var translateHeight = -$(sliderAll[nowSlide - 1]).height() * nowSlide;
        $(sliderAll).css({
            'transform': 'translate(0,' + translateHeight + 'px)'
        });
        nowSlide++;
    }
}

function prevSlide() {
    if (nowSlide == 1 || nowSlide <= 0 || nowSlide > slideCount) {
        var translateHeight = -$(sliderAll[nowSlide - 1]).height() * (slideCount - 1);
        $(sliderAll).css({
            'transform': 'translate(0,' + translateHeight + 'px)'
        });
        nowSlide = slideCount;
    } else {
        var translateHeight = -$(sliderAll[nowSlide - 1]).height() * (nowSlide - 2);
        $(sliderAll).css({
            'transform': 'translate(0,' + translateHeight + 'px)'
        });
        nowSlide--;
    }
}

var canvas = document.querySelector("canvas"),
    c = canvas.getContext("2d");
 canvas.width = window.innerWidth,
 canvas.height = window.innerHeight;
var purple = ["rgba(190, 37, 152, x)", "rgba(149, 37, 190, x)", "rgba(120, 37, 190, x)", "rgba(91, 37, 190, x)", "rgba(190, 37, 116, x)"],
    colorArray = [purple],
    colors = colorArray[0];

function Circle(x, y, dx, dy, radius, growth) {
    this.x = x,
    this.y = y,
    this.dx = dx,
    this.dy = dy,
    this.color = colors[Math.floor(Math.random() * colors.length)],
    this.radius = radius,
    this.growth = growth,
    this.alpha = 1,
    this.draw = function () {
        c.beginPath(),
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1),
        c.strokeStyle = this.color.replace("x", +this.alpha),
        c.lineWidth = 2,
        c.fillStyle = this.color.replace("x", +this.alpha),
        c.stroke(),
        c.fill();
    },
    this.update = function () {
    this.alpha -= .025,
    this.x += this.dx,
    this.y += this.dy,
    this.radius += this.growth,
    this.draw();
    };
}
var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};
window.addEventListener("click", function () {
    colorArray.push(colorArray.shift()),
    colors = colorArray[0],
    circleArray.push(new Circle(mouse.x, mouse.y, 0, 0, 10, 5));
}), window.addEventListener("mousemove", function (e) {
    mouse.x = e.x,
    mouse.y = e.y;
}), window.addEventListener("resize", function () {
    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight;
});
var circleArray = [];

function animate() {
    requestAnimationFrame(animate),
    c.clearRect(0, 0, innerWidth, innerHeight);
    var r = 5 * (Math.random() - .5),
        i = 5 * (Math.random() - .5),
        a = 10 * Math.random() + 15;
    circleArray.push(new Circle(mouse.x, mouse.y, r, i, a, -.5));
    for (var t = 0; t < circleArray.length; t++) {
        circleArray[t].update(), (circleArray[t].alpha < 0 || circleArray[t].radius < 3) && circleArray.splice(t, 1);
    }
}
animate();
