//your JS code here. If required.
// List of sound names (must match filenames in sounds/ without extension)
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');
const stopBtn = document.getElementById('stopBtn');

// Create a button for each sound
sounds.forEach(soundName => {
  const btn = document.createElement('button');
  btn.className = 'btn';          // required class
  btn.innerText = soundName;      // button label

  const audio = new Audio(`sounds/${soundName}.mp3`);

  btn.addEventListener('click', () => {
    stopAllSounds();              // stop others
    audio.currentTime = 0;
    audio.play();
  });

  // optional: store audio on the element
  btn._audio = audio;

  buttonsContainer.appendChild(btn);
});

// Stop all playing sounds
function stopAllSounds() {
  const allButtons = document.querySelectorAll('#buttons .btn');
  allButtons.forEach(b => {
    if (b._audio) {
      b._audio.pause();
      b._audio.currentTime = 0;
    }
  });
}

// Stop button logic
stopBtn.addEventListener('click', () => {
  stopAllSounds();
});
