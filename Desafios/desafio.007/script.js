function converter() {
  let cotacao = Number(prompt("Qual a cotação do dóllar?"));
  let reais = Number(prompt("Quanto você quer converter de reais para dólar?"));
  let dolar = Number(cotacao * reais);

  let reais_ = reais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  let dolar_ = dolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
 

  document.getElementById("res").innerHTML = `Com  ${reais_} você terá ${dolar_}`
}
