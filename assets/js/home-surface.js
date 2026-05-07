(function () {
  var canvas = document.getElementById("surface-lab-canvas");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ratio = Math.min(window.devicePixelRatio || 1, 2);
  var width = 0;
  var height = 0;
  var time = 0;
  var pointer = { x: 0.5, y: 0.5 };

  function resize() {
    var box = canvas.getBoundingClientRect();
    width = Math.max(320, Math.floor(box.width));
    height = Math.max(260, Math.floor(box.height));
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function project(x, y, z) {
    var tilt = -0.64;
    var spin = 0.58 + (pointer.x - 0.5) * 0.42;
    var cos = Math.cos(spin);
    var sin = Math.sin(spin);
    var px = x * cos - y * sin;
    var py = x * sin + y * cos;
    var pz = z + py * Math.sin(tilt);
    var scale = Math.min(width, height) * 0.34;

    return {
      x: width * 0.5 + px * scale,
      y: height * 0.56 + (py * Math.cos(tilt) - pz * 0.72) * scale
    };
  }

  function surface(x, y, t) {
    var wave = Math.sin(2.2 * x + t) * Math.cos(2.0 * y - t * 0.62);
    var fold = Math.sin(3.1 * (x * x + y * y) - t * 0.8);
    var pull = (pointer.y - 0.5) * 0.35;
    return 0.22 * wave + 0.12 * fold + pull * Math.exp(-1.6 * (x * x + y * y));
  }

  function drawGrid(t) {
    var lines = 19;
    var step = 2 / (lines - 1);

    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    for (var pass = 0; pass < 2; pass += 1) {
      for (var i = 0; i < lines; i += 1) {
        ctx.beginPath();
        for (var j = 0; j < lines; j += 1) {
          var a = -1 + (pass === 0 ? i * step : j * step);
          var b = -1 + (pass === 0 ? j * step : i * step);
          var z = surface(a, b, t);
          var point = project(a, b, z);
          if (j === 0) ctx.moveTo(point.x, point.y);
          else ctx.lineTo(point.x, point.y);
        }
        var alpha = pass === 0 ? 0.34 : 0.22;
        ctx.strokeStyle = "rgba(31, 111, 120, " + alpha + ")";
        ctx.stroke();
      }
    }
  }

  function drawParticles(t) {
    for (var i = 0; i < 46; i += 1) {
      var angle = i * 2.399;
      var radius = 0.1 + (i % 11) * 0.075;
      var x = Math.cos(angle + t * 0.16) * radius;
      var y = Math.sin(angle * 0.93 - t * 0.12) * radius;
      var z = surface(x, y, t) + 0.035;
      var point = project(x, y, z);
      var glow = 0.38 + 0.28 * Math.sin(t + i);

      ctx.beginPath();
      ctx.arc(point.x, point.y, 1.7 + (i % 3) * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(184, 107, 54, " + glow + ")";
      ctx.fill();
    }
  }

  function drawFrame() {
    time += reduceMotion ? 0 : 0.018;
    ctx.clearRect(0, 0, width, height);

    var gradient = ctx.createRadialGradient(width * 0.52, height * 0.44, 20, width * 0.5, height * 0.5, width * 0.52);
    gradient.addColorStop(0, "rgba(101, 199, 208, 0.24)");
    gradient.addColorStop(0.52, "rgba(184, 107, 54, 0.12)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    drawGrid(time);
    drawParticles(time);

    if (!reduceMotion) requestAnimationFrame(drawFrame);
  }

  canvas.addEventListener("pointermove", function (event) {
    var rect = canvas.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / rect.width;
    pointer.y = (event.clientY - rect.top) / rect.height;
  });

  window.addEventListener("resize", function () {
    resize();
    if (reduceMotion) drawFrame();
  });

  resize();
  drawFrame();
})();
