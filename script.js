var ctx = document.querySelector("canvas").getContext("2d");

const BASE_ANGLE = 30 * Math.PI / 180, R = 60, TR = Math.sqrt(3) * R / 6;

function draw_12(x, y, base_angle, r){
    angle = base_angle + 2 * Math.PI / 24
    // ctx.lineWidth = 2
    ctx.beginPath()
    for(var i = 0; i <= 12; i ++) {
        var cordX = x + Math.cos(angle) * r, cordY = y + Math.sin(angle) * r
        if (cordX < 0 || cordX > 800 || cordY < 0 || cordY > 800) {
                ctx.closePath()
                return false
        }
        ctx.lineTo(cordX, cordY)
        angle += 2 * Math.PI / 12
    }
    ctx.fillStyle = "blue"
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    return true
}

function draw_3(x, y, base_angle, r){
    angle = base_angle
    // ctx.lineWidth = 2
    ctx.beginPath();
    for(var i = 0; i <= 3; i ++) {
        var cordX = x + Math.cos(angle) * r, cordY = y + Math.sin(angle) * r
        if (cordX < 0 || cordX > 800 || cordY < 0 || cordY > 800) {
                ctx.closePath()
                return false
        }
        ctx.lineTo(cordX, cordY)
        angle += 2 * Math.PI / 3
    }
    ctx.fillStyle = "yellow"
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    return true
}

function drawMosaic(){
    var height = 800
    var offset = 0
    while (height >= TR) {
        var width = 800
        if (offset == 0) width -= R -2
        while (width >= R) {
            draw_12(width, height, BASE_ANGLE, R)
            draw_3(width, height + (R + TR/2 - 2), BASE_ANGLE - Math.PI, TR)
            draw_3(width, height - (R + TR/2 - 2), BASE_ANGLE, TR)
            draw_3(width - (R - 2), height - (R/2 + 3), BASE_ANGLE - Math.PI, TR)
            draw_3(width - (R - 2), height + (R/2 + 3), BASE_ANGLE, TR)
            draw_3(width + (R - 2), height - (R/2 + 3), BASE_ANGLE - Math.PI, TR)
            draw_3(width + (R - 2), height + (R/2 + 3), BASE_ANGLE, TR)
            width -= 2 * R - 3.5
        }
        offset = 1 - offset
        height -= 3 * R / Math.sqrt(3) - 5
    }
}

drawMosaic()

