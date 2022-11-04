const ulDOMEl = document.querySelector('ul')

const printContacto = ({nombre}) => {

    let liContacto = `<li>${nombre}`
    liContacto += `<button class="borrar" data-contacto="${nombre}">borrar</button>`
    liContacto += `</li>`

    ulDOMEl.innerHTML += liContacto;

}


    

const printAllContacto = (contactos) => {
    ulDOMEl.innerHTML = ''
    contactos.forEach(contacto => printContacto(contacto));
}

const render = () => {
    const fContacto = document.querySelector('#fContacto')

    const fLogin = document.querySelector('#fLogin')

    const logoutBt = document.querySelector('#logout')


    fLogin.style.display = (usuarioLogueado) 
    ? 'none'
    : 'block'


    logoutBt.style.display = (usuarioLogueado) 
        ? 'block'
        : 'block'


    fContacto.style.display = (usuarioLogueado) 
        ? 'block'
        : 'none'

   
    if (contactos.length) {
        printAllContacto(contactos);
    } else {
        printAllContacto([]);
        ulDOMEl.innerHTML += `<li>SIN CONTACTOS</li>`
    }
}

render()