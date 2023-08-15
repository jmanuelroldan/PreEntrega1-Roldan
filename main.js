// Precios de los productos/servicios
const precioAlquiler = 1500;
const precioDesayuno = 500;
const precioTransporte = 200;
const precioSalaDeJuegos = 200;

// Selecciones del usuario
const alquilerSeleccionado = prompt("Desea alquilar habitacion? (si/no)")
const desayunoSeleccionado = prompt("Desea contratar servicio de desayuno? (si/no)")
const transporteSeleccionado = prompt("Desea contratar transporte para excursiones? (si/no)")
const salaDeJuegosSeleccionada = prompt("Desea alquilar la sala de juegos? (si/no)")
// Calcular el costo total
let costoTotal = 0;

if (alquilerSeleccionado === "si") {
    costoTotal += precioAlquiler;
}
if (desayunoSeleccionado === "si") {
    costoTotal += precioDesayuno;
}
if (transporteSeleccionado === "si") {
    costoTotal += precioTransporte;
}
if (salaDeJuegosSeleccionada === "si") {
    costoTotal += precioSalaDeJuegos;
}
if ((alquilerSeleccionado === "no") && (desayunoSeleccionado === "no") && (transporteSeleccionado === "no") && (salaDeJuegosSeleccionada === "no")){
    alert("Es bienvenido cuando quiera contratar nuestros servicios")
}
// Resultado
alert("El costo total sera de: $" + costoTotal);