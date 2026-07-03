/* Scroll-reveal for custom components. Elements only get the .reveal
   (initially hidden) class here, so nothing is ever hidden without JS. */
(function () {
  if (!("IntersectionObserver" in window)) return;
  var selectors =
    ".theme-card,.sw-card,.pub-item,.timeline-item,.figure-strip,.video-feature,.highlight-card";
  var els = document.querySelectorAll(selectors);
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach(function (el, i) {
    el.classList.add("reveal");
    el.style.transitionDelay = (i % 4) * 70 + "ms";
    io.observe(el);
  });
})();
