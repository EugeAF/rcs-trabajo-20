/*var nombre = prompt('Escriba su primer nombre');
var segundoNombre = prompt('Escriba su segundo nombre');
var apellido = prompt('Escriba su apellido');
var nombreCompleto = nombre + " " + segundoNombre + " " + apellido;
var edad = parseInt(prompt('Escriba su edad'));
var suma = parseInt(edad) + 1;

console.log(nombre);
console.log(segundoNombre);
console.log(apellido);
console.log(edad);
console.log(nombreCompleto);

console.log('Nombre Completo: ' + nombreCompleto + '. Tiene ' + edad + ' años'+ ' y proximamente cumplira ' + suma);
console.log('Nombre Completo: ' + nombreCompleto + '. Tiene ' + edad + ' años'+ ' y proximamente cumplira ' + (edad + 1));

var primerNumero = parseInt(prompt('Ingrese el primer numero: '));
var segundoNumero = parseInt(prompt('Ingrese el segundo numero: '));
var operacion = prompt('Ingrese la operacion (sumar, restar, multiplicar o dividir): ');

if(operacion =='sumar'){
    alert(primerNumero + segundoNumero);
}
if(operacion =='restar'){
    alert(primerNumero - segundoNumero);
}
if(operacion =='multiplicar'){
    alert(primerNumero * segundoNumero);
}
if(operacion =='dividir'){
    alert(primerNumero / segundoNumero);
}

function saludar(nombre, edad){
    alert("Hola " + nombre);
    alert("Tu edad es " + edad);
}

saludar("Eugenia", 14);

function calcular(operador) {
    var numeroUno = parseInt(document.getElementById("numeroUno").value);
    var numeroDos = parseInt(document.getElementById("numeroDos").value);
    var resultado = 0;

    switch (operador) {
        case '+':
            resultado = sumar(numeroUno, numeroDos);
            break;
        case '-':
            resultado = restar(numeroUno, numeroDos);
            break;
        case '*':
            resultado = multiplicar(numeroUno, numeroDos);
            break;
        case '/':
            resultado = dividir(numeroUno, numeroDos);
            break;
        default:
            resultado = alert("Operacion no definida");
            break;
    }


}

function sumar(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

function restar(numeroUno, numeroDos) {
    return numeroUno - numeroDos;
}

function multiplicar(numeroUno, numeroDos) {
    return numeroUno * numeroDos;
}

function dividir(numeroUno, numeroDos) {
    return numeroUno / numeroDos;
}

function sumarDosNumeros() {
    alert()
}*/