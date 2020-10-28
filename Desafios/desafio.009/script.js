function reajuste() {
  let funcionario = prompt("Qual é o nome do Funcionário?");
  let salarioAtual = Number(prompt(`Qual é o salário atual de ${funcionario}?`));
  let porcentagem = Number(prompt("Qual será o percentual de reajuste?"));
  let reajuste = Number(salarioAtual * porcentagem) / 100;
  let novoSalario = Number(salarioAtual + reajuste);


  let salarioAtual_ = salarioAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  let reajuste_ = reajuste.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  let novoSalario_ = novoSalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
 

    document.getElementById("res").innerHTML = `${funcionario} recebeu uma aumento salaria! <br />
    O salário atual era ${salarioAtual_} <br />
    Com um aumento de ${porcentagem}%, o salário vai aumentar ${reajuste_} no próximo mês. <br />
    E a partir daí, ${funcionario} vai passar a ganhar ${novoSalario_}.`;
}


