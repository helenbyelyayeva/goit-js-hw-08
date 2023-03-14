import throttle from "lodash.throttle"; 
import Player from "@vimeo/player";


const player = new Player('vimeo-player');
const CURRENT_TIME = "videoplayer-current-time";


player.on(
    'timeupdate', throttle (function (data) { localStorage.setItem(CURRENT_TIME,data.seconds);},1000)
);

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);


