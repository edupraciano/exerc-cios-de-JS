// Q.001
function validar(){
    let num = (document.getElementById("txt1").value);
    document.getElementById("res1").innerHTML = `O número informado foi [${num}]`;
}

// Q.002
function converterCm() {
    let num2 = Number(document.getElementById("txt2").value);
    let cm = num2 * 100
    document.getElementById("res2").innerHTML = `${num2} metros tem ${cm} cm.`
}

// Q.003
function converterP() {
    let num3 = Number(document.getElementById("txt3").value);
    let p = num3 * 0.393700787 
    document.getElementById("res3").innerHTML = `${num3} centímetros tem ${p} polegadas.`
}

// Q.004
function calcularArea() {
    let raio = Number(document.getElementById("txt4").value)
    let area = Math.PI * raio ** 2
    document.getElementById("res4").innerHTML = `A área do círculo para o raio informado é : ${area} Cm²`
}

// Q.005
function converterC() {
    let num5 = Number(document.getElementById("txt5").value)
    let Celsius = (5 * (num5 -32) / 9)
    document.getElementById("res5").innerHTML = `${num5} ºF corresponde a ${Celsius} ºC`
}

// Q.006
function calcularMedia(){
    let n1 = Number(document.getElementById("bi1").value);
    let n2 = Number(document.getElementById("bi2").value);
    let n3 = Number(document.getElementById("bi3").value);
    let n4 = Number(document.getElementById("bi4").value);
    let media = (n1 + n2 + n3 + n4) / 4
    document.getElementById("res6").innerHTML = `A média final é ${media}`
}

// Q.007
function converterF() {
    let num7 = Number(document.getElementById("txt7").value)
    let Farenheit = (num7 * 1.8) + 32 
    document.getElementById("res7").innerHTML = `${num7} ºC corresponde a ${Farenheit} ºF`
}

// Q.008
function comparar(){
    let vgas = Number(document.getElementById("gas").value);
    let valc = Number(document.getElementById("alc").value);

    if (valc <= vgas * 0.7) {
        document.getElementById("res8").innerHTML = "Para esses valores, é mais vantajoso usar o álcool"
    } else {
        document.getElementById("res8").innerHTML = "Para esses valores, é mais vantajoso usar a Gasolina"
    }
}

