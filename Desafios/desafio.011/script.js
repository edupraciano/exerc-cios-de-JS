function verificar() {
  let ano = Number(prompt("Qual é o ano que você quer verificar?"));
    let eBis = ''
    if ((ano % 4 == 0) && ((ano % 100 != 0)) || (ano % 400 == 0)) {
        eBis = '<style>  {document.getElementById("btn").style.color = "#ffffff";} </style> <a class="Bissexto"> <strong> Bissexto ✔️ </strong> </a>';
    }
    else {
        eBis = '<strong> não é Bissexto </strong> ❌ '
    }
    
    document.getElementById("res").innerHTML = `Analisando o ano de ${ano}... <br>
    O ano de ${ano} ${eBis}`;
}


