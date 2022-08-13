const sounds = [
  "i",
  "ɪ",
  "ʊ",
  "u",
  "ɛ",
  "ə",
  "ʌ",
  "æ",
  "ɑ",
  "ɔ",
  "ɛr",
  "ɝ",
  "aɪ",
  "aʊ",
  "ɑr",
  "eɪ",
  "ɚ",
  "ɪr",
  "oʊ",
  "ɔɪ",
  "ɔr",
  "ʊr",
  "b",
  "d",
  "dJ",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "ng",
  "r",
  "s",
  "sh",
  "t",
  "tʃ",
  "v",
  "th",
  "th-v",
  "w",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

const stopSongs = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
};
