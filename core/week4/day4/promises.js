

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        
        const img = document.createElement('img');


        img.src = data.message // url (string)
        document.body.appendChild(img)
    
    })
    .catch(error => console.log())



const promise = new Promise((resolve, reject) => {
    const onSuccess = true

    if(!onSuccess) {
        reject("error")
    }
    
    setTimeout(() => {
        resolve("Ey se resolvio")
      }, 3000);
});

promise
    .then(response => console.log(response))
    .catch(error => console.log(error))
    