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

if ((alquilerSeleccionado === "si") || (alquilerSeleccionado === "Si")) {
    costoTotal += precioAlquiler;
}else{
    alert("Haz seleccionado no alquilar habitacion")
}
if ((desayunoSeleccionado === "si") || (desayunoSeleccionado === "Si")){
    costoTotal += precioDesayuno;
}else{
    alert("Haz seleccionado que no quieres desayuno")
}
if ((transporteSeleccionado === "si") || (transporteSeleccionado === "Si")){
    costoTotal += precioTransporte;
}else{
    alert("Haz seleccionado que no quieres transporte")
}
if ((salaDeJuegosSeleccionada === "si") || (salaDeJuegosSeleccionada === "si")) {
    costoTotal += precioSalaDeJuegos;
}else{
    alert("Haz seleccionado no alquilar la sala de juegos")
}
if ((alquilerSeleccionado === "no") && (desayunoSeleccionado === "no") && (transporteSeleccionado === "no") && (salaDeJuegosSeleccionada === "no")){
    alert("Es bienvenido cuando quiera contratar nuestros servicios")
}
// Resultado
alert("El costo total sera de: $" + costoTotal);