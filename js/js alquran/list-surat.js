const inputSearch = document.getElementById('search-kolom');
const getSurah = () => {
    fetch('https://equran.id/api/v2/surat')
    .then(data => data.json())
    .then(data => {
        const result = data.data

        let listSurah = '';
        result.forEach(s => {
            listSurah += ` <div class="col-md-12">
            <ul class="list-group list-unstyled">
              <li class=" bg-light border border-1 border-black p-3 rounded-2 mb-2 hover query-search" onclick="location.href='alquran.html?idsurah=${s.nomor}'"><a class="text-decoration-none text-black  text-center">${s.namaLatin} <span class="ms-1">|</span> </a>  <span class=" ms-1">${s.arti}</span><span class="ms-1">|</span> </a>  <span class="fs-4 ms-1">${s.nama}</span></li>
            </ul>
          </div>`
        });
        const domListSurah = document.getElementById('list-surah');
        domListSurah.innerHTML = listSurah;
        // console.log(result)
    })
    inputSearch.addEventListener('keyup', function() {
        const querySearch = document.querySelectorAll('.query-search')
  
        querySearch.forEach(x => {
          const filterText = inputSearch.value.toLowerCase()
          const itemText = x.firstChild.textContent.toLowerCase()
          if(itemText.indexOf(filterText)!= -1) {
            x.setAttribute("style", "display: block")
        } else {
            x.setAttribute("style", "display: none !important")
            
        } 
        });
        
      });
};

getSurah();