//Constructor
class productos {
    constructor(codigo, rubro, marca, descripcion, precio){
    this.codigo = codigo;
    this.rubro = rubro;
    this.marca = marca;
    this.descripcion = descripcion;
    this.precio = precio;
    }
}

//Funcion Agregar
function agregarproductos(){
    let elegir = Number(prompt("Presione: 1 para cargar lista de ejemplos precargados. 2 para ingresar productos."))
    if (elegir == 1) {
        for (const iterator of listapredeterminada) {
            productos.push(iterator)
        }
        console.log("Cargada lista predeterminada: \n\n");
        productos.forEach(element => {
            console.log(
            "- Código: " + element.codigo + "\n" + 
            "- Rubro: " + element.rubro + "\n" + 
            "- Marca: " + element.marca + "\n" + 
            "- Descripción: " + element.descripcion + "\n" +
            "- Precio: $" + element.precio + "\n\n");
        });
        alert("Cargada lista predeterminada")
    }else if (elegir==2){
        let flag=true;
        let opcion2=true;
        let opcion3=true;
        let opcion4=true;
        let opcion5=true;
        let opcion6=true;
        let controlcodigo=[];
        let controlprecio=[];
        do {
            if (flag) {
    
                //Control de codigo válido
                let codigo;
                do {
                    id = Number(prompt("Ingrese código: "));
                    if(!codigo || isNaN(codigo)){
                        alert("Ingresó un código inválido. Reintentar: ")
                        opcion4=true;
                    }else{
                        controlcodigo.push(codigo);
                        opcion4=false;
                    }
                } while (opcion4);
    
                let rubro = prompt("Ingrese rubro: ").toUpperCase();
                let marca = prompt("Ingrese marca: ").toUpperCase();
                let descripcion = prompt ("Ingrese el descripcion: ").toUpperCase();
    
                //Control de precio válido
                let precio;
                do {
                    precio = Number(prompt("Ingrese el precio del producto: "));
                    if(!precio || isNaN(precio)){
                        alert("Ingresó un precio inválido. Reintentar: ")
                        opcion5=true;
                    }else{
                        controlprecio.push(precio);
                        opcion5=false;
                    }
                } while (opcion5);
    
                productos.push(new Stock(codigo, rubro, marca, descripcion, precio));
                console.log("Producto agregado exitosamente");
                flag=false;
            } else {
                let opcion = confirm("Desea continuar agregando otro producto?");
                if (opcion) {
                    let codigo;
                        //Control de codigo inválido o existente
                        do {
                            codigo = Number(prompt("Ingrese el siguiente codigo del producto"));
                            if(controlcodigo.includes(codigo) || isNaN(codigo) || !codigo){
                                alert("Ingresó un código existente o inválido. Reintentar")
                                opcion3=true;
                            }else{
                                controlcodigo.push(codigo);
                                opcion3=false;
                            }
                        } while (opcion3);
    
                    let rubro = prompt ("Ingrese rubro del producto").toUpperCase();    
                    let marca = prompt ("Ingrese marca del producto").toUpperCase();
                    let descripcion = prompt("Ingrese descripción del producto").toUpperCase();
    
                    //Control de precio inválido
                    let precio;
                    do {
                        precio = Number(prompt("Ingrese el precio del producto"));
                        if(isNaN(precio) || !precio){
                            alert("Ingresó un precio inválido. Reintentar")
                            opcion6=true;
                        }else{
                            controlprecio.push(precio);
                            opcion6=false;
                        }
                    } while (opcion6);
                    productos.push(new Stock(codigo, rubro, marca, descripcion, precio))
                    console.log("Producto agregado")
            } else{
                opcion2=false;
                break;
            }
            }
        } while (opcion2);
    }   
}

//Funcion mostrar productos
function mostrarproductos() {
        console.log("Productos cargados: \n\n");
    productos.forEach(element => {
        console.log(
        "- Código: " + element.codigo + "\n" + 
        "- Rubro: " + element.rubro + "\n" + 
        "- Marca: " + element.marca + "\n" + 
        "- Descripción: " + element.descripcion + "\n" +
        "- Precio: $" + element.precio + "\n\n");
    });
}

//Funcion para limpiar productos
function limpiarproductos() {
    let borrar = confirm("Confirma borrar todo lo ingresado?");
    
    if (borrar) {
        productos.splice(0,productos.length)
        console.clear();
        alert("\n\n Se eliminaron todos los productos ingresados. \n\n");
    } else {
        alert("\n\n Ingresar nuevo producto. \n\n");
    }
    }

const listapredeterminada = [
    {codigo: 1, rubro: "Cubierta", marca: "Pirelli", descripcion:"275-17", precio: 10000},
    {codigo: 2, rubro: "Bateria", marca: "Yuasa", descripcion:"12N5-3B", precio: 7500},
    {codigo: 3, rubro: "Lubricante", marca: "Motul", descripcion:"Mineral", precio: 5000},

    ]

let Productos =[];

alert("Antes de iniciar, verificar que la consola del navegador esté abierta")

do {
    menu = Number(prompt(
        "- Bienvenidos: \n \n \
            1) Agregar productos. \n \
            2) Mostrar listado de productos. \n \
            3) Borrar listado de productos. \n \
            4) Salir."
        ));
    
    switch (menu) {
        case 1:
            agregarproductos();
        break;
        case 2:
            mostrarproductos();
        break;
        case 3:
            limpiarproductos()
        break;
        case 4:
            alert("Gracias por elegirnos")
        break;
      }
    } while (menu != 4);