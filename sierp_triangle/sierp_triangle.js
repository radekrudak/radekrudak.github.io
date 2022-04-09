start();
function start() {
    let screen_width = window.screen.availWidth*0.8;
    let canvas_height = window.screen.availHeight*0.8;

    console.log("Generating svg tag");
    body = document.getElementById("main");
    body.innerHTML += `
    <svg id="drawing_svg" 
        width="`+screen_width+`" 
        height="`+canvas_height+`"
        style="border"
        >

    </svg>
    `;
    console.log("Starting Drawing");

    draw_sierp_triangle(
        [screen_width/2, 0], 
        [0, canvas_height], 
        
        [screen_width, canvas_height]
        
        );

}

// return 2d coordinates of point between p1 and p2 
function between_points(p1x, p1y, p2x, p2y) {
    let x = (p1x + p2x) / 2;
    let y = (p1y + p2y) / 2;

    return [x, y];
}


function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function draw_sierp_triangle(p1, p2, p3) {

    
    let one = between_points(p1[0], p1[1], p2[0], p2[1]);
    let two = between_points(p1[0], p1[1], p3[0], p3[1]);
    let three = between_points(p3[0], p3[1], p2[0], p2[1]);

    a = document.getElementById("drawing_svg");
    a.innerHTML += '<polygon points="' + one[0] + ',' + one[1] + ' ' + two[0] + ',' + two[1] + ' ' + three[0] + ',' + three[1] + '" style = "fill:black;">';
    if (distance(p1[0], p1[1], p2[0], p2[1]) > 50.0) {
        // draw left bottom triangle
        setTimeout(function () { draw_sierp_triangle(p1, one, two); }, 1000);

        // draw right bottom triangle
        setTimeout(function () { draw_sierp_triangle(two, three, p3); }, 1000);

        // draw top triangle
        setTimeout(function () { draw_sierp_triangle(one, p2, three); }, 1000);

    }
    return
}