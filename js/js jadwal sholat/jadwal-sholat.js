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
const fullDate = `${Year}/${monthFix()}/${dayFix()}`;
const fullDateBulanan = `${Year}/${monthFix()}`;

const getJadwalShalat = () => {
    fetch(`https://api.myquran.com/v1/sholat/jadwal/${valueParameter}/${fullDate}`)
    .then(data => data.json())
    .then(data => {
        const contentRow = `
        <div class="col-md-12 mb-3 ">
          <div class="card text-center border-black">
            <div class="card-body">
              <div class="fs-1"><i class="bi bi-geo-alt-fill"></i></div>
              <h3 class="card-title">${data.data.lokasi}, ${data.data.daerah}</h3>
              <h5 class="card-text">${data.data.jadwal.tanggal}</h5>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <ol class="list-group list-unstyled ">
            <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
              <div class="ms-2 me-auto m-auto">
                <div class="fw-bold">Imsak</div>
              </div>
              <span class="badge sky-blue-700 rounded-pill fs-6">${data.data.jadwal.imsak}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subuh</div>
              </div>
              <span class="badge sky-blue-700 rounded-pill fs-6">${data.data.jadwal.subuh}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Terbit</div>
              </div>
              <span class="badge sky-blue-700 rounded-pill fs-6">${data.data.jadwal.terbit}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Dhuha</div>
              </div>
              <span class="badge sky-blue-700 rounded-pill fs-6">${data.data.jadwal.dhuha}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Dzuhur</div>
              </div>
              <span class="badge sky-blue-700 rounded-pill fs-6">${data.data.jadwal.dzuhur}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Ashar</div>
              </div>
              <span class="badge sky-blue-700 rounded-pill fs-6">${data.data.jadwal.ashar}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start   border-black border border-bottom-0">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Maghrib</div>
              </div>
              <span class="badge sky-blue-700 rounded-pill fs-6">${data.data.jadwal.maghrib}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start   border-black border">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Isya'</div>
              </div>
              <span class="badge sky-blue-700 rounded-pill fs-6">${data.data.jadwal.isya}</span>
            </li>
          </ol>
          <button onclick="window.location.href='jadwal-sholat-per-bulan.html?idkota=${data.data.id}'" type="button" class="mt-3 p-2 rounded-2 border-black border sky-blue-300">Liat Jadwal Per Bulan</button>
        </div>`
        const placeRow = document.getElementById('preview-jadwal-sholat')
        placeRow.innerHTML = contentRow

        const titePage = document.getElementById('title-halaman')
        titePage.textContent = `${data.data.lokasi} - ahmadzidni.site`
    })

};
getJadwalShalat();


