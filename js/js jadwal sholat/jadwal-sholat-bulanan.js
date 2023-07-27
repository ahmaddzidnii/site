let queryString = window.location.search;
let urlParam = new URLSearchParams(queryString);
// console.log(urlParam)
let valueParameter = urlParam.get('idkota')



const getDate = new Date();
const Day = getDate.getDate();
const Month = getDate.getMonth() + 1;
const Year  = getDate.getFullYear();

// tambaah 0 di month dan day 
const dayFix = () => {
    if(Day < 10){
        day = `0${Day}`
    } else {
        day = Day
    }
    return day;
}

const monthFix = () => {
    if(Month < 10){
        month =`0${Month}`
    } else {
        month = Month
    } return month;
}
const fullDateBulanan = `${Year}/${monthFix()}`;


const getJadwalShalatBulanan= () => {
    fetch(`https://api.myquran.com/v1/sholat/jadwal/${valueParameter}/${fullDateBulanan}`)
    .then(data => data.json())
    .then(data => {
      const location = `<div class="col-md-12 mb-3 ">
      <div class="card text-center border-black">
        <div class="card-body">
          <div class="fs-1"><i class="bi bi-geo-alt-fill"></i></div>
          <h3 class="card-title">${data.data.lokasi}, ${data.data.daerah}</h3>
        </div>
      </div>
    </div>`
    const tampilocation = document.getElementById('preview-jadwal-sholat-bulanan')
    tampilocation.innerHTML = location
    })

    fetch(`https://api.myquran.com/v1/sholat/jadwal/${valueParameter}/${fullDateBulanan}`)
    .then(data => data.json())
    .then(data => {
        let x = data.data.jadwal
        // console.log(x)  
        let content = '';
        Object.values(x).forEach(j => {
            content += `<div class="col-md-12">
            <ol class="list-group list-unstyled ">
              <li class="list-group-item d-flex justify-content-center align-items-start   border-black border border-bottom-0">
                <div class="ms-2">
                  <div class="fw-bold fs-2"><i class="bi bi-calendar"></i> ${j.tanggal}</div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
                <div class="ms-2 me-auto m-auto">
                  <div class="fw-bold">Imsak</div>
                </div>
                <span class="badge sky-blue-700 rounded-pill fs-6">${j.imsak}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subuh</div>
                </div>
                <span class="badge sky-blue-700 rounded-pill fs-6">${j.subuh}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Terbit</div>
                </div>
                <span class="badge sky-blue-700 rounded-pill fs-6">${j.terbit}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Dhuha</div>
                </div>
                <span class="badge sky-blue-700 rounded-pill fs-6">${j.dhuha}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Dzuhur</div>
                </div>
                <span class="badge sky-blue-700 rounded-pill fs-6">${j.dzuhur}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Ashar</div>
                </div>
                <span class="badge sky-blue-700 rounded-pill fs-6">${j.ashar}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Maghrib</div>
                </div>
                <span class="badge sky-blue-700 rounded-pill fs-6">${j.maghrib}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start   border-black border mb-3">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Isya'</div>
                </div>
                <span class="badge sky-blue-700 rounded-pill fs-6">${j.isya}</span>
              </li>
            </ol>
          </div>`
          const y = document.getElementById('jadwal-sholat-bulanan')
          y.innerHTML = content
        })
        
    })
  }
  
  getJadwalShalatBulanan();