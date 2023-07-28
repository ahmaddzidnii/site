let queryString = window.location.search;
let urlParam = new URLSearchParams(queryString);
let valueParameter = urlParam.get('idsurah')
// console.log(valueParameter)

function getIsiTafsir() {
  showLoad()
  fetch(`https://equran.id/api/v2/tafsir/${valueParameter}`)
  .then(response => response.json())
  .then(response => {
    hideLoad();
         // judul halaman
        const judulHalaman = document.getElementById('title-halaman')
        const isiJudul = `Tafsir Surah ${response.data.namaLatin} (${response.data.jumlahAyat} Ayat)`
        const judulSurat = document.querySelector('.judul-surat')
        const cardJudulSurat = `
                         <h1 class="card-title" >${response.data.namaLatin}  (${response.data.nama}) (${response.data.arti})</h1>
                          <h6 class="card-subtitle mb-2 text-body-secondary">${response.data.jumlahAyat} Ayat. (Urutan ke ${valueParameter} dalam Al-quran)</h6>
                          <p class="card-text">Tempat turun : ${response.data.tempatTurun}</p>
                          <strong><p class="card-text">Deskripsi Surah :</p></strong>
                          <p align="justify" class="card-text"> ${response.data.deskripsi}</p>
                          <figcaption  class="mt-5 mb-2 p-2">Dengarkan Surah ${response.data.namaLatin} Full ${response.data.jumlahAyat} Ayat disini:</figcaption>
                             <audio style="width: 100%;"
                                 controls
                                 src="${response.data.audioFull['05']}"> 
                             </audio>
        `
        judulSurat.innerHTML = cardJudulSurat
        judulHalaman.textContent = isiJudul



        // TENTANG BUTTON HALAMAN NAVIGASII

        const NavigasiSuratSelanjutnya = `<a href="tafsir-alquran.html?idsurah=${response.data.suratSelanjutnya.nomor}" class=" mt-3 p-2 rounded-2 border-black text-decoration-none text-black border sky-blue-300 y" id="next">Surat Selanjutnya : ${response.data.suratSelanjutnya.namaLatin}<a/>`

        
        window.addEventListener('keydown', e => {
          // ALT + N
          if (e.key.toLowerCase() === 'n' && e.altKey){
            next.focus();
            // ALT + M
          } else  if (e.key.toLowerCase() === 'm' && e.altKey){
            back.focus();
          }
        })


        const NavigasiSuratSebelumnya = `<a href="tafsir-alquran.html?idsurah=${response.data.suratSebelumnya.nomor}" class=" mt-1 p-2 rounded-2 border-black text-decoration-none text-black border sky-blue-300 p" id="back">Surat Sebelumnya : ${response.data.suratSebelumnya.namaLatin}<a/>`
        
        
        const navigasiHalaman = document.getElementById('tombol-navigasi-next')
        const navigasiHalamanBefore = document.getElementById('tombol-navigasi-before')
        navigasiHalaman.innerHTML = NavigasiSuratSelanjutnya
        navigasiHalamanBefore.innerHTML = NavigasiSuratSebelumnya

            const next = document.getElementById('next')
            const back = document.getElementById('back')

        // PENGKONDISIAN AWAL DAN AKHIR SURAT MISAL JIKA HALAMAN SURAT TERAKHIR AKA TOMBOL NEXT TIDAK MUNCUL
        const y = document.querySelector('.y')
        const x = response.data.suratSelanjutnya
        
        
        if(x==false) {
            y.classList.add('hidden-list')

        } else {
           y.classList.remove('hidden-list')
        }

        const p = document.querySelector('.p')
        const z = response.data.suratSebelumnya
     

        if(z==false){
            p.classList.add('hidden-list')
        }

        // End Pengkondisisan


        // isi surat
        const Tafsir = response.data.tafsir
        let isiSurat = ''
        Tafsir.forEach(x => {
            isiSurat += `
            <div class="card rounded-5 mb-3">
            <div class="card-body ms-3 me-3">
              <p class=" text-center card-title card-title mt-3 badge rounded-5 text-bg-primary fs-5 font-custom text-center mb-2">${x.ayat}</p>         
              <h5 class="card-text mt-4">Tafsir :</h5>
              <p class="card-text" align="justify">${x.teks}</p>
            </div>
          </div>
            `
          })
        const isiFull = document.getElementById('isi-surat-full')
        isiFull.innerHTML = isiSurat
    })
}


getIsiTafsir()