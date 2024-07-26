let input = document.querySelector("#text");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");

function CreateList() {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
}
btn.addEventListener("click", () => {
    if(input.value != ""){
        CreateList();
    }
    else{
        alert("Please enter task.")
    }
});
input.addEventListener("keydown", (event) => {
    if (event.code == "Enter" || event.code == "NumpadEnter") {
        if(input.value != ""){
          CreateList();
        }
        else{
            alert("Please enter task.");
        }
        
    }
});

ul.addEventListener("click",(event) => {
    if(event.target.nodeName == "BUTTON"){
        let items = event.target.parentElement;
        if(confirm("Are you sure to delete task?")) {
            items.remove();
        }
       
    }
   
});
