const getAsmaulHusna = () => {
    fetch('json/asmaulhusna/alldata.json')
.then(data => data.json())
.then(data => {
    const result = data.data
    let listAsmaulHusna = ''
    result.forEach(r => {
        listAsmaulHusna += `<div class="col-md-12">
        <ul class="list-group list-unstyled">
          <li class=" bg-light border border-1 border-black p-3 rounded-2 mb-2 hover query-search" onclick="location.href='asmaulhusna.html?id=${r.index}'"><a class="text-decoration-none text-black  text-center "> ${r.latin}</a></li>
        </ul>
      </div>`
      const getIdListAsmaulHusna = document.getElementById('list-asmaul-husna');
      getIdListAsmaulHusna.innerHTML = listAsmaulHusna;

      
    });
    //   search list asmaul husna
    const inputSearch = document.getElementById('search-kolom');

    inputSearch.addEventListener('keyup', function(){
        const listAsmaulHusna = document.querySelectorAll('.query-search')
        listAsmaulHusna.forEach(a => { 
            // filter pencarian
            const filterText = inputSearch.value.toLowerCase()
            const itemText = a.firstChild.textContent.toLowerCase()
    
            if(itemText.indexOf(filterText)!= -1) {
                a.setAttribute("style", "display: block")
            } else {
                a.setAttribute("style", "display: none !important")
                
            }
        })
    })
    
})
};
getAsmaulHusna();
    