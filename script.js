const input = document.querySelector("#input");
const ul = document.querySelector("#ul");
const div = document.querySelector(".div");
const btn = document.querySelector(".addBtn");


function createListElement() {
    const li = document.createElement("li"); //create list element
    const deleteBtn = document.createElement("button"); //create delete button
    const i = document.createElement("i");
    //const txt = document.createTextNode("");

	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

    
    //i.appendChild(txt);
   // deleteBtn.innerText = "delete";
    deleteBtn.className = "BtnDelete";
    i.className = "gg-trash";
    deleteBtn.append(i);
    
    li.appendChild(deleteBtn);
    
    deleteBtn.addEventListener("click", deleteItem);

    input.value = "";

}

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

function toggleDone(event) {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle("checked");
    }
}

function deleteItem() {
    const list = this.parentNode;
    const ul = list.parentNode;
    ul.removeChild(list);
}

btn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDone);


