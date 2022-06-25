let registerButton = document.querySelector("#register_button");
let form = document.querySelector(".app_form");
var client_table = document.querySelector("#clients-table");

registerButton.addEventListener("click", event => {
    
    var tr = document.createElement("tr");
    tr.classList.add("cliente");

    event.preventDefault();
    var client = getFormValues(form);

    addValueToTable(client.name, "name-info", tr);
    addValueToTable(client.email, "email-info", tr);
    addValueToTable(client.age, "age-info", tr);
    addValueToTable(client.cpf, "cpf-info", tr);
    addValueToTable(client.rg, "rg-info", tr);

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
    event.target.parentNode.remove();
})
