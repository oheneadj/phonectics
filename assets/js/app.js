const sounds = [
    'æ','ɑ', 'ə','ɛ', 'i', 'ɪ','ɔ','u','ʊ','ʌ'
];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn);
})

const stopSongs = () => {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}

 