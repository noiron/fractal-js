var FRACTAL = FRACTAL || {};

// create local scope to avoid polluting global namespace
FRACTAL.demo = FRACTAL.demo || [];
FRACTAL.demo[0] = function (canvasName) {

    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById(canvasName);
    context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    function draw() {
        x = width / 2;
        y = height / 2;
        r = height / 2 - 50;
        drawCircle(x, y, r);
    }

    function drawCircle(x, y, r) {
        context.strokeStyle = "#000";
        context.moveTo(0, 0);
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, true);
        context.closePath();
        context.stroke();
        if (r > 2) {
            r *= 0.75;
            drawCircle(x, y, r);
        }
    }

    draw();
};