// parameter url
function getURL(e){
  const pageURL = window.location.search.substring(1);
  const urlVariable = pageURL.split('&');

  for(let i = 0; i < urlVariable.length; i++) {
      const parameterName = urlVariable[i].split('=');
      if(parameterName[0] == e){
          return parameterName[1];
      }
  };
};

const id = getURL('id');
// console.log(id);

// ambil data dari JSON

const getDoa = () => {
    fetch(`json/doaharian/${id}.json`)
    .then(data => data.json())
    .then(data => {
      // console.log(data)
        const result = data.data
        

        const id1 = document.getElementById('doa1')
        const title1 = document.getElementById('title-halaman')
        
        const isiDoa1 = `<div class="col-md-12">
        <div class="card mt-5 border border-1 border-black sky-blue-50">
            <div class="card-body">
              <h3 class="card-title text-center fw-bold">${result[0].title}</h3>
            </div>
          </div>
    </div>
    <div class="col-md-12">
        <div class="card mt-1 border border-1 border-black sky-blue-50">
            <div class="card-body">
              <h1 class="card-title text-center  font-khusus">بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
            </div>
          </div>
    </div>
    <div class="col-md-12">
        <div class="card mt-1 p-2 border border-1 border-black sky-blue-50">
            <div class="card-body">
              <h1 class="card-subtitle mt-3 mb-2 text-body-secondary text-end font-khusus">${result[0].arabic}</h1>
              <p class="card-text  fst-italic text-end">${result[0].latin}</p>
              <span>Terjemahan : </span>
              <p class="card-text " style="text-align: justify;">${result[0].translation}</p>
            </div>
          </div>
    </div>`

    id1.innerHTML =isiDoa1;
    title1.innerHTML = `${result[0].title} - ahmadzidni.site`;
    });
}

getDoa();

const tooltipTriger = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const toolltipContent = [...tooltipTriger].map(tooltipE1 => new bootstrap.Tooltip(tooltipE1))
