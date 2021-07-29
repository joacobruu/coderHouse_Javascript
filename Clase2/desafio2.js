let nombre = prompt("Ingrese nombre del alumno:")
let calificacion = parseInt(prompt("Ingrese su calificacion:"));
let asistencia = prompt("Asistio todas las clases?:\n1) Si\n2) No");

if(asistencia == 1) {
  asistencia = true;
} else {
  asistencia = false;
}

if (calificacion >= 9) {
  alert(nombre + " esta aprobado");
} else if ((calificacion >= 7) && (asistencia)) {
  alert(nombre + " esta aprobado");
} else if ((calificacion >= 7) && (!asistencia)) {
  alert(nombre + " debe rendir el final");
} else if (calificacion >= 4 && calificacion <7) {
  alert(nombre + " debe rendir el final");
} else {
  alert(nombre + " debe recursar");
}