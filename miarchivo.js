let entrada = prompt("Bienvenido a la Agencia de Seguridad.  Favor ingresar contraseña");
while (entrada != "ESC") {
    alert("Contraseña incorrecta= "+ entrada);
    entrada = prompt("Favor ingresar contraseña")
}
const YEAR = 2022;
let userName = prompt("Contraseña Correcta. Favor ingrese su Nombre completo");
if (userName == "") {
    alert("Ya que no tienes nombre seras el Agente HTML ");
    userName = "Agente HTML";
}

let birthYear = prompt("Favor ingresar su año de nacimiento")
if (birthYear == "") {
    alert("No completo nada= "+ birthYear);
    entrada = prompt("Favor ingresar su año de nacimiento")
    birthYear = 2022;
}

let userAge = 2022 - parseInt(birthYear)
let output = `Bienvenid@ ${userName} Tienes ${userAge} años`

if (userAge <= 18) {
    alert(`${output}, Bienvenido Novat@`);
} else if (userAge > 18 && userAge <= 35) {
    alert(`${output}, Eres un agente optimo`);
} else if (userAge > 35 && userAge <= 65) {
    alert(`${output}, Ya es hora de tu retiro`);
} else {
    alert(`${output}, Gracias por su servicio`);
}