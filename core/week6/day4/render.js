const print = {
    allContacts(contacts) {
        $('ul').innerHTML = `<li>SIN CONTACTOS</li>`
        if(isEmpty(contacts)) return
        
        $('ul').innerHTML = ''    
        contacts.forEach(contact => this.printContact(contact));
    },
    printContact({name, id}) {
        let deleteBtn = `<button 
        data-contact="${id}"
        class="delete">borrar</button>`

        $('ul').innerHTML += `<li>${name}${deleteBtn}</li>`
    }
}

const render = () => {
    const { getContacts, contacts = getContacts() } = ContactsData   
    const { getUser, user = getUser()?.user} = UsersData

    const show = (state) => (state) ? 'block' : 'none'
    
    $('#fContacts').style.display = show(getUser())
    $('#fLogin').style.display = show(!getUser())
    
    $('#btnLogout').innerText = `Logout ${user}`
   
    print.allContacts(contacts || []); 
}