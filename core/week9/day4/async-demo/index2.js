
// CALLBACK HELL

// Obteniendo datos de un usuario en gitHub

// console.log("Obteniendo usuario...");
//     setTimeout(() => {
        
//         const user = {id: 3}
//         console.log("Obteniendo repos de " + user);
//         // Obtener los repos del user
//         setTimeout(() => {
//             const repos = {repo1: 23, repo2: 43, repo3: 55}
//             console.log("Obteniendo commits de " + repos.repo1);
//             // Obtener commits
//             setTimeout(() => {
//                 const commits = {c: "vamos", c2: "rafa"}
//                 console.log(commits);
//             }, 3000)
//         }, 3000)
//     }, 3000)   

console.log("LA PILA DE EVENTOS SIGUE CORRIENDO");

// Intentamos aplanar el código para evitar callback hell usando callbacks pero esparcimos la lógica y no resulta facil de seguir
 
function getUser() {
    console.log("Obteniendo usuario...");
    setTimeout(() => {
        const user = {id: 3}
        console.log("Obteniendo repos de " + user);
        // Obtener los repos del user
        setTimeout(getRepos, 1000)
    }, 1000)   
}

getUser()

function getRepos() {
    const repos = {repo1: 23, repo2: 43, repo3: 55}
    console.log("Obteniendo commits de " + repos.repo1);
    // Obtener commits
    setTimeout(getCommits, 1000)
}

function getCommits() {
    const commits = {c: "vamos", c2: "rafa"}
    console.log(commits);
}


