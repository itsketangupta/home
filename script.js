const results = document.getElementById("results")
const chapters = document.getElementById("chapters")
const reader = document.getElementById("reader")

async function searchManga(){

let query = document.getElementById("searchInput").value

let res = await fetch(`https://api.consumet.org/manga/mangadex/${query}`)
let data = await res.json()

results.innerHTML=""

data.results.forEach(manga=>{

results.innerHTML += `
<div class="card" onclick="loadManga('${manga.id}')">
<img src="${manga.image}">
<p>${manga.title}</p>
</div>
`

})

}

async function loadManga(id){

let res = await fetch(`https://api.consumet.org/manga/mangadex/info?id=${id}`)
let data = await res.json()

chapters.innerHTML=""

data.chapters.forEach(ch=>{

chapters.innerHTML += `
<button onclick="readChapter('${ch.id}')">
${ch.title}
</button>
`

})

}

async function readChapter(id){

let res = await fetch(`https://api.consumet.org/manga/mangadex/read?id=${id}`)
let data = await res.json()

reader.innerHTML=""

data.pages.forEach(page=>{

reader.innerHTML += `<img src="${page}">`

})

}