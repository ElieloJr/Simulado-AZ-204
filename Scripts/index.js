document.addEventListener("DOMContentLoaded", function() {
    console.log("Load the page")

    includeCtaButtons()
    redirect()
});

function includeCtaButtons() {
    var section = document.getElementById("sectionButtons")
    var simulatesQuant = 7

    for (var i = 1; i <= simulatesQuant; i++) {
        var buttonSimulate = document.createElement("button");
        buttonSimulate.className = "btn";
        buttonSimulate.innerText = "Simulado " + i

        section.appendChild(buttonSimulate)
    }
    
}

function redirect() {
    var divs = document.querySelectorAll(".btn");
    
    divs.forEach(function(div) {
        div.addEventListener("click", function() {
            window.location.href = "../Pages/simulado.html"
        });
    });

    
}