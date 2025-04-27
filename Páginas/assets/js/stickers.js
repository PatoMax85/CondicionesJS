

document.getElementById("miBoton").addEventListener("click", () => {
    let valor_uno = document.getElementById("input_uno").value;
    let numero_uno = Number(valor_uno)|| 0;
    let valor_dos = document.getElementById("input_dos").value;
    let numero_dos = Number(valor_dos)|| 0;
    let valor_tres = document.getElementById("input_tres").value;
    let numero_tres = Number(valor_tres)|| 0;
    
    /*let resultado = Number(valor_uno) + Number(valor_dos) + Number(valor_tres)*/ /*sirve también pero ya tengo el number arriba*/

    let resultado = numero_uno + numero_dos + numero_tres
    if (resultado <= 0){
    document.getElementById("mensaje").textContent = "No has seleccionado ningún sticker"
    } else if (resultado == 1){
        document.getElementById("mensaje").textContent = "Seleccionaste un sticker"
    } else if (resultado == 2){
        document.getElementById("mensaje").textContent = "Llevas dos stickers"
    } else if (resultado == 3){
        document.getElementById("mensaje").textContent = "Llevas tres stickers"
    } else if (resultado == 4){
        document.getElementById("mensaje").textContent = "Llevas cuatro stickers"
    } else if (resultado == 5){
        document.getElementById("mensaje").textContent = "Llevas cinco stickers"
    } else if (resultado == 6){
        document.getElementById("mensaje").textContent = "Llevas seis stickers"
    } else if (resultado == 7){
        document.getElementById("mensaje").textContent = "Llevas siete stickers"
    } else if (resultado == 8){
        document.getElementById("mensaje").textContent = "Llevas ocho stickers"
    } else if (resultado == 9){
        document.getElementById("mensaje").textContent = "Llevas nueve stickers"
    } else if (resultado == 10){
        document.getElementById("mensaje").textContent = "Llevas diez stickers"
    } else{
        document.getElementById("mensaje").textContent = "¡Llevas demasiados stickers!"
    }


})
