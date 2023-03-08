class Producto{
    constructor (id, nombre, marca, stock, precio){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.stock = stock;
        this.precio = precio;
    }
}

const producto1 = new Producto(1, 'zapatilla1', 'nike', 3, 2000);
const producto2 = new Producto(2, 'zapatilla2', 'nike', 2, 3000);
const producto3 = new Producto(3, 'zapatilla3', 'puma', 1, 2500);
const producto4 = new Producto(4, 'zapatilla4', 'puma', 4, 1500);
const producto5 = new Producto(5, 'zapatilla5', 'adidas', 2, 2500);
const producto6 = new Producto(6, 'zapatilla6', 'adidas', 1, 2000);


const stockProducto = [producto1, producto2, producto3, producto4, producto5, producto6]
const carrito = []

function elegirZapatilla (){

    let opcion = prompt('Bienvenido a la tienda de calzado\n\nElija la marca que desea comprar\nNike\nPuma\nAdidas').toLowerCase()

    if (opcion.trim() === ""){
        alert('Error, ingrese un valor valido')
        elegirZapatilla()
    }else{
        const filtrarMarca = stockProducto.filter(p => p.marca === opcion)
        console.log(filtrarMarca)
        mostrarZapatillas(filtrarMarca)
    }

}

function mostrarZapatillas (arrayFiltrado){
    const arrayNombres = []
    arrayFiltrado.forEach(p => arrayNombres.push(p.nombre))

    const elijaProd = prompt(`Elija un producto\n\n${arrayNombres.join('\n')}`)

    arrayFiltrado.forEach(p => {
        if (p.nombre === elijaProd){
            carrito.push(p.nombre)
            alert(`Se agrego al carrito ${p.nombre}`)
        }

    })

    elegirZapatilla()
}

elegirZapatilla()
