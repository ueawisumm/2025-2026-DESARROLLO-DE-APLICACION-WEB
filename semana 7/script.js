// Arreglo de productos
let productos = [
    {
        nombre: "Cuaderno",
        precio: "$2.500",
        descripcion: "Cuaderno universitario de 100 hojas"
    },
    {
        nombre: "Lápiz",
        precio: "$3.50",
        descripcion: "Lápiz de grafito HB"
    },
    {
        nombre: "Mochila",
        precio: "$15.00",
        descripcion: "Mochila escolar resistente"
    }
];

// Referencia al UL
const lista = document.getElementById("listaProductos");

// Función para renderizar productos
function mostrarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: ${producto.precio}<br>
            ${producto.descripcion}
        `;
        lista.appendChild(li);
    });
}

// Mostrar productos al cargar la página
mostrarProductos();

// Botón para agregar nuevo producto
document.getElementById("agregarProducto").addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Carro",
        precio: "$5.000",
        descripcion: "compra de un vehiculo"
    };

    productos.push(nuevoProducto);
    mostrarProductos();
});
