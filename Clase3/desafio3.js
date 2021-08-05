let salir = false;
let usuario = 0;

do {
  usuario = parseInt(prompt("Ingrese una opcion:\n1) Contador \n2) Fibonacci \n3)Salir"));
  let numero;

  switch (usuario) {
    case 1:
      numero = parseInt(prompt("Ingrese hasta que numero quiere contar:"));
      for (let i = 0; i <= numero; i++) {
        console.log(i);    
      };
      break;
    case 2:
      numero = parseInt(prompt("Ingrese cuantos terminos de Fibonacci quiere:"));
      let n1 = 0, n2 = 1, proximo;
      for (let i = 1; i < numero; i++) {
        console.log(n1);
        proximo = n1 + n2;
        n1 = n2;
        n2 = proximo;        
      };
      break;
    case 3:
      salir = true;
      break;
    default:
      break;
  }
} while (!salir);