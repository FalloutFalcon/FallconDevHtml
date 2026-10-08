var songs = ["https://www.youtube.com/embed/1400fzt0SHU?si=7rwmQ5iikvKR7e8m", "https://www.youtube.com/embed/Kv0m87LwKss?si=f-J330kL8LhU_4MO"];
var index = 1;

var little_guys = ['/images/design/boiling_dumb_lizard.gif', '/images/design/data_server_1.png', '/images/design/data_server_2.png', '/images/design/burning_fire.gif']

window.onload = () => {
    load_random_song()
    inject_little_guys()
}

function load_random_song() {
    index = Math.floor(Math.random() * songs.length);
    var randomSong = songs[index];
    document.getElementById("song_player").src = randomSong;
}

function next_random_song() {
    index++;
    if (index >= songs.length) {
        index = 0
    }

    var nextSong = songs[index];
    document.getElementById("song_player").src = nextSong;
}

function inject_little_guys() {

    for (let i = 0; i < 100; i++) {
        const little_guy = little_guys[Math.floor(Math.random() * little_guys.length)];

        const new_guy = document.createElement("img");
        new_guy.src = little_guy;
        const min = 5;
        const max = 90;
        new_guy.setAttribute("style", `left: ${Math.floor(Math.random() * (max - min + 1)) + min}vw;`)

        document.getElementById("little_guy_div").appendChild(new_guy);
    }
}