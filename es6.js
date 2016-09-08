// ************************* ARROW FUNCTIONS **********************************

/*
    Normalmente cada funcion define su 'this'
    Genera errores sutiles
 */

function Gato(){
    this.meow = "MEOW!!";

    setTimeout(function(){
        console.log(this.meow);
    },500);
}
var g = new Gato();

/*
    Con Arrow Functions el 'this' es el mismo que el de su contexto
 */

function Gato2(){
    this.meow = "MEOW!!";

    setTimeout(() => console.log(this.meow),500);
}
var g = new Gato2();

//*****************************************************************************



// ************************* CLASSES ******************************************

/*
    Normalmente las clases se definian como funciones. Este cambio es solo sintactico.
    Una diferencia es que las clases no presentan hoisting.
*/

function Perro(){

}
var perro1 = new Perro();

class Perro2{
    constructor(){}
}
var perro2 = new Perro2();

//*****************************************************************************


// ************************* ENHANCED OBJECT LITERALS *************************

var algo = "otraCosa"
var a = {
    algo
};

//*****************************************************************************



// ************************* DESTRUCTURING ************************************

var a = [1,2,3];
var b = {a};
var c = ["c",...a,"d"];

//*****************************************************************************


// ************************* LET + CONST ************************************

console.log(a++);
var x = 1;

console.log(w++);
let w = 1;
console.log(w++);

const xx = 2;
xx = 3; // error

//*****************************************************************************


//*************************** GENERATORS **************************************

function *generator(){
    // yield expression no es un statement
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

for(let v of generator()){
    console.log(v);
}

function* withPromise(){
    try{
        let a = yield http.get("/api/something");
    }catch(ex){
        console.error(ex);
    }
}

//*****************************************************************************

//*************************** MODULES *****************************************

export default variable = 5;

import variable from "path/al/js" 

//*****************************************************************************

//*************************** PROMISES ****************************************

http.get("/api/something")
    .then(/* algo que devuelve una Promise */)
    .then(/* puede ser encadenadas N veces */)
    .catch(/* si en algun paso hay una excepcion se hace catch aca */);

//*****************************************************************************