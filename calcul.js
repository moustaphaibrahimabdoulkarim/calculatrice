const disableButton = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) =>
    {element.disabled = bool;})
};



const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement;
    let currenceBalance = balanceValue.innerText;
    let currenceExpense = expenditureValue.innerText;
    let parentAmonunt = parentDiv.queryselector(".amount").innerText;
    if (edit) { let parentText = parentDiv.queryselector("product").innerText;
    productTitle.value = parentText;
    userAmount.value = parentAmonunt;
    disableButton(true);
        
    }
    balanceValue.innerText = parseInt(currenceBalance) + parseInt(parentAmonunt);
    expenditureValue.innerText = parseInt(currenceExpense) - parseInt(parentAmonunt);
    parentDiv.remove();
} ;

const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content");
    sublistContent.innerHTML = ' <p class = "product"> ${expenseName} </p> <p class = "amount"> ${expenseValue}</p>';
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square" , "edit");
    editButton.style.fontSize = "24px";
    editButton.addEventListener("click", () => {
        modifyElement(editButton, true);
    } )
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can" , "delete");
    deleteButton.style.fontSize ="24px";
    deleteButton.addEventListener("click", () =>  {
        modifyElement(deleteButton);
    } )
    sublistContent.append(editButton);
    sublistContent.append(deleteButton);
    document.getElementById("List").appendChild(sublistContent); }

    
    checkAmountButton.addEventListener("click", () => {
        if (!userAmount.value || !productTitle.value) { 
            productTitleError.classList.remove("hide");
            return false      
        }
        disableButton(false);

        let expenditure = parseInt(userAmount.value);
        let sum = parseInt(expenditureValue.innerText) + expenditure;
        expenseValue.innerText = sum;
        const totalBalance = tempAmount - sum;
        balanceValue.innerText = totalBalance;
        listCreator(productTitle.value, userAmount.value);
        productTitle.value = "";
        userAmount.value = "";
    })
 