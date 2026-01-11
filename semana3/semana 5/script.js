const gallery = document.getElementById("gallery");
const imageUrlInput = document.getElementById("imageUrl");
const addButton = document.getElementById("addImage");
const deleteButton = document.getElementById("deleteImage");

let selectedImage = null;

// Agregar imagen
addButton.addEventListener("click", () => {
    const url = imageUrlInput.value.trim();
    if (url === "") return;

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => selectImage(img));

    gallery.appendChild(img);
    imageUrlInput.value = "";
});

// Seleccionar imagen
function selectImage(img) {
    const images = document.querySelectorAll(".gallery img");
    images.forEach(i => i.classList.remove("selected"));

    img.classList.add("selected");
    selectedImage = img;
}

// Eliminar imagen seleccionada
deleteButton.addEventListener("click", () => {
    if (selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
});

// Tecla Delete para eliminar imagen
document.addEventListener("keydown", (e) => {
    if (e.key === "Delete" && selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
});
