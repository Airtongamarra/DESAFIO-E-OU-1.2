/*2. Escreva um algoritmo que faça as seguintes perguntas ao seu usuário, guarde as
respostas separadamente:
a. Se ele está com o cinto de segurança
b. Se ele está alcoolizado
c. Se o semáforo está verde
Com base nas respostas do usuário informe que o usuário pode prosseguir se
estiver com o cinto E não estiver alcoolizado E o semáforo estiver verde, se não
informar que ele não deve prosseguir.*/


var cinto = prompt(" voce esta com o sinto de segurança posto? 'S' ou 'N' ")
var bebeu = prompt(" Voce consumiu algum tipo de bebida alcoolica? 'S' ou 'N' ")
var semaforo = prompt( " O sinal esta verde ? 'S' ou 'N' ")
if(cinto == "n" || bebeu == "s" || semaforo == "n" ){
    console.log(" Voce nao pode prosseguir ")
}else{ 
    console.log(" Pode prosseguir ")
}