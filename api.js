const botao = document.getElementById("button");
const gatosimg = document.getElementById("showcase")
const key = "live_e9nrI0SHakPHMVMBCniQgSkH7RsEbAUR1gKavpnIQq3tdempFZIOxS5tw2B9YWd0"

button.addEventListener("click", fetchPics);

async function fetchPics() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${key}`)
    .then(response => response.json())
    .then((data) => {
        let catsImgUrl = data[0].url

        gatosimg.setAttribute('src', `${catsImgUrl}`)
        
        let catImg = document.getElementById("catImg")
        catImg.appendChild(gatosimg)
    })
    .catch(err => console.log(err))
    console.log(response)
}