var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        playerVars: { 'modestbranding': 1
        },
        videoId: 'E3gb1x64wzI',
        events: {
            'onReady': onPlayerReady
        }

});
}

function onPlayerReady(event) {
    player.setPlaybackQuality('hd720')
    event.target.playVideo();
}

$(document).on("click", "#close_button", function () {
    player.stopVideo();
});