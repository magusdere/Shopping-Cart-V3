const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const footer = document.querySelector("#footer");
const templateFooter = document.querySelector("#templateFooter");
const fragment = document.createDocumentFragment();

document.addEventListener("click", (e) => {
    if (e.target.dataset.fruta === "Frutilla 🍓") {
        agregarCarrito(e)
    }
    if (e.target.dataset.fruta === "Pera 🍐") {
        agregarCarrito(e)
    }
    if (e.target.dataset.fruta === "Naranja 🍊") {
        agregarCarrito(e)
    }
})

const carritoArray = [];

const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    }

    const posicion = carritoArray.findIndex((item) => item.titulo === producto.titulo);

    if (posicion === -1) {
        carritoArray.push(producto);
    } else {
        carritoArray[posicion].cantidad++;
    }

    mostrarCarrito();
}

const mostrarCarrito = () => {
    carrito.textContent = "";

    carritoArray.forEach((item) => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".list-group-item .lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        clone.querySelector(".lead span").textContent = item.precio*item.cantidad;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);
}

