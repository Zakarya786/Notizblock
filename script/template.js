// Funktion zum Rendern der Notizen
function renderNotes() {
    const contentRef = document.getElementById('content');
    const trashRef = document.getElementById('trash');
    const archiveRef = document.getElementById('archive');

    // Inhalt zurücksetzen
    contentRef.innerHTML = `<h3>Notizen</h3>`;
    trashRef.innerHTML = `<h3>Papierkorb</h3>`;
    archiveRef.innerHTML = `<h3>Archiv</h3>`;

    // Hilfsfunktion zum Anzeigen der Notizen
    function renderCollection(collection, container, buttonGenerator) {
        for (let i = 0; i < collection.length; i++) {
            const { title, content } = collection[i];
            container.innerHTML += `<div class="divContent">
                <strong>${title}</strong>${content}
                <div class="divBtn">
                    ${buttonGenerator(i)}
                </div>
            </div>`;
        }
    }

    // Notizen anzeigen
    renderCollection(notes, contentRef, (i) => `
        <button onclick="deleteNote(${i})"><i class="fas fa-trash"></i></button>
        <button onclick="markAsRead(${i})"><i class="fas fa-check"></i></button>
    `);

    // Gelöschte Notizen anzeigen
    renderCollection(trash, trashRef, (i) => `
        <button onclick="restoreFromTrash(${i})"><i class="fas fa-undo"></i></button>
        <button onclick="deletePermanentlyFromTrash(${i})"><i class="fas fa-trash"></i></button>
    `);

    // Archivierte Notizen anzeigen
    renderCollection(archive, archiveRef, (i) => `
        <button onclick="restoreFromArchive(${i})"><i class="fas fa-undo"></i></button>
        <button onclick="deleteFromArchive(${i})"><i class="fas fa-trash"></i></button>
    `);
}
