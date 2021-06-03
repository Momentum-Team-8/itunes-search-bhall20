const url ='https://proxy-itunes-api.glitch.me/search?'
const form = document.getElementById('search-field')
const searchInput = document.getElementById('search-button').value


function ListofSongs() {
fetch (url + "term=" + `${search}` + "&limit=10entity=song&explicit=Yes")
.then (response => resp.json())
.then (data => {
for (let x of data.results) {
renderResults(x)
}
})
}

function renderResults()
document.createElementById("search-results").innerHTML

// How do you render the list to finish the function?
// Reading the documentation in the API helped me understand the keys