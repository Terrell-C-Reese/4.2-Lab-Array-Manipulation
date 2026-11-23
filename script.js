const itemSubmit = document.getElementById("itemSubmit");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const showList = document.getElementById("showList");

function showUpdatedDisplay() {
    showList.innerHTML = "";

    for(let i = 0; i < shoppingList.length; i++) {
        let currentItem = shoppingList[i];
        let listItem = document.createElement("li");
        listItem.textContent = currentItem;
        showList.appendChild(listItem);
    }
}
function addItemToList(){
    let itemNew = itemSubmit.value.trim();

    if(itemNew !== "") {
        addItem(itemNew);
        itemSubmit.value = "";
        showUpdatedDisplay();
        displayList();
    }
}
function removeLastItemFromList(){
    removeLastItem();
    showUpdatedDisplay();
    displayList();
}

addBtn.addEventListener("click", addItemToList);
removeBtn.addEventListener("click", removeLastItemFromList);