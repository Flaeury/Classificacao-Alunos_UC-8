let listaDeAlunos =  ["Leonardo", "Robson", "João", "Raiane"];
let quantidadeAlunos = 5;

for (let contador = 0; contador < listaDeAlunos.length; contador++) {
    console.log(contador)

    if (contador == 0) {
        console.log(`O aluno ${listaDeAlunos[contador]} é número ZERO`)

    } else if (contador % 2 == 0){
        console.log(`O aluno ${listaDeAlunos[contador]} é número PAR`)

    }else if (contador % 2 != 0){
        console.log(`O(A) aluno(a) ${listaDeAlunos[contador]} é número ÍMPAR`)
    }
}



