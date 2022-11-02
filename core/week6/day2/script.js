const ulDOMEl = document.querySelector('ul')

const contactos = localStorage.getItem('contactos');

// AQUI MUESTRO LOS QUE TENGO GUARDADOS EN LOCAL STORE
if (contactos) {
    const contactoObj = JSON.parse(contactos)
    contactoObj.forEach(contacto => ulDOMEl.innerHTML += `<li>${contacto.nombre}</li>`);
} else {
    ulDOMEl.innerHTML += `<li>SIN CONTACTOS</li>`
}

// AQUI TENGO EL EVENTO QUE LOS GUARDA EN LOCAL STORE AL PULSAR EL BOTON DEL FORM

const submitBtnDOMEl = document.querySelector('#btn-submit')

submitBtnDOMEl.onclick = function (e) {
    e.preventDefault()

    const nombre = document.querySelector ('#nombre').value
    const email = document.querySelector ('#email').value
    const mensaje = document.querySelector ('#mensaje').value
    const url = document.querySelector('#url').value
    if (nombre === "" || email === "" || mensaje === "" || url === "") {
        alert("RELLENA BIEN EL FORMULARIO")
        return false;
    }


    const contacto = {
        nombre,
        email,
        mensaje,
        url
    }
    
    if (!contactos) {
        const contactosArr = [contacto]
        localStorage.setItem('contactos', JSON.stringify(contactosArr));
    } else {    
       const contactosArr = JSON.parse(contactos)
       contactosArr.push(contacto)    
       localStorage.setItem('contactos', JSON.stringify(contactosArr));
    }

    ulDOMEl.innerHTML += `<li>${contacto.nombre}</li>`
}

