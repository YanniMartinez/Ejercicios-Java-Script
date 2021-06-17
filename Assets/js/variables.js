/* JavaScript es sencible a mayusculas y minusculas. Es el unico lenguaje de programación
que corre del lado del Cliente*/
var variable1 = "Soy una variable";
console.log(variable1);
variable1 = 1212;
console.log(variable1);

const variable2 = "variable 2";
console.log(variable2);
/* variable2 = 10; //No lo permite puesto que una constante oo puede modificar su valor*/
console.log(variable2);

/* Let vive sólo dentro de llaves (podemos considerarlas como variables locales), pero var es perseverante */
function varTest(){
    var x = 31;
    if(true){ /* Cuando hay nuevas llaves se dice que existe un nuevo Scope  */
        var x = 71;
        console.log(x);
    }
    /* Marcaria error en una doble declaración cuando están ubicadas en un mismo scope */
    console.log(x);
}

varTest(); 

/* Función tradicional */
function letTest(){
    let x = 31;
    if(true){ /* Cuando hay nuevas llaves se dice que existe un nuevo Scope  */
        let x = 71;
        console.log(x);
    }
    console.log(x);
}

letTest(); 

/* FUNCIONES DE FLECHA */
/* Son una manera diferente de escribir las funciones, son el nuevo estandar */
/* Ponemos el Const porque no cambiarán  */
const nuevaFunción = () => {
    /* Dentro va un contenido normal como otra función */
    var x = 31;
    if(true){ /* Cuando hay nuevas llaves se dice que existe un nuevo Scope  */
        var x = 71;
        console.log(x);
    }
    /* Marcaria error en una doble declaración cuando están ubicadas en un mismo scope */
    console.log(x);
}

/* Las funciones de flecha están reemplazando a las funciones tradicionales, al hacerla constante
reserva la memoria exacta para su uso. Son equivalente, actualmente se usan funciones de flecha por
la optimización. */
nuevaFunción();


/* Template String */
const nombre = "Yann";
const apellidos = "Martinez M";

console.log("Hola, mi nombre es: " + nombre + " Mis apellidos son: " + apellidos);
/* BackStick es como si dentro de ella tuvieramos las comillas. Permite imprimir variables dentro de ${}*/
/* Dentro de las llaves podemos usar codigo de JavaScript */
console.log(`Hola, mi nombre es ${nombre} y mis apellidos son ${apellidos}`)

const arreglo = [1,2,3,4,5];
