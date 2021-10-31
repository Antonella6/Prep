// Crea una variable "string", puede contener lo que quieras:
const  nuevaString  =  'Franco' ;

// Crea una variable numérica, puede ser cualquier número:
const  nuevoNum  =  27 ;

// Crea una variable booleana:
const  nuevoBool  =  verdadero ;

// Resuelve el siguiente problema matemático:
const  nuevaResta  =  10  -  5  ===  5 ;

// Resuelve el siguiente problema matemático:
const  nuevaMultiplicacion  =  10  *  4  ===  40  ;

// Resuelve el siguiente problema matemático:
const  nuevoModulo  =  21  %  5  ===  1 ;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando se te pida.
// Pista: "console.log ()" NO fucionará.
// No cambies los nombres de las funciones.

función  resta ( x ,  y )  {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return  x  -  y ;
}

function  sonIguales ( x ,  y )  {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
  // Opción 1:
  // si (x === y) {
  // devuelve verdadero;
  // } demás {
  // falso retorno;
  //}

  // Opción 2:
  return  x  ===  y ;
}

function  tienenMismaLongitud ( str1 ,  str2 )  {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
  // Opción 1:
  // if (str1.length === str2.length) {
  // devuelve verdadero;
  // } demás {
  // falso retorno;
  //}

  // Opción 2:
  return  str1 . longitud  ===  str2 . longitud ;
}

function  menosQueNoventa ( num )  {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:

  // Opción 1:
  // si (num <90) {
  // devuelve verdadero;
  // } demás {
  // falso retorno;
  //}

  // Opción 2:
  return  num  <  90 ;
}

function  esImpar ( num )  {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  // Opción 1:
  // si (num% 2! == 0) {
  // devuelve verdadero;
  // } demás {
  // falso retorno;
  //}

  // Opción 2:
  return  num  %  2  ! ==  0 ;
}

function  elevarAlCuadrado ( num )  {
  // Devuelve el valor de "num" elevado al cuadrado
  // Ojo: ¡No es raiz cuadrada!
  // Tu código:
  return  num  *  num ;
}

function  elevar ( num ,  exponent )  {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:

  // Opción 1:
  // devuelve num ** exponente;

  // Opción 2:
  devuelve  Math . pow ( num ,  exponente ) ;
}

function  esPositivo ( numero )  {
  // La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  // Si el número es positivo, devolver ---> "Es positivo"
  // Si el número es negativo, devolver ---> "Es negativo"
  // Si el número es 0, devuelve false

  // Opción 1:
  // si (numero> 0) {
  // devuelve 'Es positivo';
  //} else if (numero <0) {
  // devuelve 'Es negativo'
  // } demás {
  // falso retorno;
  //}

  // Opción 2:
  if ( numero  >  0 )  return  'Es positivo' ;
  if ( numero  <  0 )  return  'Es negativo' ;
  devolver  falso ;
}

function  combinarNombres ( nombre ,  apellido )  {
  // Devuelve "nombre" y "apellido" combinados en una cadena y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return  nombre  +  ''  +  apellido ;
}

function  retornarPerimetro ( lado ) {
  // Escibe una función a la cual recibió el valor del lado de un cuadrado y retorne su perímetro.
  // Tu código:

  // Opción 1:
  // regresa lado * 4;

  // Opción 2:
  return  lado  +  lado  +  lado  +  lado ;
}

function  deEuroAdolar ( euro ) {
  // Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que recibió
  // como parámetro un número de euros y calcule el cambio en dólares.
  // Tu código:
  devolución  euro  *  1,2 ;
}


function  esVocal ( letra ) {
  // Escribe una función que recibe una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  // Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  // que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Tu código:
  if ( letra . length  >  1 )  return  'Dato incorrecto' ;

  if ( letra  ===  'a'  ||  letra  ===  'e'  ||  letra  ===  'i'  ||  letra  ===  'o'  ||  letra  ===  'u' )  {
    volver  'Es vocal' ;
  }
}

función  obtenerMayor ( x ,  y )  {
  // "x" e "y" son números enteros.
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  si ( x  >  y )  {
    return  x ;
  }  más  {
    volver  y
  }
}

/ *
Para implementar la siguiente función vamos a utilizar una estructura de control de flujo nueva, 
llamada switch, si no estás familiarizado con esta estructura, es un buen escenario para hacer 
una visita al mejor amigo del programador, INTERNET! 
En la carrera del desarrollador constantemente es necesario recurrir a los recursos que nos 
proporciona la web (Google, YouTube, MDN, Stack Overflow, y muchos más) en búsqueda de las 
herramientas necesarias para resolver los distintos problemas que nos enfrentamos, por lo que 
aprender a realizar estas búsquedas en internet es uno de los skill más importantes que 
adquirir!
En tu buscador basta con simplemente escribir "switch Javascript" y listo. Éxitos!
* /
 colores de función ( color )  {
  // La función recibe un color. Devolver el hilo correspondiente:
  // En caso que el color recibido sea "blue", devuleve -> "This is blue"
  // En caso que el color recibido sea "red", devuleve -> "This is red"
  // En caso que el color recibido sea "green", devuleve -> "This is green"
  // En caso que el color recibido sea "orange", devuleve -> "This is orange"
  // Caso predeterminado: devuelve -> "Color no encontrado"
  // Usar el enunciado Switch.
  // Tu código:
  cambiar  ( color )  {
    caso  'azul' :
      return  'Esto es azul' ;
    caso  'rojo' :
      return  'Esto es rojo' ;
    caso  'verde' :
      return  'Esto es verde' ;
    caso  'naranja' :
      return  'Esto es naranja' ;
    por defecto :
      return  'Color no encontrado' ;
  }
}

function  esDiezOCinco ( numero )  {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  // Opción 1:
  // si (numero === 5 || numero === 10) {
  // devuelve verdadero;
  // } demás {
  // falso retorno;
  //}

  // Opción 2:
  return  numero  ===  5  ||  numero  ===  10 ;
}

function  estaEnRango ( numero )  {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

  // Opción 1:
  // if (numero <50 && numero> 20) {
  // devuelve verdadero;
  // } demás {
  // falso retorno;
  //}

  // Opción 2:
  return  numero  <  50  &&  numero  >  20 ;
}

function  esPrimo ( numero )  {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son seleccionados números primos
  // Tu código:
  if ( numero  ===  0  ||  numero  ===  1 )  {
    devolver  falso ;
  }

  para  ( var  i  =  2 ;  i  <  numero ;  i ++ )  {
    if ( numero  %  i  ===  0 )  devuelve  falso ;
  }
  devuelve  verdadero ;
}

function  doWhile ( numero )  {
  // Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  // Retornar el valor final.
  // Pueden usar un while o un bucle do ... while (Investigarlo si quieren hacerlo de la segunda forma)
  // Tu código:
  
  var  veces  =  0 ;
  while ( veces  <  8 )  {
    numero  =  numero  +  5 ;
    veces ++ ;
  }
  return  numero ;
}



// No modificar nada debajo de esta línea