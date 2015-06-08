// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        /*height: '80%',
        width: '80%',*/
        playerVars: { 'modestbranding': 1},
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady
        }

});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    player.setPlaybackQuality('hd720')
    event.target.playVideo();
}

$(document).on("click", "#close_button", function () {
    player.stopVideo();
    //$('#player').stopVideo();
});