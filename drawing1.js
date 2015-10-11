var FRACTAL = FRACTAL || {};

// create local scope to avoid polluting global namespace
FRACTAL.demo = FRACTAL.demo || [];
FRACTAL.demo[1] = function (canvasName) {

    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById(canvasName);
    context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    context.lineWidth = 2;

    function draw() {
        x = width / 2;
        y = height / 2;
        r = height / 2 - 40;
        drawCircle(x, y, r);
    }

    function drawCircle(x, y, r) {
        context.strokeStyle = "#000";
        context.moveTo(x, y);
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, true);
        context.closePath();
        context.stroke();
        if (r > 2) {
            drawCircle(x - r, y, r / 2);
            drawCircle(x + r, y, r / 2);
        }
    }
    draw();
};