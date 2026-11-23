# 4.2-Lab-Array-Manipulation


How did array methods like push() and filter() help you manipulate data in this activity?


The push method let me add items to the list, the pop method allowed me to remove the last logged item in the list. The filter method essentially loops through the array in the same way as a for loop does. Additionally, the .length property searches through the entire array by implementation of an iterator and the .include string method searched through all the letters to see if there were matching between the already set list versus the new item being added.


What challenges did you face when trying to filter and search for items in the array?


My main issue was trying to use the right method names for the right modules of code throughout the project. In my commits I made sure to mention the issues I had with this. I wanted to make sure I used .toLowerCase to make sure that everything would match and leave less room for logical errors. Additionally, I realized that its sort of like reading and writing data in a database like NoSQL which helped me organize my thoughts when building.


How would you modify this code to make it more efficient or user-friendly?


As far as modifying the code to be user-friendly, I customized the HTML page so that the buttons were labelled properly, the text was easily readable, and the list of items was arranged neatly. I think the next step for this application would be to add a remove-item option that lets users click an item to remove it. I need to work on using the filter function instead of relying on loops. The filter function would've accomplished the same thing as the for loop with far less lines of code. *After doing more research I could use .filter() to choose the specifc item to remove rather than relying on .pop() to take away the last item. Also, using .some() could have been another option to test for duplicate entries*.
