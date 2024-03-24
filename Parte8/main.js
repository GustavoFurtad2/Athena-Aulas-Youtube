let funcionarios = [
    "Michael",  // 0
    "Franklin", // 1
    "Trevor",   // 2
]

function pegarNome(numero) {

    const funcionario = funcionarios[numero - 1]
    if (funcionario == undefined) {
        return "Funcionario inexistente"
    } else {
        return funcionario
    }
}

console.log(pegarNome(3))
while (true) {
    Screen.clear()

    Screen.flip()
}
