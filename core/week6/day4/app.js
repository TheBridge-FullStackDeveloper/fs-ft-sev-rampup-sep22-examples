addEventListener('DOMContentLoaded', (e) => {
   render() 
   
   $('body').addEventListener('click', (e) => {
        if (![
            $('#btnAddContact'), 
            ...$$('.delete'), 
            $('#btnLogin'), 
            $('#btnRemoveContacts'), 
            $('#btnLogout')
        ].includes(e.target)) return

        e.preventDefault()
            
        const { getContacts, updateContacts } = ContactsData
        const { getUsers, login, logout } = UsersData

        const users = getUsers();
        const contacts = getContacts()
      
        if (e.target === $('#btnAddContact')) {
            const [name, email, messege, url] = getFormValues('#fContacts input')
        
            const contact = { 
                id: Date.now(),
                name, email, messege, url 
            }
        
            const updatedContacts = (!contacts) 
                ? [contact] 
                : [...contacts, contact]
        
            updateContacts(updatedContacts)
        } else if (Array.from($$('.delete')).includes(e.target)) { 
            const contactId = +e.target.dataset.contact
        
            const updatedContacts = getContacts()
                .filter(({id}) => id !== contactId)
            
            updateContacts(updatedContacts)
        } else if (e.target  === $('#btnLogin')) {
            const [userInput, passInput] = getFormValues('#fLogin input')
         
            const loggedUser = users
                ?.find(({user, pass}) => 
                    user === userInput && 
                    pass === passInput)
          
            loggedUser && login(loggedUser)
        }
        else if (e.target === $('#btnRemoveContacts')) updateContacts([])
        else if (e.target === $('#btnLogout')) logout()
    
        render()  
    })
});