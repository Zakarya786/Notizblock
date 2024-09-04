// Arrays zum Speichern der Notizen, des Papierkorbs und des Archivs
let notes = getFromLocalStorage('notes') || [];
let trash = getFromLocalStorage('trash') || [];
let archive = getFromLocalStorage('archive') || [];

// Funktion zum Speichern in den Local Storage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Funktion zum Abrufen aus dem Local Storage
function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// Funktion zum Hinzufügen einer neuen Notiz
function addNote() {
    const title = document.getElementById('contentTitle').value;
    const content = document.getElementById('inputContent').value;

    // Überprüfen, ob beide Eingaben vorhanden sind
    if (title && content) {
        notes.push({ title, content }); 
        saveToLocalStorage('notes', notes); 
        renderNotes(); // Notizen neu rendern
        document.getElementById('contentTitle').value = "";
        document.getElementById('inputContent').value = "";
    } else {
        alert("Bitte Titel und Inhalt eingeben!");
    }
}



// Funktion zum Löschen einer Notiz (verschiebt sie in den Papierkorb)
function deleteNote(index) {
    trash.push(notes[index]); 
    notes.splice(index, 1); 
    saveToLocalStorage('notes', notes); 
    saveToLocalStorage('trash', trash); 
    renderNotes(); 
}

// Funktion zum Markieren einer Notiz als gelesen (verschiebt sie ins Archiv)
function markAsRead(index) {
    archive.push(notes[index]); 
    notes.splice(index, 1); 
    saveToLocalStorage('notes', notes); 
    saveToLocalStorage('archive', archive); 
    renderNotes(); 
}

// Funktion zum Wiederherstellen einer Notiz aus dem Papierkorb
function restoreFromTrash(index) {
    notes.push(trash[index]); 
    trash.splice(index, 1); 
    saveToLocalStorage('notes', notes); 
    saveToLocalStorage('trash', trash); 
    renderNotes(); // Notizen neu rendern
}

// Funktion zum endgültigen Löschen einer Notiz aus dem Papierkorb
function deletePermanentlyFromTrash(index) {
    trash.splice(index, 1); 
    saveToLocalStorage('trash', trash); 
    renderNotes(); 
}

// Funktion zum Wiederherstellen einer Notiz aus dem Archiv
function restoreFromArchive(index) {
    notes.push(archive[index]); 
    archive.splice(index, 1); 
    saveToLocalStorage('notes', notes); 
    saveToLocalStorage('archive', archive); 
    renderNotes(); 
}

// Funktion zum endgültigen Löschen einer Notiz aus dem Archiv
function deleteFromArchive(index) {
    archive.splice(index, 1); 
    saveToLocalStorage('archive', archive); 
    renderNotes(); 
}












// Notizen beim Laden der Seite rendern
// renderNotes();



// function saveToLocalStorage() {
//     localStorage.setItem('', JSON.stringify(''));
// }

// function getFromLocalStorage() {
//     let myArr = JSON.parse(localStorage.getItem(''))
// }