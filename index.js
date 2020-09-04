const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ol');
const listChanger = document.getElementById('list-changer');

const deleteButton = () => {
    let dltButton = document.createElement('button');
    dltButton.addEventListener('click', deleteItem);
    dltButton.classList.add('delete-button');
    return dltButton;
}

const changeListType = () => list.classList.toggle('unordered');

const deleteItem = function() { //A regular function to be able to use 'this' referring to the button and not the global scope.
    this.parentNode.remove();
}

const addListItem = () => {
    if (input.value) {
        let item = document.createElement('input');
        item.type = 'text';
        item.value = input.value;
        item.classList.add('transparent')

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

listChanger.addEventListener('click', changeListType)

button.addEventListener('click', addListItem);

input.addEventListener('keypress', addItemAfterEnter);