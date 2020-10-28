function converter() {
  let Celcius = Number(prompt("Digite uma temperatura em graus Célcius (ºC)"));
  let Farenheit = ((Celcius * 1.8) + 32).toFixed(2);
  let Kelvin = (Celcius + 273.15).toFixed(2);
 

  document.getElementById("res").innerHTML = `A temperatura de ${Celcius} º C corresponde a: <br>
    ${Farenheit} (ºF)  ou  ${Kelvin} K`
}
