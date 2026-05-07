---
permalink: /
title: "Gentian Zavalani"
excerpt: "Numerical mathematics researcher working on high-order methods for PDEs on surfaces."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero home-hero--lab">
  <div class="home-hero__copy">
    <p class="home-eyebrow">Numerical Mathematics | TU Dresden</p>
    <h2>Geometry-aware algorithms for PDEs on surfaces.</h2>
    <p class="home-lead">
      I am a Wrap-up Postdoc at the Institute of Numerical Mathematics, <a href="https://tu-dresden.de/mn/math/numerik">TU Dresden</a>.
      My work turns curved, moving geometries into accurate computational objects: approximated, integrated, and solved with high-order numerical methods.
    </p>
    <div class="home-actions">
      <a class="btn btn--primary" href="/research/">Explore Research</a>
      <a class="btn btn--inverse" href="/cv/">View CV</a>
      <a class="btn btn--inverse" href="mailto:gentian.zavalani@tu-dresden.de">Contact</a>
    </div>
  </div>

  <div class="surface-lab" aria-label="Animated high-order surface approximation">
    <canvas id="surface-lab-canvas" width="720" height="520"></canvas>
    <div class="surface-lab__readout">
      <span>surface PDE</span>
      <span>high-order geometry</span>
      <span>fast solvers</span>
    </div>
  </div>
</section>

<section class="research-coordinates" aria-label="Research coordinates">
  <div>
    <span class="coordinate-value">PDEs</span>
    <span class="coordinate-label">on smooth surfaces</span>
  </div>
  <div>
    <span class="coordinate-value">High-order</span>
    <span class="coordinate-label">geometry and quadrature</span>
  </div>
  <div>
    <span class="coordinate-value">Direct</span>
    <span class="coordinate-label">solvers for elliptic systems</span>
  </div>
</section>

<section class="home-panel research-manifesto">
  <div>
    <p class="home-eyebrow">Research spine</p>
    <h2>From curved geometry to computable structure.</h2>
  </div>
  <p>
    I completed my PhD under the supervision of
    <a href="https://tu-dresden.de/mn/math/numerik/sander/startseite">Prof. Oliver Sander</a>
    and <a href="https://sites.google.com/view/prof-dr-michael-hecht/home?authuser=0">Prof. Michael Hecht</a>.
    My research builds reliable approximation, integration, and solver strategies for complex surface geometries, with applications motivated by biology and physics.
  </p>
</section>

<section class="home-panel">
  <div class="focus-grid">
    <div>
      <span class="focus-index">01</span>
      <h3>Curved Surfaces</h3>
      <p>High-order polynomial approximations for smooth two-dimensional surfaces.</p>
    </div>
    <div>
      <span class="focus-index">02</span>
      <h3>Surface Integrals</h3>
      <p>Accurate quadrature and geometry-aware computation on embedded manifolds.</p>
    </div>
    <div>
      <span class="focus-index">03</span>
      <h3>Fast Solvers</h3>
      <p>Direct methods for elliptic PDEs on static and evolving surfaces.</p>
    </div>
  </div>
</section>

<section class="home-panel pattern-stage">
  <div class="pattern-stage__intro">
    <p class="home-eyebrow">Visual result</p>
    <h2>Pattern formation, seen as a parameter story.</h2>
    <p>
      A compact visual trace of how coupling choices change an interacting Turing system.
    </p>
  </div>
  <div class="research-strip" aria-label="Pattern formation example images">
    <figure>
      <img src="/files/up_1_q.png" alt="Baseline pattern">
      <figcaption>baseline</figcaption>
    </figure>
    <figure>
      <img src="/files/v1_q1_-0.55.png" alt="Linear coupling pattern">
      <figcaption>linear</figcaption>
    </figure>
    <figure>
      <img src="/files/v1_q2_0.55.png" alt="Quadratic coupling pattern">
      <figcaption>quadratic</figcaption>
    </figure>
    <figure>
      <img src="/files/v1_q3_-0.55.png" alt="Cubic coupling pattern">
      <figcaption>cubic</figcaption>
    </figure>
  </div>
  <p class="figure-caption">
    Left to right: baseline pattern, followed by patterns produced by linear, quadratic, and cubic coupling in an interacting Turing system.
  </p>
</section>

<section class="home-panel teaching-panel">
  <div>
    <p class="home-eyebrow">Teaching</p>
    <h2>Approximation Theory</h2>
    <p>
      In Winter Semester 2025/26, I taught Approximation Theory at
      <a href="https://tu-dresden.de/mn/math/numerik">TU Dresden</a>, covering theoretical foundations and practical methods for function approximation and interpolation.
    </p>
  </div>
  <a class="btn btn--primary" href="/files/Notes%20on%20Approximation%20Theory.pdf" target="_blank" rel="noopener">Lecture Notes</a>
</section>

<script src="/assets/js/home-surface.js" defer></script>
