document.addEventListener("DOMContentLoaded", function() {
    console.log("Load the page")

    includeCtaButtons()
});

function includeCtaButtons() {
    var section = document.getElementById("sectionButtons")
    var simulatesQuant = 7

    for (var i = 1; i <= simulatesQuant; i++) {
        var buttonSimulate = document.createElement("button");
        buttonSimulate.className = "btn";
        buttonSimulate.innerText = "Simulado " + i
        // colocar o direcionamento

        section.appendChild(buttonSimulate)
    }
    
}