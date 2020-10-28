function verificar() {
    
    let precoAnterior = Number(prompt("Qual é o preço anterior do produto?"));
    let precoAtual = Number(prompt("Qual é o preço atual do produto?"));
    let variacao = precoAtual - precoAnterior;

    if (variacao > 0) {
        console.log("O produto está mais caro")
    } else {
        console.log("O produto está mais barato")
    }
  
   
  
    let precoAnterior_ = precoAnterior.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let precoAtual_ = precoAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
   
  
      document.getElementById("res").innerHTML = `Analisando os valores informados <br> 
      O produto custava ${precoAnterior_} e agora custa ${precoAtual_}. <br>
      O produto está mais caro`;
  }
  
  
  