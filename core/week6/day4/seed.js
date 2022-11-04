function restaurarDatos () {
   const users = [
       {user: "usuario", pass: "usuario"},
       {user: "usuario2", pass: "usuario2"},
   ]

   localStorage.removeItem('usuarios')
   localStorage.setItem('usuarios', JSON.stringify(users))
}

restaurarDatos()

let contactos =  JSON.parse(localStorage.getItem('contactos'));


