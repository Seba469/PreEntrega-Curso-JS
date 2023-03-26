class Producto{
    constructor (id, img, nombre, marca, stock, precio){
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.marca = marca;
        this.stock = stock;
        this.precio = precio;
    }
}

const producto1 = new Producto(1, 'nike.png', 'zapatilla1', 'nike', 3, 2000);
const producto2 = new Producto(2, 'nike.png', 'zapatilla2', 'nike', 2, 3000);
const producto3 = new Producto(3, 'puma.png', 'zapatilla3', 'puma', 1, 2500);
const producto4 = new Producto(4, 'puma.png', 'zapatilla4', 'puma', 4, 1500);
const producto5 = new Producto(5, 'adidas.png', 'zapatilla5', 'adidas', 2, 2500);
const producto6 = new Producto(6, 'adidas.png', 'zapatilla6', 'adidas', 1, 2000);


const stockProducto = [producto1, producto2, producto3, producto4, producto5, producto6]
const carrito = []

const divCatalogo = document.getElementById('catalogo')

function cargarProducto (){
    
    stockProducto.forEach(p => {
        divCatalogo.innerHTML +=
        `
        <div class="card col-9" style="width: 18rem;">
            <img src="./imagenes/${p.img}" class="card-img-top imgClass" alt="...">
            <div class="card-body">
                <h5 class="card-title">${p.marca} ${p.nombre}</h5>
                <p class="card-text">$${p.precio}</p>
                <button id="${p.id}" class="btn btn-primary">Agregar al carro</button>
            </div>
        </div>  
        `
    })

    let btnAgregar = document.querySelectorAll('btn-primary') 

    btnAgregar.forEach(boton => boton.addEventListener('click', agregarAlCarrito(btnAgregar)))//Escucho click y ejecuto funcion    
}

function agregarAlCarrito(btnAgregar){
    
    console.log ('escucho click')
   /* for(let boton of btnAgregar){
        const productoSeleccionado = stockProducto.find(prod =>prod.id === parseInt(boton.id))//Busca el id del producto q conicida con el id del boton
        const productoAAgregar = {...productoSeleccionado, cantidad:1}
        console.log (productoSeleccionado)
        console.log(productoAAgregar)
    }*/
}

cargarProducto()