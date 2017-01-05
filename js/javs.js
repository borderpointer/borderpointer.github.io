(function() {
  [].forEach.call(document.querySelectorAll('.video'), function(video) {
    video.addEventListener('mouseenter', function() {
      if (this.paused) this.play();
    });

    video.addEventListener('mouseleave', function() {
      if (!this.paused) this.pause();
    });
  });
})();