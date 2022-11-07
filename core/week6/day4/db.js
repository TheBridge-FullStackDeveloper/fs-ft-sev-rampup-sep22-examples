const db = {
    get: (key) => JSON.parse(localStorage.getItem(key)),
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    remove: (key) => localStorage.removeItem(key)
}

const ContactsData = (function() {
    let allContacts = db.get('contacts')

    const getContacts = () => clone(allContacts)

    const updateContacts = function(contacts) {
        allContacts = contacts
        
        if(isEmpty(contacts)) return db.remove("contacts")
        
        db.set("contacts", contacts)
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