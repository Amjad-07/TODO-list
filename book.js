var plusButton= document.querySelector(".plus-button");
var addOverlay = document.querySelector(".add-overlay");
var formyButton = document.querySelector(".formy");


plusButton.addEventListener("click", function(){
    addOverlay.style.display = "block";

    formyButton.style.display = "block";




});
var cancelButton = document.getElementById("cancel-button");


cancelButton.addEventListener("click",function(event){
    event.preventDefault();
    addOverlay.style.display = "none";

    formyButton.style.display = "none";

})



var containerElement = document.querySelector(".container");
var addButton = document.getElementById("add-button")
var formTitle = document.getElementById("form-title");
var subjectTitle = document.getElementById("subject-title");
var textArea = document.getElementById("textarea");


addButton.addEventListener('click',function(event){
    event.preventDefault();


    var div = document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h2>${ formTitle.value}</h2>
    <h5>${subjectTitle.value}</h5>
    <p>${textArea.value}
    </p>
    <button onclick="deleteBook(event)">Delete</button>
    `
    containerElement.append(div);
    addOverlay.style.display = "none";

    formyButton.style.display = "none";

});
function deleteBook(event){
    event.target.parentElement.remove();

}

