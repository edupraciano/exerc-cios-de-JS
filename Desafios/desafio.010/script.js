function Calcular() {
  let a = Number(prompt("Qual o valor da variável a?"));
  let b = Number(prompt("Qual o valor da variável b?"));
  let c = Number(prompt("Qual o valor da variável c?"));
  let delta = b ** 2 - 4 * a * c;

    document.getElementById("res").innerHTML = `A equação atual é: ${a}X² + ${b}X + ${c} = 0 <br>
    O cálclulo realizado será &#916 = ${b}² - 4.${a}.${c} <br>
    O valor de &#916 é ${delta}.`;
}


