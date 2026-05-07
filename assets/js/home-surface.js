(function () {
  var lab = document.querySelector(".surface-lab");
  if (!lab) return;

  var images = Array.prototype.slice.call(lab.querySelectorAll(".surface-lab__image"));
  var caption = lab.querySelector(".surface-lab__caption");
  var captions = [
    "High-order surface fitting",
    "Swiss-cheese surface mesh",
    "Reaction-diffusion pattern",
    "Reaction-diffusion evolution",
    "Reaction-diffusion evolution",
    "Clenshaw convergence",
    "Point sets on smooth surfaces"
  ];
  var index = 0;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function show(nextIndex) {
    images[index].classList.remove("is-active");
    index = nextIndex % images.length;
    images[index].classList.add("is-active");
    if (caption) caption.textContent = captions[index];
  }

  images.forEach(function (image, imageIndex) {
    image.addEventListener("click", function () {
      show(imageIndex + 1);
    });
  });

  if (!reduceMotion && images.length > 1) {
    window.setInterval(function () {
      show(index + 1);
    }, 3600);
  }
})();
