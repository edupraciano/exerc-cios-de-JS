function verificar() {
  let ano = Number(prompt("Qual é o ano que você quer verificar?"));
    
    if ((ano % 4 == 0) && ((ano % 100 != 0)) || (ano % 400 == 0)) {
        let bi = true;
    }
    
    

    document.getElementById("res").innerHTML = `Analisando o ano de ${ano}... <br>
    O ano de ${ano}  `;
}


