var FRACTAL = FRACTAL || {};

// create local scope to avoid polluting global namespace
FRACTAL.demo = FRACTAL.demo || [];
FRACTAL.demo[2] = function (canvasName) {

    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById(canvasName);
    context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    function draw() {
        x = width / 2;
        y = height / 2;
        length = width/3;
        vertical = false;
        context.lineWidth = 4;
        h_fractal(x, y, length, vertical)
    }

    function h_fractal(x, y, length, vertical) {
        context.strokeStyle = "#000";
        //if(context.lineWidth > 1) context.lineWidth -=1;

        if (!vertical) {

            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x-length/2, y);
            context.lineTo(x+length/2, y);
            context.stroke();
            if (length > 20) {
                vertical = ! vertical;

                x -= length/2;
                h_fractal(x, y, length/Math.sqrt(2), vertical);

                x += length;
                h_fractal(x, y, length/Math.sqrt(2), vertical);

            }
        }
        else {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x, y-length/2);
            context.lineTo(x, y+length/2);
            context.stroke();
            if (length > 20) {

                vertical = ! vertical;
                y -= length/2;
                h_fractal(x, y, length/Math.sqrt(2), vertical);

                y += length;
                h_fractal(x, y, length/Math.sqrt(2), vertical)
            }
        }

        //context.beginPath();
        //context.moveTo(99, 150);
        //context.lineTo(149, 50);
        //context.lineTo(199, 150);
        //context.lineJoin = 'miter';
        //context.stroke();

    }

    draw();
};