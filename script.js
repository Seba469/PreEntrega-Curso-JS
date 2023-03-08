class Producto{
    constructor (id, nombre, marca, stock, precio){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.stock = stock;
        this.precio = precio;
    }
}

const producto1 = new Producto(1, 'Zapatilla1', 'Nike', 3, 2000);
const producto2 = new Producto(2, 'Zapatilla2', 'Nike', 2, 3000);
const producto3 = new Producto(3, 'Zapatilla3', 'Puma', 1, 2500);
const producto4 = new Producto(4, 'Zapatilla4', 'Puma', 4, 1500);
const producto5 = new Producto(5, 'Zapatilla5', 'Adidas', 2, 2500);
const producto6 = new Producto(6, 'Zapatilla6', 'Adidas', 1, 2000);


const stockProducto = [producto1, producto2, producto3, producto4, producto5, producto6]

let stockMarca = []

function elegirZapatilla (){

    let opcion = parseInt(prompt('Bienvenido a la tienda de calzado\n\nElija la marca que desea comprar\n1- Nike\n2- Puma\n3- Adidas')) 

    do{

        switch(opcion){
            case 1:
                stockMarca = marcaElegida ('Nike')
                console.log (stockMarca)
                break;
            case 2:
                stockMarca = marcaElegida ('Puma')
                console.log (stockMarca)   
                break;
            case 3:
                stockMarca = marcaElegida ('Adidas')
                console.log (stockMarca)
                break;
            default:    
                opcion = parseInt(prompt('Opcion no valida, intente nuevamente\n\nElija una opcion\n1- Nike\n2- Puma\n3- Adidas'))      
                break;
        }
    
    }while (opcion === 99)


}

function marcaElegida (opc){

    const filtrarMarca = stockProducto.filter (marcaProducto => marcaProducto.marca === opc)
    
    return filtrarMarca
}

elegirZapatilla()












/*
let suma = 0
let totalCompra = 0

function comprar (){

    let opcion = parseInt(prompt('Bienvenido a la tienda de calzado\n\nElija una opcion\n1- Vapormax\n2- Airmax\n3- 270\n4- Carrito'))

    do{

    switch(opcion){
        case 1:
            suma =+ 2500  
            alert('Se agrego Vapormax a su carrito')    
            break;
        case 2:
            suma =+ 2500 
            alert('Se agrego Airmax a su carrito') 
            break;
        case 3:
            suma =+ 2500 
            alert('Se agrego 270 a su carrito') 
            break;
        default:    
            opcion = parseInt(prompt('Opcion no valida, intente nuevamente\n\nElija una opcion\n1- Vapormax\n2- Airmax\n3- 270'))      
            break;
    }

    }while (opcion === 99)
    
    carrito()
}

function carrito (){

    totalCompra = totalCompra + suma

    let reset = parseInt(prompt(`El total de su carrito es ${totalCompra}\n\nQuiere agregar algo mas a su compra\n\n 1- Si\n2- No`))

    while (reset === 1){
        comprar()
    }

    alert(`El total de su compra es ${totalCompra}`)

}

comprar();*/