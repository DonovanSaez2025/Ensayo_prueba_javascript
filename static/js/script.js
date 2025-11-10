
/* 01. Pedir los datos de una persona (Nombre, apellidos, edad) 
    y mostrarlos a través de una alerta. */
function mostrarDatos() {
    let nombre = prompt("Ingresa tu nombre: ");
    let apellidos = prompt("Ingresa tus apellidos: ");
    let edad = parseInt(prompt("Ingresa tu edad"));

    if (isNaN(edad) || nombre == null || apellidos == null) { // Verifica que la edad sea un valor número y que nombre y apellidos no sean nulos
        alert("Ingrese datos válidos");
    } else if (nombre == "" || apellidos == "") { // Verifica que nombre y apellidos no estén vacíos
        alert("Ingrese datos válidos");
    } else {
        alert(`Hola señor ${nombre} ${apellidos}, veo que usted tiene ${edad} años.`);
    };
};

/* 02. Pedir un número, dividirlo en 3 partes, 
sumar 10 y multiplicarlo por 2, luego mostrar el resultado en una alerta. */
function calculoDificil() {
    let num = parseInt(prompt("Ingresa un número: "));

    if (isNaN(num)) {
        alert("Ingrese un número válido.");
    } else {
        alert(`El resultado es: (${num} / 3 + 10) * 2 = ${(num / 3 + 10) * 2}`);
    };
};

/* 03. Calcular la suma de los N primeros números. 
(N es ingresado por el usuario). Ejemplo: N=3 → alerta: 1 + 2 + 3 = 6 */
function sumaNumeros() {
    let num = parseInt(prompt("Ingresa un número: "));
    let resultado = "El resultado es: 0";
    let suma = 0;

    if (isNaN(num)) {
        alert("Ingrese un número válido.");
    } else {
        for (let i = 1; i <= num; i++) {
            suma += i;
            resultado += ` + ${i}`;
        };

        alert(`${resultado} = ${suma}`);
    };
};

/* 04. Mostrar en alerta los 100 primeros números pares. (Bucle) */
function cienPrimerosPares() {
    let resultado = "Los 100 primeros números pares son: \n";
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            resultado += `${i} `;
        };
    };

    alert(resultado);
};

/* 05. Mostrar en alerta los 100 primeros números impares. (Bucle) */
function cienPrimerosImpares() {
    let resultado = "Los 100 primeros números impares son: \n";

    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            resultado += `${i} `;
        };
    };

    alert(resultado);
};

/* 06. Sumar 5 números dados por el usuario */
function sumarCincoNumeros() {
    let suma = 0;
    let resultado = "El resultado es: 0";

    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt("Ingresa un número: "));

        if (isNaN(num)) {
            alert("Ingrese valores válidos.");
            break; // Fuerza a que se rompa el bucle
        } else {
            suma += num;
            resultado += ` + ${num}`;
        };
    };

    alert(`${resultado} = ${suma}`);
};

/* 07. Modificar el anterior para que permita 
sumar N números leídos por teclado. El valor de N se debe leer previamente por teclado. */
function sumarMasNumeros() {
    let limit = parseInt(prompt("Ingrese un número límite: "));
    let resultado = "El resultado es: 0";
    let suma = 0;

    if (isNaN(limit)) {
        alert("Ingrese un número válido.");
    } else {
        for (let i = 1; i <= limit; i++) {
            let num = parseInt(prompt("Ingresa un número: "));

            if (isNaN(num)) {
                alert("Ingrese valores válidos.");
                break;
            } else {
                resultado += ` + ${i}`;
                suma += num;
            };
        };
    };

    alert(`${resultado} = ${suma}.`);
};

/* 08. Sumar N números pares. (Leídos por teclado) */
function sumarNumerosPares() {
    let limit = parseInt(prompt("Ingrese un número límite: "));
    let suma = 0;
    let resultado = "El resultado es: 0"

    if (isNaN(limit)) {
        alert("Ingrese un número válido.");
    } else {
        for (let i = 1; i <= limit; i++) {
            let num = parseInt(prompt("Ingresa un número: "));

            if (isNaN(num) || num % 2 != 0) {
                alert("Ingrese valores válidos y números pares.");
                break;
            } else {
                suma += num;
                resultado += ` + ${num}`;
            };
        };
    };

    alert(`${resultado} = ${suma}`);
};

/* 09. Sumar los N primeros pares. (Ej: N = 7 → Alerta: 2 + 4 + 6 = 12) */
function sumarPrimerosPares() {
    let num = parseInt(prompt("Ingrese un número límite: "));
    let resultado = `Los ${num} primeros números pares son:`;

    if (isNaN(num)) {
        alert("Ingrese un número válido.");
    } else {
        for (let i = 1; i <= num; i++) {
            if (i % 2 == 0) {
                resultado += ` ${i}`;
            };
        };
    };

    alert(resultado);
};

/* 10. Sumar los N primeros múltiplos de 3. */
function sumarMultiplosTres() {
    let num = parseInt(prompt("Ingrese un número: "));
    let resultado = "El resultado es: 0 ";
    let suma = 0;

    if (isNaN(num)) {
        alert("Ingrese un número válido.");
    } else {
        for (let i = 1; i <= num; i++) {
            if (i % 3 == 0) {
                resultado += `+ ${i} `;
                suma += i;
            };
        };

        alert(`${resultado} = ${suma}`);
    };
};