// TODO: Copy list contents to clipboard. 
// TODO: Be able to create a second list.
// TODO: Search list item on Amazon.


const input = document.querySelector('input');
const addItemButton = document.querySelector('button');
const list = document.querySelector('ol');
const listChangerButton = document.getElementById('list-changer');
const clearListButton = document.getElementById('clear-list-btn');
const copyListButton = document.getElementById('copy-list-btn');


const deleteButton = () => {
    let dltButton = document.createElement('button');
    dltButton.addEventListener('click', deleteItem);
    dltButton.classList.add('delete-button');
    return dltButton;
}

const changeListType = () => list.classList.toggle('unordered');

const deleteItem = function() { //A regular function to be able to use 'this' to refer to the button and not the global scope.
    this.parentNode.remove();
}

const addListItem = () => {
    if (input.value) {
        let item = document.createElement('input');
        item.type = 'text';
        item.value = input.value;
        item.classList.add('transparent', 'list-item')

        const listElement = document.createElement('li');
        listElement.appendChild(item);
        listElement.appendChild(deleteButton());
        list.appendChild(listElement);
        input.value = '';
    } 
}

const addItemAfterEnter = (event) => {
    if (event.keyCode === 13) {
        addListItem();
    }
}

const clearListContents = () => {
    list.innerHTML = "";
}

const copyListContents = () => {
    const clipboard = document.querySelector('textarea');
    const listItems = document.querySelectorAll('li');

    for (let i = 0; i < listItems.length; i++) {
        clipboard.value += `${listItems[i].firstChild.value} \n`
        
    }
    clipboard.select();
    document.execCommand("copy");
    clipboard.value = '';
}

input.addEventListener('keypress', addItemAfterEnter);

addItemButton.addEventListener('click', addListItem);

listChangerButton.addEventListener('click', changeListType);

clearListButton.addEventListener('click', clearListContents);

copyListButton.addEventListener('click', copyListContents);