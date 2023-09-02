class Reservas{
    constructor(nombre, dni, numDias, numHuespedes){
 
    this.nombre = nombre;
    this.dni = dni;
    this.numDias = numDias;  
    this.numHuespedes = numHuespedes;
  } 
}

let registroDeReservas = []
const error = "Por favor ingrese un dato valido:";

function hacerReserva(){
  let nombre;
  let dni;
  let numHuespedes;
  let numDias;
  do{
    nombre = prompt("ingrese su nombre:");
    }while(!isNaN(nombre));
  do{
    dni = parseInt(prompt("ingrese su dni:"));
    if(isNaN(dni) || dni <= 11111111){
      alert(error)
    }
  }while(isNaN(dni) || dni <= 11111111);
  do{
    numHuespedes = parseInt(prompt("ingrese el numero de Huespedes (maximo 3):"));
    if(isNaN(numHuespedes) || numHuespedes <= 0 || numHuespedes >=4){
      alert(error)
    }
  }while(isNaN(numHuespedes) || numHuespedes <= 0 ||numHuespedes >=4)
  do{
    numDias= parseInt(prompt("ingrese numero de dias (maximo 5):"));
    if(isNaN(numDias) || numDias <= 0 || numDias >= 6){
      alert(error)
    }
  }while(isNaN(numDias) || numDias <= 0 || numDias >= 6);
 
  const huesped = new Reservas(nombre, dni, numDias, numHuespedes);
  registroDeReservas.push(huesped);
  alert("¡Reserva realizada con éxito!")
  menu()
}

function verReserva(){
  if(registroDeReservas.length === 0){
    alert("No hay reservas registradas.");
    return
  } 

  let infoReservas = "---Reservas---\n"

  for (let i = 0; i < registroDeReservas.length; i++) {
    const reserva = registroDeReservas[i];
    infoReservas += `\nReserva ${i + 1}:\n`;
    infoReservas += "Nombre: " + "${registroDeReservas.nombre}\n";
    infoReservas += `DNI: ${registroDeReservas.dni}\n`;
    infoReservas += `Número de huéspedes: ${registroDeReservas.numHuespedes}\n`;
    infoReservas += `Días de estadía: ${registroDeReservas.numDias}\n`;
  }
  alert(infoReservas)
}
function eliminarReserva(){
  if(registroDeReservas.length === 0){
    alert("No hay reservas registradas.");
    menu()
  } 

  const eleccion = (parseInt(prompt("Seleccione una opcion:\n1. Borrar reserva.\n2. Volver al Menu Principal")));   
  switch (eleccion){
        case 1:
          const borrarReserva = parseInt(prompt("Ingrese el numero de reserva a borrar:")) -1;
          if(!isNaN(borrarReserva) && borrarReserva >= 0 && borrarReserva < registroDeReservas.length){
            registroDeReservas.splice(borrarReserva, 1)
            alert("La reserva numero " + borrarReserva + " ha sido eliminada con exito.")
          }else{ alert("Numero de reserva invalido")}
          verReserva()
          break;
          case 2:
           menu()
          break;
          default:
            alert("Por favor ingrese un dato valido:");            
      }
      eliminarReserva()
    }

function menu () {
  while (true) {
  const opcion = parseInt(
    prompt(
      "Seleccione una opción:\n1. Hacer reserva\n2. Ver reservas\n3. Cancelar reservas \n 4. Salir"
    )
  );
  switch(opcion){
    case 1:
      hacerReserva()
    break;
    case 2:
      verReserva()
    break;
    case 3:
      eliminarReserva()
    case 4:
     return;
    default:
      alert("Por favor, ingrese una opcion valida.");
    }
  }
}

menu();
