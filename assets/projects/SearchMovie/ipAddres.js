// $.ajax ({
//     url : 'https://api.ipify.org?format=json',
//     success : function(html){
//        let Ip = html.search;
//        $.each(html,function(i,ip){
//         console.log(ip)

//         $('#ip-client').append(`<h1>${ip}</h1>`)

//        })
//     }
// })


$.ajax ({
    url : 'https://ipapi.co/json/',


    success : function(html){

            $('#ip-client').append (`
                <div class="container">
                    <div class="row">
                             <ul class="list">
                                <li style="list-style:none;" class="list-item-group"><h3>`+ html.ip +`</h3></li>
                                <li style="list-style:none;" class="list-item-group"><h3>`+ html.version +`</h3></li>
                                <li style="list-style:none;" class="list-item-group"><h3>`+ html.org +`</h3></li>
                                <li style="list-style:none;" class="list-item-group"><h3>`+ html.city +`</h3></li>
                                <li style="list-style:none;" class="list-item-group"><h3>`+ html.country_name +`</h3></li>
                             </ul>
                         </div>
                     </div>
                </div>
                `)
        
    }
})


