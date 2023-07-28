const inputSearch = document.getElementById('search-kolom');

const getKota = () => {
    showLoad();
    fetch('https://api.myquran.com/v1/sholat/kota/semua')
    .then(data => data.json())
    .then(data => {
      hideLoad()
        let CardKota = '';
        data.forEach(x => {
            CardKota += ` <div class="col-md-12">
            <ul class="list-group list-unstyled">
              <li class=" bg-light border border-1 border-black p-3 rounded-2 mb-2 hover query-search" onclick="location.href='jadwal-sholat-per-bulan.html?idkota=${x.id}'"><a class="text-decoration-none text-black  text-center "> ${x.lokasi}</a></li>
            </ul>
          </div>`
        });
        const placeListKota = document.getElementById('list-kota')
        placeListKota.innerHTML = CardKota
    });
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

getKota();