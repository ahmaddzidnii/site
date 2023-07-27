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
//   console.log(id);
  
  // ambil data dari JSON
  
  const getAsmaulHusna = () => {
      fetch(`json/asmaulhusna/${id}.json`)
      .then(data => data.json())
      .then(data => {
        // console.log(data)
          const result = data.data
          
  
          const id1 = document.getElementById('asmaul-husna')
          const title1 = document.getElementById('title-halaman')
          
          const isiDoa1 = ` <div class="col-md-12">
          <div class="card mt-5 border border-1 border-black sky-blue-50">
              <div class="card-body">
                <h3 class="card-title text-center fw-bold"> ${result[0].index}. ${result[0].latin}</h3>
              </div>
            </div>
      </div>
      <div class="col-md-12">
          <div class="card mt-1 border border-1 border-black sky-blue-50">
              <div class="card-body">
                <h1 class="card-title text-center  font-khusus">${result[0].arabic}</h1>
              </div>
            </div>
      </div>
      <div class="col-md-12">
          <div class="card mt-1 border border-1 border-black sky-blue-50">
              <div class="card-body">
                <h3 class="card-title text-center text-sentence text-capitalize">${result[0].translation_id}</h3>
              </div>
            </div>
      </div>
      <div class="col-md-12">
          <div class="card mt-1 border border-1 border-black sky-blue-50">
              <div class="card-body">
                <h3 class="card-title text-center">${result[0].translation_en}</h3>
              </div>
            </div>
      </div>
      `
  
      id1.innerHTML =isiDoa1;
      title1.innerHTML = `${result[0].latin} - ahmadzidni.site`;
      });
  }
  
getAsmaulHusna();
  
  const tooltipTriger = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const toolltipContent = [...tooltipTriger].map(tooltipE1 => new bootstrap.Tooltip(tooltipE1))
  