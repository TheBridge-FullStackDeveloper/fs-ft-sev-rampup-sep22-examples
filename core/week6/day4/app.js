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
        const { getUsers, getUser, login, logout } = UsersData

        const user = getUser();
        const users = getUsers();
        const contacts = getContacts(user)
      
        if (e.target === $('#btnAddContact')) {
            if (!user) return

            const [name, email, messege, url] = getFormValues('#fContacts input')
        
            const contact = { 
                id: Date.now(),
                user,
                name, email, messege, url 
            }
        
            const updatedContacts = (!contacts) 
                ? [contact] 
                : [...contacts, contact]
        
            updateContacts(updatedContacts, user)
        } else if (Array.from($$('.delete')).includes(e.target)) { 
            const contactId = +e.target.dataset.contact
            
            const updatedContacts = contacts
                .filter(({id}) => id !== contactId)
            
            updateContacts(updatedContacts, user)
        } else if (e.target  === $('#btnLogin')) {
            const [userInput, passInput] = getFormValues('#fLogin input')
         
            const loggedUser = users
                ?.find(({user, pass}) => 
                    user === userInput && 
                    pass === passInput)
          
            loggedUser && login(loggedUser)
        }
        else if (e.target === $('#btnRemoveContacts')) updateContacts([], user)
        else if (e.target === $('#btnLogout')) logout()
    
        render()  
    })
});