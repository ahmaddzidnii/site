// Variabel Search Movie

// query tolong carikan saya element yang ber id ...


const searchMovie = () => {
    // sebelum eksekusi buat html ilang
    $('#movie-list').html('');

    // pemanggilan API Untuk get list
    $.ajax ({
        url: 'https://www.omdbapi.com',
        type: 'get',
        dataType : 'json',
        data: {

            'apikey' : '6c33f790',
            's': $('#search-input').val(),
           
        },
        
        success: function (result) {
           

            if (result.Response == "True") {
                let movies = result.Search;

                $.each(movies, function(i,data) {
                    $('#movie-list').append(`
                        <div class = "col-md-3">
                        <div class="card p-2 mb-2">
                        <img src="`+ data.Poster +`" class="card-img-top" style="height: 400px;">
                        <div class="card-body">
                            <h5 class="card-title t"><b>`+ data.Title +`</b></h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary"><strong>`+ data.Year +`</strong></h6>
                            <a href="#" class="card-link see-detail text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+data.imdbID +`">Baca Detail Film</a>
                        </div>
                        </div>
                    `);
                })
              


            } else {
                notFound();
            }
        }
        
        
    });
    $('#search-input').val('');

}

// fungsi jika film tidak ditemukan sweetalert

function notFound() {
    
    swal({

         title: "Maaf, Film atau Acara TV Yang Anda Cari Tidak Ditemukan !!!",

         icon: "error",

         button: true

     });

 }

//  end

// Fungsi Button
$ ('#search-button') .on('click', function ()  {
    searchMovie() ;
   
});

// Fungsi Tombol Enter
$ ('#search-input'). on('keyup', function (event) {
    if(event.keyCode === 13) {
        searchMovie() ;
    }
})


$ ('#movie-list').on('click', '.see-detail', function () {
    
    // Pemangilan API Deskripsi Films
    $.ajax ({
        url: 'https://www.omdbapi.com',
        type: 'get',
        dataType : 'json',
        data: {

            'apikey' : '6c33f790',
            'i': $(this).data('id')          
        },
        success: function(movie) {
            if(movie.Response ==='True') {

                $('.modal-body').html (`
                <div class="container">
                    <div class="row">
                         <div class="col-md-4">
                            <img src = "`+ movie.Poster +`" class="img-fluid"></div>
                         <div class="col-md-8">
                             <ul class="list-group">
                                <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                                <li class="list-group-item">Rilis : `+ movie.Released +`</li>
                                <li class="list-group-item">imdbRating : `+ movie.imdbRating +`</li>
                                <li class="list-group-item">Penghargaan : `+ movie.Awards +`</li>
                                <li class="list-group-item">Genre : `+ movie.Genre +`</li>
                                <li class="list-group-item">Bahasa : `+ movie.Language +`</li>
                                <li class="list-group-item">Negara : `+ movie.Country +`</li>
                                <li class="list-group-item">Director : `+ movie.Director +`</li>
                                <li class="list-group-item">Plot : `+ movie.Plot +`</li>
                                <li class="list-group-item">Aktor : `+ movie.Actors +`</li>
                             </ul>
                         </div>
                     </div>
                </div>
                `)
            }
        }
    });
    
});