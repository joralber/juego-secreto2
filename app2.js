// Crea una lista vacía llamada "listaGenerica".

let listagenerica=[];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajedeProgramacion=['javascript', 'C++', 'C', 'kotlin', 'python'];
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajedeProgramacion.push('java');

lenguajedeProgramacion.push('ruby');
lenguajedeProgramacion.push('golang');

console.log(lenguajedeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.


function mostrarTodosLosElementos(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

mostrarTodosLosElementos(lenguajedeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguajedeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajedeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();

// Crea una función que calcule el promedio de los elementos en una lista de números.


// let  listaN=[2,5,3,2,5,3,5];
function listaPromedio(listaN){
    let suma =0;
for(let i=0;i<listaN.length;i++){
 suma +=listaN[i];
}    
return suma/listaN.length;

}
let  listaN=[2,3,5,6,4];

console.log(listaPromedio(listaN));

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function listaMayorMenor(listaN) {
    let maximo = listaN[0];
    let minimo = listaN[0];
    for(let i=1; i<listaN.length; i++){
        if(listaN[i]>maximo){
            maximo = listaN[i];
         //   console.log(maximo);

        }
        if(listaN[i]<minimo){
            minimo = listaN[i];
        }
    }         
     return `el numero maximo ${maximo} y el menor ${minimo}`;

}
console.log(listaMayorMenor(listaN));
// Crea una función que devuelva la suma de todos los elementos en una lista.


function sumando(lista){
    let suma=0;
    for(let i=0; i<lista.length; i++){
        suma+=lista[i];    
           console.log(suma)

        }

        return suma;

}
let listaN=[3,4,3,2];

console.log(sumando(listaN));

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.


function listaelemento (lista, elemento){
    for(let i=0; i<lista.length; i++){
        if(lista[i] === elemento){
            return i;
        }
    }
    return -1
}

let listaN=[3,4,3,2];

console.log(listaelemento(listaN, 2));


// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaLista(lista1, lista2){
    let suma=[];
    if(lista1.length===lista2.length){
       
        for(i=0; i<lista1.length; i++){
      suma.push(lista1[i]+lista2[i]);
        }
   

    }else{
        return 'Deben Ser Del Mismo Tamaño'
    }
    return suma;
}

let listaN1=[3,2,4,5,2];
let listaN2=[2,3,5,3];
console.log(listaN1+'\n');
console.log(listaN2+'\n');
console.log(sumaLista(listaN1,listaN2));


// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.




console.log('\n'+listaN1);

function listaCuadrado(listac){
    listaNueva=[];
    for(let a=0; a<listac.length; a++){
       listaNueva.push(listac[a]* listac[a]);
    }
    return listaNueva;
}

console.log(listaCuadrado(listaN1));
