const itemSubmit = document.getElementById("itemSubmit");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const displayList = document.getElementById("displayList");

function showDisplay() {
    displayList.innerHTML = "";

    for(let i = 0; i < shoppingList.length; i++) {
        let currentItem = shoppingList[i];
        let listItem = document.createElement("listItem");
        listItem.textContent = currentItem;
        displayList.appendChild(listItem);
    }
}
