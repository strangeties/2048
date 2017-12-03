// -------
// Methods
// -------

function UpdateColors() {
    var canvas = document.getElementById('color_selector');
    var ctx = canvas.getContext("2d");
    var bgc = "rgb(" + document.getElementById("background_r").value + ","
                    + document.getElementById("background_g").value + ","
                    + document.getElementById("background_b").value + ")";
    var fgc = "rgb(" + document.getElementById("foreground_r").value + ","
    + document.getElementById("foreground_g").value + ","
    + document.getElementById("foreground_b").value + ")";
    
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgc;
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(canvas.width/2,
            canvas.height/2,
            Math.min(canvas.width, canvas.height)/4,
            0,
            2*Math.PI);
    ctx.fillStyle=fgc;
    ctx.fill();
}

function Init() {
    UpdateColors();
}

// ------
// SCRIPT
// ------
Init();