
/* 01. Pedir los datos de una persona (Nombre, apellidos, edad) 
    y mostrarlos a través de una alerta. */
function saludar() {
    let nombre = prompt("Ingresa tu nombre: ");
    let apellidos = prompt("Ingresa tus apellidos: ");
    let edad = parseInt(prompt("Ingresa tu edad"));

    if (isNaN(edad)) { // Verifica que la edad sea un número
        alert("Ingrese una edad válida");
    } else {
        alert(`Hola señor ${nombre} ${apellidos}, veo que usted tiene ${edad} años.`);
    };
};

