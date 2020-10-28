function action() {
  let produto = prompt("Qual produto vc está comprando?");
  let preco = Number(prompt(`Quanto custa o ${produto} que vc está comprando?`));
  let pago = Number(prompt(`Qual foi o valor que vc pagou pelo ${produto}`));
  let troco = pago - preco;

  let preco_ = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  let pago_ = pago.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  let troco_ = troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  alert(`Você comprou ${produto} que custou ${preco_}. \n Pagou ${pago_} em dinheiro e vai receber ${troco_} de troco. \n Obrigado e volte sempre!` );
}
