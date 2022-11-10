const db = {
    get: (key) => JSON.parse(localStorage.getItem(key)),
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    remove: (key) => localStorage.removeItem(key)
}

const ContactsData = (function() {
    let allContacts = db.get('contacts') || []
    
    const getContacts = ({name}) => allContacts
        ?.filter(({user}) => user.name = name)

    const updateContacts = function(contacts, user) {
      
        let updatedContacts = allContacts
            .filter((contact) => user.name != contact?.user.name)

        updatedContacts = [...updatedContacts, ...contacts] 
        if(isEmpty(updatedContacts)) return db.remove("contacts")
        
        db.set("contacts", updatedContacts)
    }
    
    return { getContacts, updateContacts }
})();

const UsersData = (function() {
    const allUsers = db.get('users')
    let loggedUser = db.get('loggedUser')

    const getUsers = () => clone(allUsers)
    const getUser = () => clone(loggedUser)
    
    const login = (user) => {
        db.set('loggedUser', user)
        loggedUser = user
    }

    const logout = () => {
        db.remove('loggedUser')
        loggedUser = null
    } 

    return {getUsers, getUser, login, logout}
})();