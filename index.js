
//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal





let nomeDoHeroi = "Alberto"
let quantidadeDeVitorias = 10
let quantidadeDeDerrotas = 3
let saldoDeVitorias = diferença(quantidadeDeVitorias,quantidadeDeDerrotas)
let nivelDoHeroi = nivel(quantidadeDeVitorias)
console.log("\nO  herói " + nomeDoHeroi + " tem saldo de " + saldoDeVitorias + " vitórias. Seu nível é \n" +nivelDoHeroi)


 nomeDoHeroi = "José"
 quantidadeDeVitorias = 5
 quantidadeDeDerrotas = 3
 saldoDeVitorias = diferença(quantidadeDeVitorias,quantidadeDeDerrotas)
 nivelDoHeroi = nivel(quantidadeDeVitorias)
console.log("\nO herói " + nomeDoHeroi + " tem saldo de " + saldoDeVitorias + " vitórias. Seu nível é \n" + nivelDoHeroi)


function diferença (quantidadeDeVitorias, quantidadeDeDerrotas){

return quantidadeDeVitorias-quantidadeDeDerrotas

}

function nivel (quantidadeDeVitorias){

    if (quantidadeDeVitorias<=10){
        nivelDoHeroi == "Ferro"

    } else if ((10<quantidadeDeVitorias) && (quantidadeDeVitorias<20)){
        nivelDoHeroi == "Bronze"

    }









}



