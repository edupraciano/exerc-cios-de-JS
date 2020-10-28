function converter() {
  let distancia = Number(prompt("Digite uma distância em metros (m)"));
  let km = (distancia / 1000).toFixed(4);
  let hm = (distancia / 100).toFixed(4);
  let dam = (distancia / 10).toFixed(4);
  let dm = (distancia / 10).toFixed(4);
  let cm = (distancia / 100).toFixed(4);
  let mm = (distancia / 1000).toFixed(4);

  document.getElementById("res").innerHTML = `A distãncia de ${distancia} m corresponde a: <br>
    ${km} (Km)  <br>
    ${hm} (Hm)  <br>
    ${dam} (Damm)  <br>
    ${dm} (dm)  <br>
    ${cm} (cm)  <br>
    ${mm} (mm) `
}
