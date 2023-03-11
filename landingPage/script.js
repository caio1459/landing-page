function enviar() {
    let email = window.document.querySelector("input#txtn")
    let nome = window.document.querySelector("input#txte")
    let e = String(email.value)
    let n = String(nome.value)

    if (n == 0 || e == 0) {
        window.alert("[ERRO] campos não preenchidos")
    } else {
        window.alert("Tudo certo!")
    }
}

var res = window.document.querySelector("div#cab")

function entrar(){
    res.style.color = "blueviolet"
}

function sair(){
    res.style.color = "white"
}