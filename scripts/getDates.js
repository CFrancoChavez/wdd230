const yearPlaceholder = document.getElementById("year-placeholder");

const year = new Date().getFullYear();

yearPlaceholder.innerHTML = yearPlaceholder.innerHTML.replace("year", year);

// Obtén el elemento de párrafo por su id
const lastModifiedParagraph = document.getElementById("lastModified");

// Obtiene la fecha/hora de la última modificación del documento
const lastModifiedDateTime = document.lastModified;

// Actualiza el contenido del párrafo con la fecha/hora de la última modificación
lastModifiedParagraph.textContent += lastModifiedDateTime;
