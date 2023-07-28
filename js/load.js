const Loader = document.getElementById('pre-loader')
window.addEventListener("load", function() {
    Loader.style.display = "none"
})


// loader Fetch 
const loader = document.getElementById('loader-fetch')

function showLoad(){
    loader.classList.add('d-block')
}
function hideLoad(){
    loader.classList.add('d-none')
}
