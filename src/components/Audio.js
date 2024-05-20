document.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.querySelector('.green-audio-player');
  const playPause = audioPlayer.querySelector('.play-pause-btn');
  const playPauseIcon = playPause.querySelector('path');
  const player = audioPlayer.querySelector('audio');
  const currentTime = audioPlayer.querySelector('.current-time');
  const totalTime = audioPlayer.querySelector('.total-time');
  const progress = audioPlayer.querySelector('.controls .slider .progress');
  const volumeBtn = audioPlayer.querySelector('.volume-btn');
  const volumeControls = audioPlayer.querySelector('.volume-controls');
  const volumeProgress = volumeControls.querySelector('.progress');

  playPause.addEventListener('click', togglePlay);
  player.addEventListener('timeupdate', updateProgress);
  player.addEventListener('loadedmetadata', function() {
    totalTime.textContent = formatTime(player.duration);
  });
  player.addEventListener('volumechange', updateVolume);
  player.addEventListener('ended', function() {
    playPauseIcon.setAttribute('d', 'M18 12L0 24V0'); 
    player.currentTime = 0;
  });

  volumeBtn.addEventListener('click', function() {
    volumeControls.classList.toggle('hidden');
  });

  audioPlayer.querySelector('.controls .slider').addEventListener('click', seek);
  volumeControls.querySelector('.slider').addEventListener('click', changeVolume);

  function togglePlay() {
    if (player.paused) {
      player.play();
      playPauseIcon.setAttribute('d', 'M0 0h6v24H0zM12 0h6v24h-6z'); 
    } else {
      player.pause();
      playPauseIcon.setAttribute('d', 'M18 12L0 24V0'); 
    }
  }

  function updateProgress() {
    const percent = (player.currentTime / player.duration) * 100;
    progress.style.width = percent + '%';
    currentTime.textContent = formatTime(player.currentTime);
  }

  function updateVolume() {
    const percent = player.volume * 100;
    volumeProgress.style.height = percent + '%';
  }

  function seek(event) {
    const percent = event.offsetX / this.offsetWidth;
    player.currentTime = percent * player.duration;
  }

  function changeVolume(event) {
    const percent = 1 - (event.offsetY / this.offsetHeight);
    player.volume = percent;
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  }
});
