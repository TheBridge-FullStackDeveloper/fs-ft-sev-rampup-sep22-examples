
// const user = getUser()

// const commits = getCommits(user) // EJERCICIO 1
// commits.then((commits) => console.log("Estos son tus commits"))

// user
//     .then((user) => getRepos(user))
//     .then((repos) => getCommits())
//     .then((commits) => console.log(commits));


// ASYNC/AWAIT
//-----------------
// Con el azucar sintáctico async/await se consigue ejecutar tareas asyncronas (displayCommits) con lógica sincronada implementada dentro de una función no bloqueante

async function displayCommits(user) {
    try {
        const repos = await getRepos(user) // Espero a obtener repos de una promesa
        const commits = await getCommits(repos) // Espera a obtener commits de una promesa
        console.log("vamooooooooo");
        console.log(commits);
    } catch (err) {
        console.log("vemooooo");
        console.log(err);
    }
}

displayCommits({id: 3})

console.log("FIN"); // Se imprime antes


// async function obtenPerros(user) {
//     const result = await fetch('http://laapideperro.com')
//     const data = await result.json()
//     
//     // AQUI HAGO COSAS CON DATA
// }

// fetch('http://laapideperro.com')
//     .then((res) => res.json())
//     .then((data) => {
//       
//      // AQUI HAGO COSAS CON DATA
// }


function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {id: 3}
           
            resolve(user)
        }, 3000)
    })  
}

function getRepos(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const repos = {repo1: 23, repo2: 43, repo3: 55}
       
            resolve(repos[0])
        }, 3000)
    })
}

function getCommits(repos) {
    return new Promise((resolve, reject) => {
        console.log("Obteniendo commits", repos);
        setTimeout(() => {
            const commits = {c: "vamos", c2: "rafa"}
       
            resolve(commits)
        }, 3000)
    })
}