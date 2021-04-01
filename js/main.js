// Click On Toggle
let toggle = document.querySelector('.toggle');
let div = document.querySelector('.form');
let span = document.querySelector('span');

toggle.addEventListener('click', () => {
    if (div.style.display === "none") {
        div.style.display = "block";
        span.innerHTML = "-";
    } else {
        div.style.display = "none";
        span.innerHTML = "+";
    }
});

var selectedRow = null

// Form Submit
function onFormSubmit() {
    // if (validate()) {
    var formData = readFormData();
    if (selectedRow == null)
        insertTasks(formData);
    else
        updateTasks(formData);
    resetForm();
    // }
}


// get Elements
function readFormData() {
    var formData = {};
    formData["task_id"] = document.getElementById("task_id").value;
    formData["task"] = document.getElementById("task").value;
    formData["date"] = document.getElementById("date").value;
    formData["status"] = document.getElementById("status").value;
    formData["description"] = document.getElementById("description").value;
    return formData;
}

// Insert Tasks
function insertTasks(data) {
    var table = document.getElementById("tasks-list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.task_id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.task;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.date;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.status;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.description;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML =
        `<a onClick="onEdit(this)" class="btn edit" title="Edit">Edit</a>
         <a onClick="onShow(this)" class="btn show" title="Show">Show</a>
         <a onClick="onDelete(this)" class="btn delete" title="Delete">Delete</a>`;
    console.log('Insert Data');
}

function resetForm() {
    document.getElementById("task_id").value = "";
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("status").value = "";
    document.getElementById("description").value = "";
    selectedRow = null;
    console.log('Reset Form');
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("task_id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("task").value = selectedRow.cells[1].innerHTML;
    document.getElementById("date").value = selectedRow.cells[2].innerHTML;
    document.getElementById("status").value = selectedRow.cells[3].innerHTML;
    document.getElementById("description").value = selectedRow.cells[4].innerHTML;
}

function updateTasks(formData) {
    selectedRow.cells[0].innerHTML = formData.task_id;
    selectedRow.cells[1].innerHTML = formData.task;
    selectedRow.cells[2].innerHTML = formData.date;
    selectedRow.cells[3].innerHTML = formData.status;
    selectedRow.cells[4].innerHTML = formData.description;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this task?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tasks-list").deleteRow(row.rowIndex);
        resetForm();
    }
    console.log('Delete Data');
}