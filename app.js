alert("Bienvenidos a e-commerce:")

//Bucle
do{
    alert("Por favor ingrese los montos de los productos seleccionados:")

    //Calcular valor neto de productos
    const sumanetoproductos = (producto1=0, producto2=0, producto3=0) => producto1 + producto2 + producto3

    //Calcular valor neto de productos
    const calculoIVA = (totalproductosneto) => totalproductosneto * 0.21

    //Formas de pago (Efectivo: -10% - Tarjeta: +10%)
    const formaspago = (opcionpago, pagoefectivo, pagotarjeta) => {
        switch (opcionpago){
            case "1":
                return alert(("Recibiste 10% de descuento por pagar en efectivo. Bonificacion: $") + (pagoefectivo * 0.1) + (". Total a pagar es: $") + (pagoefectivo * 0.9))
            case "2":
                return alert(("Costo financiero total: $") + (pagotarjeta * 0.1) + (". Total a pagar con tarjeta es: $") + (pagotarjeta * 1.1))
            default:
                return alert("Solo ingresar 1: efectivo o 2: tarjeta. Por favor volver a ingresar los montos de los productos seleccionados:")    
        }
    }

    //Usuario ingresa precios de productos
    let producto1 = Number(prompt("Ingrese precio del primer producto"))
    let producto2 = Number(prompt("Ingrese precio del segundo producto"))
    let producto3 = Number(prompt("Ingrese precio del tercer producto"))

    //Muestra suma de productos netos
    let totalproductosneto = sumanetoproductos(producto1, producto2, producto3)
    alert(("Subtotal: $") + (totalproductosneto))

    //Muestra iva de productos
    let ivatotal = calculoIVA(totalproductosneto)
    alert(("IVA: $") + (ivatotal))

    //Muestra suma de productos finales
    let totalproductosfinal = sumanetoproductos(totalproductosneto, ivatotal)
    alert(("Total a pagar: $") + (totalproductosfinal))

    //Pregunta la forma de pago
    let calculoformadepago = prompt("Ingrese forma de pago: 1: para pagar en efectivo (-10%) o 2: tarjeta para pagar con tarjeta de credito (+10%)")

    //Muestra el total para pagar
    let preciofinal = formaspago(calculoformadepago, totalproductosfinal, totalproductosfinal)

}

while (confirm("Continúa comprando?)")){
}

//Fin del bucle
alert("Muchas gracias por elegirnos. Hasta pronto!")