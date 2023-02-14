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

comprar();