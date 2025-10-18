document.addEventListener('DOMContentLoaded', function () {
  var audio = document.getElementById('bg-audio');
  var btn = document.getElementById('audio-toggle');

  // set initial aria/title based on audio state
  function updateButton() {
    if (!audio || !btn) return;
    if (audio.paused) {
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('aria-label', 'Play music');
      btn.title = 'Play music';
    } else {
      btn.setAttribute('aria-pressed', 'true');
      btn.setAttribute('aria-label', 'Pause music');
      btn.title = 'Pause music';
    }
  }

  // try to update initial state (autoplay may be blocked)
  updateButton();

  if (btn) {
    btn.addEventListener('click', function () {
      if (!audio) return;
      if (audio.paused) {
        audio.play().catch(function(){ /* autoplay blocked */ });
      } else {
        audio.pause();
      }
      updateButton();
    });
  }
});