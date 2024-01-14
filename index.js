


let nomeDoHeroi = "Alberto"
let saldoDeVitorias = diferença(150,3)
let nivelDoHeroi = classificaçao (saldoDeVitorias)
console.log("\nO  herói " + nomeDoHeroi + " tem saldo de " + saldoDeVitorias + " vitórias. Seu nível é \n" + nivelDoHeroi)


 nomeDoHeroi = "ítalo"
 saldoDeVitorias = diferença(5,3)
 nivelDoHeroi = classificaçao (saldoDeVitorias)
console.log("\nO  herói " + nomeDoHeroi + " tem saldo de " + saldoDeVitorias + " vitórias. Seu nível é \n" + nivelDoHeroi)


function diferença (quantidadeDeVitorias, quantidadeDeDerrotas){

return quantidadeDeVitorias-quantidadeDeDerrotas

}

function classificaçao (saldoDeVitorias){

    if(saldoDeVitorias<=10){
        return "Ferro"

    } else if ((saldoDeVitorias>=11) && (saldoDeVitorias<=20)){
        return "Bronze"

    }else if ((saldoDeVitorias>=21) && (saldoDeVitorias<=50)){
        return "Prata"

    }else if ((saldoDeVitorias>=51) && (saldoDeVitorias<=80)){
        return "Ouro"

    }else if ((saldoDeVitorias>=81) && (saldoDeVitorias<=90)){
        return "Diamante"

    }else if ((saldoDeVitorias>=91) && (saldoDeVitorias<=100)){
        return "Lendário"
    } else{
        return "Imortal"
    }




}

