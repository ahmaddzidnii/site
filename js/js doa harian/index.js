// api
const inputSearch = document.getElementById('search-kolom')



fetch('json/doaharian/data.json')
.then(data => data.json())
.then(data => {
    const result = data.data
    // console.log(result)
    let response = ''
    result.forEach(d => {
        
        response += `  
        <div class="col-md-12">
        <ul class="list-group list-unstyled">
          <li class=" bg-light border border-1 border-black p-3 rounded-2 mb-2 hover query-search" onclick="location.href='doa.html?id=${d.id}'"><a class="text-decoration-none text-black  text-center "> ${d.title}</a></li>
        </ul>
      </div>`

    const row = document.getElementById('list-doa')
    row.innerHTML = response
    
})
inputSearch.addEventListener('keyup', function(){
    const listDoa = document.querySelectorAll('.query-search')
    listDoa.forEach(k => {
        // filter pencarian
        const filterText = inputSearch.value.toLowerCase()
        const itemText = k.firstChild.textContent.toLowerCase()

        if(itemText.indexOf(filterText)!= -1) {
            k.setAttribute("style", "display: block")
        } else {
            k.setAttribute("style", "display: none !important")
            
        }
        // k.addEventListener('click', function() {
        //    listHasilPencarianSurat.classList.add('hidden-list')
        //     console.log(idKota)
        // })
    })
    
})
})


// const getDoa = () => {
//     fetch('data.json')
//     .then(data => data.json())
//     .then(data => { console.log(data)
//         const hasil = data.data
//         let isiDoa = ''
//         hasil.forEach(k => {
//             isiDoa += `<div class="col-md-12  mb-0 p-3" id="${k.arabic}">
//             <div class="card">
//               <div class="card-body">
//                 <h3 class="card-title text-center mb-3">${k.title}</h3>
//                 <h3 class="text-end card-subtitle mb-2 text-body-secondary">${k.arabic}</h3>
//                 <p class="card-text text-end">${k.latin}</p>
//                 <p class="card-text">${k.translation}</p>
//               </div>
//             </div>
//           </div>`

//           const Doa = document.getElementById('doa')

//           Doa.innerHTML = isiDoa
//         })
//     })
// }

// getDoa()