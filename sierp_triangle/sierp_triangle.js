start();
function start() {
    console.log("Generating svg tag");
    body = document.getElementById("main");
    body.innerHTML += `
    <svg id="drawing_svg" 
        width="`+window.screen.availWidth+`" 
        height="`+window.screen.availHeight+`" 

        <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
            
    </svg>
    `;
    console.log("Starting Drawing");
    draw_sierp_triangle(
        [window.screen.availWidth/2,0], 
        [0,window.screen.availHeight], 
        
        [window.screen.availWidth,window.screen.availHeight]
        
        );

}
function start_drawing()
{
    console.log("Starting Drawing");
    draw_sierp_triangle(
        [window.screen.availWidth,0], 
        [0,window.screen.availHeight], 
        
        [window.screen.availWidth,window.screen.availHeight]
        
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