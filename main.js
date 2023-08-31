class Reservas{
    constructor(nombre, dni, numDias){
    this.nombre = nombre;
    this.dni = dni;
    this.numDias = numDias;    
    this.reserva = []
} 
}
function reservar() {
    const nombre = prompt("ingrese su Nombre");
    const dni = prompt("ingrese su dni")
do {
    numDias = parseInt(prompt("Ingrese el número de días de estadía:"));
    const reservaExistente = reserva.find(reserva => reserva.dni === dni && reserva.numDias === numDias);
    if (reservaExistente) {
      alert("Ya existe una reserva con el mismo DNI y número de días.");
    }
  } while (!numDias || reservaExistente);
  reserva.push(reservar)
  
}
alert("Bienvenido, comencemos con su reserva");
reservar();
alert("su reserva fue agedada con exito!");
