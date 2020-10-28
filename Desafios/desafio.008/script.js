function calcularDesconto() {
  let produto = prompt("Qual é o produto que deseja comprar?");
  let preco = Number(prompt(`Qual é o preço do ${produto}?`));
  let desconto = Number(preco * 0.1);
  let precoFinal = Number(preco - desconto);

  let preco_ = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  let desconto_ = desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  let precoFinal_ = precoFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  
    document.getElementById("res").innerHTML = `Calculando o desconto de 10% para ${produto} <br>
    O preço original era ${preco_} <br>
    Você acaba de ganhar ${desconto_} de desconto (-10%) <br> 
    No fim vc vai pagar ${precoFinal_} pelo produto ${produto} `;
}


