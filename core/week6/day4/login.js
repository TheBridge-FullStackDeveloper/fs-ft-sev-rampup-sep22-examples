let usuarios, usuarioLogueado

function checkLogin() {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));

    usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))
}

checkLogin()

