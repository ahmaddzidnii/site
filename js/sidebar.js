 // Ambil elemen sidebar, tombol hamburger, dan kontainer utama
 const sidebar = document.getElementById('sidebar');
 const sidebarToggle = document.getElementById('sidebarToggle');
 const sidebarToggle2 = document.getElementById('sidebarToggle2');
 const mainContent = document.querySelector('.col-md-9');

 // Fungsi untuk mengubah tampilan sidebar pada layar hp
 function toggleSidebar() {
     sidebar.classList.toggle('d-none'); // Tambahkan atau hapus class 'd-none'
     mainContent.classList.toggle('col-md-9'); // Tambahkan atau hapus class 'col-md-9'
     mainContent.classList.toggle('col-12'); // Tambahkan atau hapus class 'col-12'
 }

 // Tambahkan event listener ke tombol hamburger
 sidebarToggle.addEventListener('click', toggleSidebar);

 
const Toggle1 = document.querySelector('.bi-list') 
const Toggle2 = document.querySelector('.bi-list-check')


sidebarToggle.addEventListener('click', function(){
    Toggle2.classList.remove('d-none')
    Toggle1.classList.add('d-none')
})
sidebarToggle2.addEventListener('click', function(){
    Toggle2.classList.add('d-none')
    Toggle1.classList.remove('d-none')
    sidebar.classList.toggle('d-none'); // Tambahkan atau hapus class 'd-none'
    mainContent.classList.toggle('col-md-9'); // Tambahkan atau hapus class 'col-md-9'
    mainContent.classList.toggle('col-12'); // Tambahkan atau hapus class 'col-12'
})



 
// shorcut 
window.addEventListener('keydown', e => {

    if(e.key.toLocaleLowerCase() === "m" && e.ctrlKey ) {
         const kolomSearch = document.querySelector('#search-kolom')
         kolomSearch.focus();
    }
})

// sortcut Menu

window.addEventListener('keydown', e => {
    // ALT + A
      if (e.key.toLowerCase() === 'a' && e.altKey){
        window.location.href="list-surah.html"
      }
      // ALT + B
      else if (e.key.toLowerCase() === 'b' && e.altKey){
        window.location.href="list-kota.html"
      } 
      // ALT + C
      else if (e.key.toLowerCase() === 'c' && e.altKey){
        window.location.href="list-doa-harian.html"
      }
      // ALT + D
      else if (e.key.toLowerCase() === 'd' && e.altKey){
        window.location.href="list-asmaul-husna.html"
      }
        //  ALT + H 
        else if (e.key.toLowerCase() === 'h' && e.altKey){
            window.location.href="index.html"
        }
    })


    

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))