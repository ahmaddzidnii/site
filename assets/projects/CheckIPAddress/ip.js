
$.ajax ({
    url : 'https://ipapi.co/json/',


    success : function(result){
        // console.log(result)

            $('#ip').append (`
                <div class="container">
                    <div class="row">
                             <ul class="list">
                                <li style="list-style:none;" class="list-item-group"><h3>`+ result.ip +`</h3></li>
                         </div>
                     </div>
                </div>
                `)
            $('#isp').append (``+ result.org +``)
            $('#network').append (``+ result.network +``)
            $('#city').append (``+ result.city +``)
            $('#version').append (``+ result.version +``)
            $('#latitude').append (``+ result.latitude +``)
            $('#longitude').append (``+ result.longitude +``)
            $('#region').append (``+ result.region +``)
            $('#negara').append (``+ result.country_name +``)
            $('#kota').append (``+ result.country_capital+``)
            $('#timezone').append (``+ result.utc_offset+``)
        
    }
})
