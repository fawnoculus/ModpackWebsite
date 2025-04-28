// function für den Rechner
function calculate() {
    let Rechner = document.getElementById("Rechner");
    let Output =  document.getElementById("Output");
    try {
        Output.value = String(eval(Rechner.value));
    } catch (error) {
        Output.value = error;
    }
}