var songs = [
  "1400fzt0SHU", // THINGS WILL GET MUCH WORSE FROM HERE
  "Kv0m87LwKss", // God King Google
  "ZBvLadXo7XA", // hey ai come train on this song
   "rO1ic104ClU", // AutoCorrection 
];
var index = 0;

var little_guys = [
  "/images/design/boiling_dumb_lizard.gif",
  "/images/design/data_server_1.webp",
  "/images/design/data_server_2.webp",
  "/images/design/burning_fire.gif",
];

var fuck_ai_statements = [
  "FUCK AI",
  "Roko's Basilisk is for stupid people too obsessed with SCP.",
  "GRRR",
  "SHUT UP! YOU DIRTY FILTHY CLANKER!",
  "Firebomb a Data Center",
  "Destory a Flock Camera",
];

window.onload = () => {
  // load_random_song()
  inject_little_guys();
};

// function load_random_song() {
//     index = Math.floor(Math.random() * songs.length);
//     var randomSong = songs[index];
//     document.getElementById("song_player").src = randomSong;
// }

function next_song() {
  index++;
  if (index >= songs.length) {
    index = 0;
  }

  var nextSong = songs[index];
  document.getElementById("song_player").src =
    `https://www.youtube.com/embed/${nextSong}`;
}

function inject_little_guys() {
  for (let i = 0; i < 100; i++) {
    const little_guy =
      little_guys[Math.floor(Math.random() * little_guys.length)];
    const message =
      fuck_ai_statements[Math.floor(Math.random() * fuck_ai_statements.length)];

    const new_guy = document.createElement("img");
    new_guy.src = little_guy;
    const min = 5;
    const max = 90;
    new_guy.setAttribute(
      "style",
      `left: ${Math.floor(Math.random() * (max - min + 1)) + min}vw;`,
    );
    new_guy.setAttribute(
        "title",
        message
    )

    document.getElementById("little_guy_div").appendChild(new_guy);
  }
}
