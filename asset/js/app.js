document.addEventListener("DOMContentLoaded", function(){
    'use strict';
    let btn = document.getElementById('btn');
    
    btn.addEventListener("click", function(event) {
        let texte = document.getElementById('text');
        event.preventDefault();
        if(texte.value ==""){
            alert("Veuillez saisir un texte");
        }else{
            let parent = document.getElementById('parent');
            let trashCanSpan = document.createElement("span");
            let labelCheck = document.createElement("label");
            let inputCheck = document.createElement("input");
            let parent2 = document.createElement("div");
            let textValue = texte.value;
            texte.value ="";
            inputCheck.type = "checkbox";
            inputCheck.value = textValue;
            let trashCanNode = document.createTextNode("🗑️");

            parent2.setAttribute("class", "task-item");
            inputCheck.setAttribute("id", "check-box");
            parent2.setAttribute("id","grosseDivdu94");
            trashCanSpan.setAttribute("id", "poubelle");

            labelCheck.appendChild(document.createTextNode(textValue));
            trashCanSpan.appendChild(trashCanNode);
            parent2.appendChild(inputCheck);
            parent2.appendChild(trashCanSpan);
            parent.appendChild(parent2);
            parent2.appendChild(labelCheck);
    
            trashCanSpan.addEventListener("click", function() {
                parent.removeChild(parent2);
            });
            parent2.addEventListener("mouseover", function(){
                trashCanSpan.style.opacity = "1"; 
            })        
            parent2.addEventListener("mouseleave", function(){
                trashCanSpan.style.opacity = "0"; 
            });
    
            inputCheck.addEventListener("click", function() {
                if (inputCheck.checked) {
                    labelCheck.style.textDecoration = "line-through"
                    labelCheck.style.color = "#888"
                } else {
                    labelCheck.style.textDecoration = "none"
                    labelCheck.style.color = "#000"
                }
            });
        }

    });
});
