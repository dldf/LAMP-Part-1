const body = document.querySelector("body")

function getUser() {
let xhr = new XMLHttpRequest()
xhr.open("GET", "https://randomuser.me/api") // get some JSON: intlz req
xhr.send()                                   // make the request...
xhr.addEventListener("load", () => {         // after loaded, callback     
    userData = JSON.parse(xhr.response)      // string to a JSON object
    apiData.innerHTML = `<img  class="user" src=${userData.results[0].picture.large} alt="rando user">
        <h2 class="user">${userData.results[0].name.first} ${userData.results[0].name.last}</h2>`
})
}

getUser()
getBtn.addEventListener("click", getUser) // don't even need getElementByID