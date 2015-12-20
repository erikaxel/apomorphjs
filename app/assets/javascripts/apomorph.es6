class Square {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width
    }


}

var s1 = new Square(4, 5);

console.log(s1.area());

$(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#9ea7b8";
    ctx.opacity = "0.2";
    ctx.fill();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    //var bgReady = false;
    //var bgImage = new Image();
    //bgImage.onload = function () {
    //    bgReady = true;
    //};
    //bgImage.src = "assets/1up_01.png";

    var oneup = new Movie("1up", 10);

    var update = function (time) {

    };

    function fullscreen(){
        var el = document.getElementById('canvas');

        if(el.webkitRequestFullScreen) {
            el.webkitRequestFullScreen();
        }
        else {
            el.mozRequestFullScreen();
        }
    }

    var render = function () {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //if (bgReady) {
        //    ctx.drawImage(bgImage, 0, 0);
        //}
        //oneup.x = 100;
        //oneup.y = 100;
        oneup.render(ctx);

    };

    var main = function () {
        //var now = Date.now();
        //var delta = now - then;

        update(1000);
        render();

        //then = now;

        // Request to do this again ASAP
        requestAnimationFrame(main);
    };

    // Use
    // http://www.conversion-tool.com/midi
    // To convert from midi to mp3
    var sound = new Howl({
        urls: [audio_path('mission1.mp3')]
    }).play();
    main();
});
