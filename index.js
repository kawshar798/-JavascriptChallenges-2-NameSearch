const addEl = document.getElementById("add-btn");
const createInput = document.querySelector(".create-input");
const itemList = document.querySelector(".item-list");
const searchBox = document.querySelector(".search-box");

//add function 
addEl.addEventListener("click",function(){

    //get input value
    const inputValue = createInput.value;

    if(inputValue === ""){
 alert("Please Enter Any Name")
    }else{
    //cretae new  li element
    const li =  document.createElement("li");

    //create TextNode
    const textNode =  document.createTextNode(inputValue);

    //add class
    li.className = "item";
    li.appendChild(textNode);
    itemList.appendChild(li);
    createInput.value = "";
    }
   

})

//Search Function 
searchBox.addEventListener("keyup", function(event) {

    const serachValue = event.target.value.toLowerCase();
    let allItems = document.getElementsByClassName('item');
    
    for(let i=0; i<allItems.length; i++) {
        const currentValue = allItems[i].textContent.toLowerCase();;

        if(currentValue.includes(serachValue)){
            allItems[i].style.display = 'block';
            document.getElementsByClassName
        }else{
            allItems[i].style.display = 'none';
           
            
        }
    }
    

})
