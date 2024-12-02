var questao1 = "You have the following requirements: " +
"<br>• You must send events to thousands of customers that include hundreds of various event types." + 
"<br>• The events must be filtered by event type before processing." +
"<br>• Authentication and authorization must be handled by using Microsoft Entra ID." +
"<br>• The events must be published to a single endpoint." +
"<br><br>You need to implement Azure Event Gnd." +
"<br>Solution: Publish events to a custom topic. Create an event subscription for each customer." +
"<br>Does the solution meet the goal?"
var alternativa1 = "A. Yes"
var alternativa2 = "B. No"
var alternativa3 = ""
var alternativa4 = ""

document.addEventListener("DOMContentLoaded", function() {
    console.log("Load the page")

    var questionArea = document.getElementById("questionArea");

    var enunciate = document.createElement("p");
    enunciate.className = "question";
    enunciate.innerHTML = questao1
    questionArea.appendChild(enunciate)

    var spaceResponse = document.createElement("div");
    spaceResponse.className = "optionDiv"
    questionArea.appendChild(spaceResponse)

    for (var i = 1; i <= 2; i++) {
        var optionInput = document.createElement("input");
        optionInput.type = "radio"
        optionInput.name = "alternativa" + i
        optionInput.id = "alternativa" + i
        spaceResponse.appendChild(optionInput)

        var label = document.createElement("label");
        label.htmlFor = "alternativa" + i
        label.innerHTML = alternativa1
        spaceResponse.appendChild(label)

        var brokeLine = document.createElement("br");
        spaceResponse.appendChild(brokeLine)
    }

    var resetBtn = document.createElement("button");
    resetBtn.className = "resetBtn"
    resetBtn.innerHTML = "Redefinir Resposta"
    questionArea.appendChild(resetBtn)
});

function noImpletementFunctio() {
    alert("Ops... Função não implementada.")
}