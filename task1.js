let shoppingList = [];

function addItems(item) 
    {
        shoppingList.push(item);
    }
function removeLastItem()
    {
        shoppingList.pop();
    }
function displayList()
    {
        console.log("Current Shopping List", shoppingList);
    }