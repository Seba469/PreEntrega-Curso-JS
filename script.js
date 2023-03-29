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

    let btnAgregar = document.querySelectorAll('.btn-primary') 
    
    for(let boton of btnAgregar){//Para cada boton en la nodeList 
        boton.addEventListener("click", function(){agregarAlCarrito(boton)})//Paso por parametro el boton en el q se hizo click
    }     
}

function agregarAlCarrito(boton){

    const productoSeleccionado = stockProducto.find(prod =>prod.id === parseInt(boton.id))//Busca el producto q tenga el mismo id q el boton
    
    const productoAAgregar = {...productoSeleccionado, cantidad:1}
    
    const indiceCarrito = carrito.findIndex(prod => prod.id === productoAAgregar.id)//Verifica si en el carrito hay un producto con el mismo id q el q se va a ingresar, devuelve su indice en el array

    if(indiceCarrito === -1){
        carrito.push(productoAAgregar)
    }else{
        carrito[indiceCarrito].cantidad ++
    }

    localStorage.setItem('prodCarrito', JSON.stringify(carrito))

    let carritoJson = JSON.parse(localStorage.getItem('prodCarrito'))

    let tablaCarrito = document.getElementById('cuerpoTabla')
    tablaCarrito.innerHTML=''

    for(let p of carritoJson){

        let fila = document.createElement('tr')

        fila.innerHTML = 
        `
            <td><img src="./imagenes/${p.img}"</td>
            <td><p>${p.marca}</p></td>
            <td><p>${p.nombre}</p></td>
            <td>${p.precio}</td>
            <td>${p.cantidad}</td>
            <td><button id="${p.id}" class="btn btnBorrar">Borrar</button></td>
        `
        tablaCarrito.append(fila)
    }

    let btnBorrar = document.querySelectorAll('.btnBorrar')

    for(let boton of btnBorrar){
        boton.addEventListener("click", function(){borrarDelCarrito(boton)})
    }
}


function borrarDelCarrito(boton){
    let borrarProducto = carrito.findIndex(prod => prod.id === parseInt(boton.id))
            
    if (carrito[borrarProducto].cantidad > 1){
        carrito[borrarProducto].cantidad --
    }else{
        delete(carrito[borrarProducto])
    }

    localStorage.setItem('prodCarrito', JSON.stringify(carrito))
    console.log(carrito)

}


cargarProducto()