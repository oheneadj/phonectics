// Sounds
const monophthongs = ["i", "ɪ", "ʊ", "u", "ɛ", "ə", "ʌ", "æ", "ɑ", "ɔ"];

const vowels = ["ɪr", "ʊr", "ɝ", "ɚ", "ɔr", "ɛr", "aʊr", "ɑr"];

const diphongs = ["eɪ", "ɔɪ", "oʊ", "aɪ", "aʊ"];

const consonants = [
  "p",
  "b",
  "t",
  "d",
  "k",
  "g",
  "tʃ",
  "dʒ",
  "f",
  "v",
  "θ",
  "ð",
  "s",
  "z",
  "ʃ",
  "ʒ",
  "h",
  "m",
  "n",
  "ŋ",
  "l",
  "r",
  "w",
  "j",
];
// Words

const monopthongWords = [
  "see",
  "it",
  "wood",
  "blue",
  "red",
  "ago",
  "us",
  "hat",
  "got",
  "on",
];
const vowelWords = [
  "here",
  "tour",
  "first",
  "offer",
  "order",
  "chair",
  "hour",
  "cart",
];
const diphongWords = ["make", "boy", "go", "like", "cloud"];

const consonantWords = [
  "pea",
  "bear",
  "teal",
  "dog",
  "car",
  "go",
  "cheese",
  "june",
  "fly",
  "video",
  "think",
  "this",
  "sun",
  "zoo",
  "sheep",
  "vision",
  "hot",
  "mouse",
  "no",
  "sing",
  "love",
  "rose",
  "wet",
  "yet",
];

//functions for displaying various sounds

//Monophthong
monophthongs.forEach((monophthong) => {
  const btn = document.createElement("button");

  btn.classList.add("btn");
  btn.classList.add("monophthong");
  btn.setAttribute("id", "mono");

  btn.innerText = monophthong;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(monophthong).play();
  });

  document.getElementById("monophthongs-box").appendChild(btn);
});

//Vowels
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

//Diphongs
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

//Consonants
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

// ===== Display Words for each button =================================

// Get monopthong buttons and attach a span whose inner text is word from monopthongWords
const monopthongBtn = document.getElementsByClassName("monophthong");
console.log(monopthongBtn[1]);

for (let i = 0; i < monopthongBtn.length; i++) {
  const span = document.createElement("span");
  span.innerText = monopthongWords[i];
  monopthongBtn[i].appendChild(span);
}

// Get vowel buttons and attach a span whose inner text is word from vowelWords
const vowelBtn = document.getElementsByClassName("vowel");
console.log(vowelBtn[1]);

for (let i = 0; i < vowelBtn.length; i++) {
  const span = document.createElement("span");
  span.innerText = vowelWords[i];
  vowelBtn[i].appendChild(span);
}

// Get diphong buttons and attach a span whose inner text is word from diphongWords
const diphongBtn = document.getElementsByClassName("diphong");
console.log(diphongBtn[1]);

for (let i = 0; i < diphongBtn.length; i++) {
  const span = document.createElement("span");
  span.innerText = diphongWords[i];
  diphongBtn[i].appendChild(span);
}

// Get consonant buttons and attach a span whose inner text is word from consonantWords
const consonantBtn = document.getElementsByClassName("consonant");
console.log(consonantBtn[1]);

for (let i = 0; i < consonantBtn.length; i++) {
  const span = document.createElement("span");
  span.innerText = consonantWords[i];
  consonantBtn[i].appendChild(span);
}

//========== Functions to stop sounds ========

//Stop all sounds
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
