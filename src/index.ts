let Calcular = document.getElementById("Calcular");
let tiempo1 = document.getElementById("dato1");
let tiempo2 = document.getElementById("dato2");
let tiempo3 = document.getElementById("dato3");
let tiempo4 = document.getElementById("dato4");

Calcular.addEventListener("click", () => {
  let T1: number = Number(tiempo1.value);
  let T2: number = Number(tiempo2.value);
  let T3: number = Number(tiempo3.value);
  let T4: number = Number(tiempo4.value);

  let tiempoTotal = 0;
  tiempoTotal = T1 + T2 + T3 + T4;

  let promedioPorVuelta = tiempoTotal / 4;

  console.log("El Tiempo Total es de:" + tiempoTotal);
  console.log("El Promedio Por Vuelta es:" + promedioPorVuelta);
});
