    function analisar() {
        let aluno = prompt("Digite o nome do aluno.");
        let nota1 = Number(prompt(`Digite a primeira nota de ${aluno}`));
        let nota2 = Number(prompt(`Digite a segunda nota de ${aluno}`));
        let media = (nota1 + nota2) / 2;
        
        
        document.getElementById("res").innerHTML = `Analisando a situação de ${aluno} <br>
        Com as notas ${nota1} e ${nota2}, a média é ${media}`; 

        if (media < 3) {
        console.log("Aluno Reprovado")
        } else if (media >= 3 && media < 6) {
            console.log("Aluno em Recuperação")
        } else {
            console.log("Aluno Aprovado")
        }      
    }
      
      