const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const selectList = document.getElementById("select");
const nameBtn = document.getElementById("nameBtn");
const valueBtn = document.getElementById("valueBtn");
const deleteBtn = document.getElementById("deleteBtn");

const items = [];

const isAlphanumeric = (str) => {
    if (str.length === 0){
        return false;
    }

    const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < str.length; i++) {
        if (allowedChars.indexOf(str[i]) === -1){
            return false;
        }
    }
    return true;
};

const render = () => {
    selectList.innerHTML = "";

    items.forEach((item, i) => {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${item.name}=${item.value}`;
        selectList.appendChild(option);
    });
}

addBtn.addEventListener("click", () => {
    const parts = input.value.split('=');

    if (parts.length === 2) {
        const name = parts[0].trim();
        const value = parts[1].trim();

        if (isAlphanumeric(name) && isAlphanumeric(value)) {
            items.push({name, value});
            render();
            input.value = "";
            return;
        }
    }

    alert("Please use the format Name=Value using only alpha-numeric characters.");
});

nameBtn.addEventListener("click", () => {
    items.sort((a, b) => a.name.localeCompare(b.name));
    render();
})

valueBtn.addEventListener("click", () => {
    items.sort((a, b) => a.value.localeCompare(b.value));
    render();
})

deleteBtn.addEventListener("click", () => {
    const options = selectList.options;

    for (let i = options.length - 1; i >= 0; i--) {
        if (options[i].selected) {
            items.splice(i, 1);
        }
    }

    render();
})