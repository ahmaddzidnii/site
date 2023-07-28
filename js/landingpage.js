// fetch api yt

function getDataYT() {
    fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCUmQyCj8_vpW3sAt3Jd0X2w&key=AIzaSyDQf-7D3cHdqWKxy5gDj_Ppnm-X07eoCYw')
    .then(data=> data.json())
    .then(data => {
      
        const result = data.items[0].snippet
        const cardYT = document.getElementById('yt')

        const card = `<div class="col-md-6">
        <div class=" sky-blue-200">
          <div class="card-body">
            <img class="rounded-circle img-thumbnail"
            src="${result.thumbnails.high.url}"
            alt="" width="200px">
            <h5 class="card-text mt-2">${result.title}</h5>
            <p class="card-text mt-2">${data.items[0].statistics.subscriberCount} Subscriber</p>
            <div style="text-indent: 0px; margin: 0px; padding: 0px; background: transparent; border-style: none; float: none; line-height: normal; font-size: 1px; vertical-align: baseline; display: inline-block; width: 115px; height: 24px;" id="___ytsubscribe_0"><iframe ng-non-bindable="" frameborder="0" hspace="0" marginheight="0" marginwidth="0" scrolling="no" style="position: static; top: 0px; width: 115px; margin: 0px; border-style: none; left: 0px; visibility: visible; height: 24px;" tabindex="0" vspace="0" width="100%" id="I0_1690164600116" name="I0_1690164600116" src="https://www.youtube.com/subscribe_embed?usegapi=1&amp;channelid=UCUmQyCj8_vpW3sAt3Jd0X2w&amp;layout=default&amp;count=default&amp;origin=http%3A%2F%2F127.0.0.1%3A5500&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.S9zOXUg9rrA.O%2Fd%3D1%2Frs%3DAHpOoo-AXjUK4hNAaKzui0P9Fr9nG2_yZQ%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1690164600116&amp;_gfid=I0_1690164600116&amp;parent=http%3A%2F%2F127.0.0.1%3A5500&amp;pfname=&amp;rpctoken=36053950" data-gapiattached="true"></iframe></div>
          </div>
        </div>
      </div>`

      cardYT.innerHTML = card
        // console.log(result)
    })
    .catch(err => {
      const cardYT = document.getElementById('yt')
        const card = `<div class="col-md-6">
        <div class=" sky-blue-200">
          <div class="card-body">
            <img class="rounded-circle img-thumbnail"
            src="https://yt3.ggpht.com/5TT-vjjGa5tRwdqjeQX75vK_jTSJJLuJQNlEmYx1eMWv3AnNRhoDtogqnuOZ9kxvoNdsR3Vj1w=s176-c-k-c0x00ffffff-no-rj-mo"
            alt="yt" width="200px">
            <h5 class="card-text mt-2">Madz Channel</h5>
            <p class="card-text mt-2"> 345 Subscriber</p>
            <div style="text-indent: 0px; margin: 0px; padding: 0px; background: transparent; border-style: none; float: none; line-height: normal; font-size: 1px; vertical-align: baseline; display: inline-block; width: 115px; height: 24px;" id="___ytsubscribe_0"><iframe ng-non-bindable="" frameborder="0" hspace="0" marginheight="0" marginwidth="0" scrolling="no" style="position: static; top: 0px; width: 115px; margin: 0px; border-style: none; left: 0px; visibility: visible; height: 24px;" tabindex="0" vspace="0" width="100%" id="I0_1690164600116" name="I0_1690164600116" src="https://www.youtube.com/subscribe_embed?usegapi=1&amp;channelid=UCUmQyCj8_vpW3sAt3Jd0X2w&amp;layout=default&amp;count=default&amp;origin=http%3A%2F%2F127.0.0.1%3A5500&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.S9zOXUg9rrA.O%2Fd%3D1%2Frs%3DAHpOoo-AXjUK4hNAaKzui0P9Fr9nG2_yZQ%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1690164600116&amp;_gfid=I0_1690164600116&amp;parent=http%3A%2F%2F127.0.0.1%3A5500&amp;pfname=&amp;rpctoken=36053950" data-gapiattached="true"></iframe></div>
          </div>
        </div>
      </div>`
      cardYT.innerHTML = card
      console.log('maaf api udah LIMIT :v')})
    


    const endpoint = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCUmQyCj8_vpW3sAt3Jd0X2w&key=AIzaSyDQf-7D3cHdqWKxy5gDj_Ppnm-X07eoCYw&maxResults=4&order=viewcount'

    fetch(endpoint) 
    .then(data => data.json())
    .then(data => {

      const video =  `
      <div class="col-md-6 mb-3 ">
      <iframe class="rounded" src="https://www.youtube.com/embed/${data.items[0].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
      <div class="col-md-6 mb-3">
      <iframe class="rounded" src="https://www.youtube.com/embed/${data.items[1].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
      <div class="col-md-6 mb-3">
      <iframe class="rounded" src="https://www.youtube.com/embed/${data.items[2].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
      <div class="col-md-6 mb-3">
      <iframe class="rounded" src="https://www.youtube.com/embed/${data.items[3].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    `

    const z = document.getElementById('yt-popular-video')
    z.innerHTML = video
    })
} 


getDataYT();





