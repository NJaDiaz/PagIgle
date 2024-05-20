// Lista de canciones
var songs = [
    {
        url: 'https://ia800206.us.archive.org/23/items/domingo-03-02-2024-pastor-javier-lamberti-como-buen-soldado-de-cristo/DOMINGO%2003-02-2024%20PASTOR%20JAVIER%20LAMBERTI%20%28COMO%20BUEN%20SOLDADO%20DE%20CRISTO%29.mp3',
        title: 'Domingo 3 de Febrero',
        artist: 'Pastor Javier Lamberti'
    },
    {
        url: 'https://ia800205.us.archive.org/23/items/jueves-29-02-2024-pastora-natalia/JUEVES%2029-02-2024%20PASTORA%20NATALIA%20ROMOS.mp3',
        title: 'Jueves 29 de Febrero',
        artist: 'Pastora Natalia Romos'
    },
    
    {
        url: 'https://audiomack.com/nesjavidiaz/song/audio',
        title: 'P3',
        artist: 'A3'
    },
    {
        url: 'path/to/your/song3.mp3',
        title: 'P4',
        artist: 'A4'
    },
    {
        url: 'path/to/your/song3.mp3',
        title: 'P5',
        artist: 'A5'
    }
];


var currentSongIndex = 0;


var audio = document.getElementById('audio');

progressSlider.style.background = '#55645a'
progressSlider.style.backgroundColor = '#55645a'

function updateSongInfo(index) {
    var songTitleElement = document.getElementById('songTitle');
    var artistElement = document.getElementById('artistName');
    var progressTimeElement = document.getElementById('timeElapsed');
    var progressSlider = document.getElementById('progressSlider');

    songTitleElement.textContent = songs[index].title;
    artistElement.textContent = songs[index].artist;

   
    audio.addEventListener('timeupdate', function() {
        var currentTime = Math.floor(audio.currentTime);
        var minutes = Math.floor(currentTime / 60);
        var seconds = currentTime - minutes * 60;
        progressTimeElement.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

       
        var progress = (audio.currentTime / audio.duration) * 100;
        progressSlider.value = progress;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var songsList = document.getElementById('songs');

    
    songs.forEach(function(song, index) {
        var listItem = document.createElement('li');
        listItem.textContent = song.title + ' - ' + song.artist;
        listItem.setAttribute('data-index', index);
        songsList.appendChild(listItem);
        listItem.style.transition = 'background-color 0.5s'; 
        listItem.style.cursor = 'pointer';     
        listItem.style.padding = '5px'; 
        listItem.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#4e94ac'; 
        });
        listItem.addEventListener('mouseleave', function() {
            this.style.backgroundColor = ''; 
        });
    });


   
    audio.src = songs[currentSongIndex].url;

    
    updateSongInfo(currentSongIndex);
});


document.getElementById('songs').addEventListener('click', function(event) {
    var listItem = event.target.closest('li');
    if (listItem) {
        currentSongIndex = parseInt(listItem.getAttribute('data-index'));
        audio.src = songs[currentSongIndex].url;
        updateSongInfo(currentSongIndex);
        audio.play();
        document.getElementById('play_btn').style.display = 'none';
        document.getElementById('pause_btn').style.display = 'block';
        
        var songListDropdown = document.querySelector('.song-list-dropdown');
        songListDropdown.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    var songListDropdown = document.querySelector('.song-list-dropdown');

    hamburgerIcon.addEventListener('click', function() {
        songListDropdown.style.display = songListDropdown.style.display === 'none' ? 'block' : 'none';
    });
});


document.getElementById('prev_btn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex].url;
    updateSongInfo(currentSongIndex);
    audio.play();
    document.getElementById('play_btn').style.display = 'none';
    document.getElementById('pause_btn').style.display = 'block';
});

document.getElementById('plays_btn').addEventListener('click', function() {
    var playBtn = document.getElementById('play_btn');
    var pauseBtn = document.getElementById('pause_btn');

    if (!audio.paused) {
        audio.pause();
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
    } else {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    }
});

document.getElementById('next_btn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].url;
    updateSongInfo(currentSongIndex);
    audio.play();
    document.getElementById('play_btn').style.display = 'none';
    document.getElementById('pause_btn').style.display = 'block';
});

document.getElementById('volumeRange').addEventListener('input', function() {
    var volume = this.value / 100; 
    audio.volume = volume; 
});

document.getElementById('progressSlider').addEventListener('input', function() {
    var progress = this.value / 100; 
    audio.currentTime = progress * audio.duration; 
});

// muteBtn.addEventListener('click', function() {
//     if (audio.volume > 0) { 
//         previousVolume = audio.volume; 
//         audio.volume = 0; 
       
//         document.getElementById('muteIcon').style.display = 'block';
//         document.getElementById('volumeIcon').style.display = 'none';
//     } else { 
//         audio.volume = previousVolume; 
       
//         document.getElementById('muteIcon').style.display = 'none';
//         document.getElementById('volumeIcon').style.display = 'block';
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
   
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    var songListDropdown = document.querySelector('.song-list-dropdown');

    hamburgerIcon.addEventListener('click', function() {
        songListDropdown.style.display = songListDropdown.style.display === 'none' ? 'block' : 'none';
    });


}
);

