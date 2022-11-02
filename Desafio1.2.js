var cinto = prompt(" voce esta com o sinto de segurança posto? 'S' ou 'N' ")
var bebeu = prompt(" Voce consumiu algum tipo de bebida alcoolica? 'S' ou 'N' ")
var semaforo = prompt( " O sinal esta verde ? 'S' ou 'N' ")
if(cinto == "n" || bebeu == "s" || semaforo == "n" ){
    console.log(" Voce nao pode prosseguir ")
}else{ 
    console.log(" Pode prosseguir ")
}