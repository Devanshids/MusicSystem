console.log(' welcome to rhythm');

let songIndex = 0;
let audioElement = new Audio('1.mp4');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songsItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: 'Treat You Better', FilePath: '1.mp4', CoverPath: 'tyou.jpg' },
    { songName: 'Heat Waves', FilePath: '2.mp4', CoverPath: 'heatw.jpg' },
    { songName: 'Brother', FilePath: '3.mp4', CoverPath: 'brothers.jpg' },
    { songName: 'Dandelions', FilePath: '4.mp4', CoverPath: 'dande.png' },
    { songName: 'Memories', FilePath: '5.mp4', CoverPath: 'memories.jpg' },
    { songName: 'Night Changes', FilePath: '6.mp4', CoverPath: 'nightch.jpg' },
    { songName: 'Mocking Bird', FilePath: '7.mp4', CoverPath: 'mb.jpg' },
    { songName: 'Hurts So Good', FilePath: '8.mp4', CoverPath:'hurtsso.jpg' },
    { songName: 'See You Again', FilePath: '9.mp4', CoverPath: 'seeyou.png' },
    { songName: 'Still Falling For You', FilePath: '10.mp4', CoverPath: 'sffy.png' }

]

songsItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].CoverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
})
//audioElement.play();
masterPlay.addEventListener('click',()=> {
        if(audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;

        }
    })

audioElement.addEventListener('timeupdate', () => {

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })


}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
      songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp4`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp4`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp4`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})