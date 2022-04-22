function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function addRow() {
    tb = document.querySelector('#table');

    let row = tb.insertRow(-1);
    
    let cell = row.insertCell();
    cell.innerHTML = '<input type="text">';

    cell = row.insertCell();
    cell.innerHTML = '<input type="text">'

    cell = row.insertCell();
    cell.innerHTML = '<input type="text">'

    cell = row.insertCell();
    cell.innerHTML = '<button class="del-btn" onclick="deleteRow(this)">X</button>'
}