//Challenge found at: https://www.codewars.com/kata/dubstep/train/javascript

function songDecoder(song) {
    var unWubbed = song.split("WUB").join(" ");
    return unWubbed.replace(/\s+/g,' ').trim();
}