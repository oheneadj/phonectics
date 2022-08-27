const monophthongs = ["æ", "ɑ", "ɔ", "ʌ", "ɚ", "i", "ɪ", "ʊ", "u", "ɝ"];

const vowels = ["ɛ", "ɛr", "ɑr", "ɔr", "ə", "ɪr", "ʊr"];

const diphongs = ["aɪ", "aʊ", "ɔɪ", "eɪ", "oʊ"];

const consonants = [
  "b",
  "d",
  "dʒ",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "z",
  "r",
  "s",
  "ʃ",
  "t",
  "tʃ",
  "v",
  "w",
  "ŋ",
  "ʒ",
  "ð",
  "θ",
];

//functions for displaying various sounds

// Monophthong
monophthongs.forEach((monophthong) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.classList.add("monophthong");

  btn.innerText = monophthong;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(monophthong).play();
  });

  document.getElementById("monophthongs-box").appendChild(btn);
});

// Vowels
vowels.forEach((vowel) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.classList.add("vowel");

  btn.innerText = vowel;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(vowel).play();
  });

  document.getElementById("vowels-box").appendChild(btn);
});

// Diphongs
diphongs.forEach((diphong) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.classList.add("diphong");

  btn.innerText = diphong;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(diphong).play();
  });

  document.getElementById("diphongs-box").appendChild(btn);
});

// Consonants
consonants.forEach((consonant) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.classList.add("consonant");

  btn.innerText = consonant;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(consonant).play();
  });

  document.getElementById("consonants-box").appendChild(btn);
});

//========== Functions to stop sounds ========

//Stop all sounds that
const stopSongs = () => {
  stopMonophthongSongs();
  stopDiphongSongs();
  stopVowelSongs();
  stopConsonantSongs();
};

//stop playing current monophthong sound
const stopMonophthongSongs = () => {
  monophthongs.forEach((monophthong) => {
    const song = document.getElementById(monophthong);

    song.pause();
    song.currentTime = 0;
  });
};

//stop playing current vowel sound
const stopVowelSongs = () => {
  vowels.forEach((vowel) => {
    const song = document.getElementById(vowel);

    song.pause();
    song.currentTime = 0;
  });
};

//stop playing current diphong sound
const stopDiphongSongs = () => {
  diphongs.forEach((diphong) => {
    const song = document.getElementById(diphong);

    song.pause();
    song.currentTime = 0;
  });
};

//stop playing current diphong sound
const stopConsonantSongs = () => {
  consonants.forEach((consonant) => {
    const song = document.getElementById(consonant);

    song.pause();
    song.currentTime = 0;
  });
};

// sounds.forEach((sound) => {
//   const btn = document.createElement("button");
//   btn.classList.add("btn");

//   btn.innerText = sound;

//   btn.addEventListener("click", () => {
//     stopSongs();
//     document.getElementById(sound).play();
//   });

//   document.getElementById("buttons").appendChild(btn);
// });
