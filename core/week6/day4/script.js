const submitBtnDOMEl = document.querySelector('#btn-submit')
submitBtnDOMEl.onclick = function (e) {
    e.preventDefault()

    const nombre = document.querySelector ('#nombre').value
    const email = document.querySelector ('#email').value
    const mensaje = document.querySelector ('#mensaje').value
    const url = document.querySelector('#url').value

    const contacto = {
        nombre,
        email,
        mensaje,
        url
    }

    contactos = (!contactos) ? [contacto] : [...contactos, contacto]
    
    localStorage.setItem('contactos', JSON.stringify(contactos));
    

   render()
}


const loginBtnDOMEl = document.querySelector('#btn-login')

const logoutBt = document.querySelector('#logout')



loginBtnDOMEl.onclick = function (e) {
    e.preventDefault()
    const user = document.querySelector('#user').value
    const pass = document.querySelector('#pass').value

    const currentUser = usuarios.find((usuario) => user === usuario.user && pass === usuario.pass)

    if (currentUser) {
        localStorage.setItem("usuarioLogueado", JSON.stringify(currentUser))
        logoutBt.innerText = `Logout ${currentUser.user}`  
    }
    checkLogin()
    render()
}

const borrarTodosBt = document.querySelector('#borrarTodos')

borrarTodosBt.onclick = function (e) {
    localStorage.removeItem('contactos')
    contactos = []

    render()
}

logoutBt.onclick = function (e) {
    localStorage.removeItem('usuarioLogueado')

    checkLogin()
    render()
}

ulDOMEl.onclick = function (e) {
    if (e.target.classList.contains('borrar')) {
        const nombreContacto = e.target.dataset.contacto

        contactos = contactos.filter(
            (contacto) => contacto.nombre !== nombreContacto
        )

        localStorage.setItem("contactos", JSON.stringify(contactos))
        render()

    }
}





