let objNotes = [];
displayNotes();

function addNote() {
    let addText = document.getElementById('text-content');
    let notes = localStorage.getItem('notes');

    if (notes == null) objNotes = [];
    else objNotes = JSON.parse(notes);

    objNotes.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(objNotes));
    addText.value = "";

    displayNotes();
}

function displayNotes() {
    let notes = document.getElementById('notes');

    if (objNotes.length == 0) {
        objNotes = JSON.parse(localStorage.getItem('notes'));
    }

    let codeBlock = "";

    objNotes.forEach((element, index) =>  {
        codeBlock +=  `<div class="note">
                            <p>${element}</p>
                            <button id="${index}" onclick="editNote(this.id)">MODIFICA</button>
                            <button id="${index}" onclick="deleteNote(this.id)">CANCELLA</button>
                       </div>`;
    });

    notes.innerHTML = codeBlock;
}

function deleteNote(index) {    
    objNotes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(objNotes));

    displayNotes();
}

function editNote(index) {
    let addText = document.getElementById('text-content');
    addText.value = objNotes[index];
    deleteNote(index);
}