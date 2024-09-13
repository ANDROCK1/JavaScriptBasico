const cadena1= "Hola";
const cadena2= " Mundo";

console.log(cadena1 + cadena2);

const ejemplo1= 1;
const ejemplo2= "2";
const ejemplo3= ejemplo1 + ejemplo2;

console.log(ejemplo3);

const nombre= "Andrés";
const mensaje= "Cuéntanos,";
const saludo= "Cómo estás?";
const imprimir= nombre + " " + mensaje + " " + saludo;
const imprimirSaltoDeLinea= nombre + "\n " + mensaje + "\n " + saludo;

console.log(imprimir)
console.log(imprimirSaltoDeLinea);

const nombre2= "Andrés";
const mensaje2= "Cuéntanos,";
const saludo2= "Cómo estás?";
const imprimir2= `${nombre2}
 ${mensaje2}
 ${saludo2}`;

console.log(imprimir2);
