function Enviar(){
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")


    if (nome.value!="" && nome.value.indexPf(" ")!=-1) {
        if (email.value.indexOf("@")!=-1) {
            alert(nome.value+" agradecemos o seu conato")
        } else {
            alert("Digite um email valido")
        }
    } else {
        alert("Preencha o seu nome completo")
    }

}
