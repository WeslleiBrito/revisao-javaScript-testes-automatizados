// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const novoArray = []
    for (i = array.length - 1; i > -1; i--) {
        novoArray.push(array[i])
    }
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayOrdenado = []
    const copiaArray = array.slice()
    let menorNumero

    for (i = 0; i < array.length; i++) {
        for (k = 0; k < copiaArray.length; k++) {
            if (k === 0) {
                menorNumero = copiaArray[k]
            } else {
                if (menorNumero > copiaArray[k]) {
                    menorNumero = copiaArray[k]
                }
            }
        }

        copiaArray.splice(copiaArray.indexOf(menorNumero), 1)
        arrayOrdenado.push(menorNumero)
    }

    return arrayOrdenado

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const novoArray = array.filter((numero) => numero % 2 === 0)
    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter((numero) => numero % 2 === 0)
    return numerosPares.map((numero) => numero * numero)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero

    for (i = 0; i < array.length; i++) {
        if (i === 0) {
            maiorNumero = array[i]
        } else {
            if (maiorNumero < array[i]) {
                maiorNumero = array[i]
            }
        }
    }

    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    return {
        maiorNumero: num1 > num2 ? num1 : num2,
        maiorDivisivelPorMenor: num1 - num2 >= 0 ? num1 % num2 === 0 : num2 % num1 === 0,
        diferenca: num1 - num2 >= 0 ? num1 - num2 : num2 - num1
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPares = []
    let numeroPar = -2

    for (i = 0; i < n; i++) {
        numeroPar += 2
        arrayPares.push(numeroPar)
    }

    return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoC === ladoA) {
        return 'Equilátero'
    } else if ((ladoA === ladoC && ladoB !== ladoA) || (ladoA === ladoB && ladoA !== ladoC) || (ladoB === ladoC && ladoA !== ladoB)) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = retornaArrayOrdenado(array)

    return [arrayOrdenado[arrayOrdenado.length - 2], arrayOrdenado[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.toString().replaceAll(',', ', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome: 'anônimo'.toUpperCase()
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => (pessoa.idade > 14 && pessoa.idade < 60) && (pessoa.altura >= 1.5))
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => !(pessoa.idade > 14 && pessoa.idade < 60) || !(pessoa.altura >= 1.5))

}

function somarValoresArray(array) {
    let total = 0
    for (valor of array) {
        total += valor
    }

    return total
}
// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    for (let indice in contas) {
        let valorCompras = somarValoresArray(contas[indice].compras)
        contas[indice].saldoTotal -= valorCompras
        contas[indice].compras = []
    }

    return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const nomes = consultas.map((objeto) => objeto.nome).sort()
    const novaCondulta = []
    for (let indice in nomes) {
        for (let objeto of consultas) {
            if (objeto.nome === nomes[indice]) {
                novaCondulta.push(objeto)
            }
        }
    }
    return novaCondulta
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let data
    let datas = []
    const novaConsulta = []
    let dataString
    let dataVerifica
    let nomesJaInseridos = []

    for (let consulta of consultas) {
        data = consulta.dataDaConsulta
        data = new Date(`${data.slice(-4)}-${data.slice(-7, -5)}-${data.slice(0, 2)}`)
        datas.push(data.getTime())
    }

    datas = datas.sort((a, b) => a - b)

    for (let data of datas) {
        for (let consulta of consultas) {
            dataString = `${consulta.dataDaConsulta.slice(-4)}-${consulta.dataDaConsulta.slice(-7, -5)}-${consulta.dataDaConsulta.slice(0, 2)}`
            dataVerifica = new Date(dataString)
            if (dataVerifica.getTime() === data && !nomesJaInseridos.includes(consulta.nome)) {
                novaConsulta.push(consulta)
                nomesJaInseridos.push(consulta.nome)

            }
        }
    }

    return novaConsulta
}