var registerButton = document.querySelector("#register_button");
var form = document.querySelector(".app_form");
var client_table = document.querySelector("#clients-body-table");
var filter = document.getElementById("filter");
var bt_get_clients = document.querySelector("#get_clients");
const API_URL = "https://onirvanico.github.io/clients_simulator/clients.json"

registerButton.addEventListener("click", event => {

    let tr = document.createElement("tr");
    tr.classList.add("client");

    event.preventDefault();
    var client = getFormValues(form);

    addValueToTable(client.name, "name-info", tr);
    addValueToTable(client.email, "email-info", tr);
    addValueToTable(client.age, "age-info", tr);
    addValueToTable(client.cpf, "cpf-info", tr);
    addValueToTable(client.rg, "rg-info", tr);
    form.reset();

});

var getFormValues = (form) => {
    return {
        name: form.name.value,
        email: form.email.value,
        age: form.age.value,
        cpf: form.cpf.value,
        rg: form.rg.value,
    }
};

var addValueToTable = (value, tdClass, tr) => {
    let td = document.createElement("td");
    td.textContent = value;
    td.classList.add(tdClass);
    tr.appendChild(td);
    let table = document.querySelector("#clients-body-table");
    table.appendChild(tr);
};

client_table.addEventListener("click", event => {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
});


filter.addEventListener("input", event => {
    var clients = document.querySelectorAll(".client");

    if (this.filter.value.length > 0) {
        clients.forEach(element => {
            let rg = new RegExp(this.filter.value, "i");
            if (rg.test(element.children[0].textContent)) element.classList.remove("invisible");
            else element.classList.add("invisible");
            console.log("É igual");
        });
    } else {
        for (let element of clients) {
            console.log("El " + element);
            element.classList.remove("invisible");
            console.log("É igual");
        }
    }
});

bt_get_clients.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", API_URL);
    xhr.send();
    xhr.addEventListener("load", () => {

        var result = JSON.parse(xhr.responseText);
        result.forEach(client => {
            let tr = document.createElement("tr");
            tr.classList.add("client");
            addValueToTable(client.name, "name-info", tr);
            addValueToTable(client.email, "email-info", tr);
            addValueToTable(client.age, "age-info", tr);
            addValueToTable(client.cpf, "cpf-info", tr);
            addValueToTable(client.rg, "rg-info", tr);
        });
    });
});