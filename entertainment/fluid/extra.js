// Erstelle Den Canvas für Die Flüssigkeiten Simulationconst canvas = document.getElementById('renderSurface');
const canvas = document.getElementById("renderSurface")
let fluid = new Fluid(canvas);
fluid.activate();

// Override Darkmode Funktion
function darkMode(dark) {
    let element = document.body;
    if(dark){
        element.className = "dunkel";
        localStorage.setItem("Darkmode",true);
        fluid.PARAMS.background_color={ r: 15, g: 15, b: 15 };
    }else if(!dark){
        element.className = "hell";
        fluid.PARAMS.background_color={ r: 150, g: 150, b: 150 };
        localStorage.setItem("Darkmode",false);
    }
}

// Nummer Checker
function isNumber(num) {
    num = parseInt(num)
    if (typeof num === "string") return false;
    return !isNaN(num) && !isNaN(parseFloat(num)) && isFinite(num);
}

function updateCanvas(){
    widthInput = document.getElementById("widthInput");
    width = widthInput.value;
    hightInput = document.getElementById("hightInput");
    hight = hightInput.value;
    if(width != ""){updateWidth()}
    if(hight != ""){updateHight()}
}

function updateWidth(){
    widthInput = document.getElementById("widthInput");
    width = widthInput.value;
    if(isNumber(width) && width < 250000){
        widthInput.className = "input";
        canvas.style.width = width.toString()+"px";
        fluid.activate()
    } else {
        widthInput.className = "input_invalid";
        console.log("Error: width invalid")
    }
}
function updateHight(){
    hightInput = document.getElementById("hightInput");
    hight = hightInput.value;
    if(isNumber(hight) && hight < 250000){
        hightInput.className = "input";
        canvas.style.hight = hight.toString()+"px";
        fluid.activate()
    } else {
        hightInput.className = "input_invalid";
        console.log("Error: hight invalid")
    }
}