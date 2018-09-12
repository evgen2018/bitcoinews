   $(document).ready(function() {

    // стартуем видео в обход блокировки_______________________________________________________________
    function makeNewIframeUrl() {
      var goodParam = ['controls','disablekb','loop','modestbranding','rel','showinfo','playlist']
      var paramForExit = [];
      var iframes = $('iframe');
      var arrParams = $('iframe')[0].src.split('&');
      paramForExit.push(arrParams[0]);
      for (var i=0; i<arrParams.length; i++){
        for(var j=0; j<goodParam.length; j++){
          if(arrParams[i].split('=')[0] == goodParam[j].split('=')[0]){
            paramForExit.push(arrParams[i])
          }
        }
      }
      return paramForExit.join('&')
    }

    setTimeout(startVideo, 4000)
    function startVideo(e){
      // $('iframe')[0].src = makeNewIframeUrl();
      // $('.video_responsive').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/NFb2CItccKo?rel=0&autoplay=1" frameborder="0" allowfullscreen="" allow="autoplay; encrypted-media"></iframe>')
    }
    //_________________________________________________________________________________________________

    });

      // function pauseAudio() {
      //   $('#ytplayer').parent().prepend('<div class="anticlicker"></div>');
      //   console.log('well Done!')
      // }
// Инициализвация и отловка клика
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('ytplayer', {
            videoId: 'V8E09PiUzwQ',
            playerVars: {
              controls: 1,
              disablekb: 0,
              loop: 1,
              modestbranding: 1,
              rel: 0,
              fs: 0,
              showinfo: 0,
              autoplay: 1,
              playlist: 'V8E09PiUzwQ',
              mute:1,
            },
            events: {
                 'onReady': function(event){
                   setTimeout(onPlayerReady, 2000);
                 }
          }
        });
  }

  function onPlayerReady(event){
    $('.up_sound,#volume_up').on('click', function() {
        player.unMute();
        $('.up_sound,#volume_up').fadeOut(500);
        console.log('volume_up');
 })
}

setTimeout(function(){
  $('.up_sound,#volume_up').fadeIn(500);
  },
  5000);



