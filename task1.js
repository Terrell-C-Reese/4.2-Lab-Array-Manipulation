let shoppingList = [];

function addItems(item) 
    {
        shoppingList.push(item);
    }
function removeLastItem(shoppingList)
    {
        shoppingList.pop();
    }
function displayList(shoppingList)
    {
        console.log("Current Shopping List", shoppingList);
    }