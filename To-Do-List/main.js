const list = document.getElementById("list");

function onFormSubmit(e) {
    e.preventDefault();
    const inputValue = e.target.children[0].value;
    console.log(inputValue);

    
}

function createListItem(inputValue) {
    const item = document.createElement("div")
    item.innerHTML = `
        <div>
            <input type="checkbox" />
            <span>${inputValue}</span>
        </div>
        <button>X</button>
    `
    return item
}