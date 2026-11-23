function addItem(item){
        let sameItem = false;
            for(let i = 0; i < shoppingList.length; i++)
                {
                    let currentItem = shoppingList[i];                    
                    if(currentItem.toLowerCase() === item.toLowerCase()){
                        sameItem = true;
                        break;
                    }
                }
                    if(sameItem === false) {
                        shoppingList.push(item);
                    }
                    else {
                            console.log(item + " is already in the shopping cart.");
                    }
    }

function filterItems(searchItem){
    let filteredItems = [];
        for(let i = 0; i < shoppingList.length; i++ )
            {
                let currentItem = shoppingList[i];

                if(currentItem.toLowerCase().includes(searchItem.toLowerCase())) {
                    filteredItems.push(currentItem);
                }
            }

        return filteredItems;
    }