// Arreglo de productos
let productos = [
    {
        nombre: "Cuaderno",
        precio: 2.50,
        descripcion: "Cuaderno de 100 hojas"
    },
    {
        nombre: "Lápiz",
        precio: 0.50,
        descripcion: "Lápiz de grafito"
    },
    {
        nombre: "Borrador",
        precio: 0.30,
        descripcion: "Borrador blanco"
    }
];

// Referencia al elemento UL
const lista = document.getElementById("listaProductos");

// Función para renderizar los productos
function mostrarProductos() {
    lista.innerHTML = ""; // Limpiar la lista

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;
        lista.appendChild(li);
    });
}

// Mostrar productos al cargar la página
mostrarProductos();

// Botón para agregar un nuevo producto
document.getElementById("btnAgregar").addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Producto Nuevo",
        precio: 1.00,
        descripcion: "Descripción del nuevo producto"
    };

    productos.push(nuevoProducto);
    mostrarProductos();
});
