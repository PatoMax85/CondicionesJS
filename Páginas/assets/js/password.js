document.getElementById("miBoton").addEventListener("click", () => {
    let valor_uno = document.getElementById("selector_uno").value;
    let valor_dos = document.getElementById("selector_dos").value;
    let valor_tres = document.getElementById("selector_tres").value;
    
    resultado = valor_uno + valor_dos + valor_tres

    if(resultado === "9" + "1" + "1"){
        document.getElementById("mensaje").textContent = "Password 1 correcto"
    } else if(resultado === "7" + "1" + "4"){
        document.getElementById("mensaje").textContent = "Password 2 correcto"
    } else {
        document.getElementById("mensaje").textContent = "Password incorrecto"
    }


})

