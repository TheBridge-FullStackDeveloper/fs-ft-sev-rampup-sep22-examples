(function loadSeed () {
    const allUsers = [
        {user: "usuario1", pass: "usuario1"},
        {user: "usuario2", pass: "usuario2"}
    ]

    db.remove('users')
    db.set('users', allUsers)
})()