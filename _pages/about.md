---
permalink: /
title: "Gentian Zavalani"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero home-hero--lab">
  <div class="home-hero__copy">
    <p class="home-eyebrow">Numerical Mathematics | TU Dresden</p>
    <h2>Numerical methods for PDEs on smooth surfaces.</h2>
    <p class="home-lead">
      My name is <strong>Gentian Zavalani</strong>. I am currently a <strong>Wrap-up Postdoc</strong> at the Institute of Numerical Mathematics,
      <a href="https://tu-dresden.de/mn/math/numerik">TU Dresden</a>, Germany.
    </p>
    <p>
      I completed my PhD under the supervision of
      <a href="https://tu-dresden.de/mn/math/numerik/sander/startseite">Prof. Oliver Sander</a>
      and <a href="https://sites.google.com/view/prof-dr-michael-hecht/home?authuser=0">Prof. Michael Hecht</a>.
    </p>
    <p>
      During my PhD, I focused on the development and analysis of numerical methods for partial differential equations (PDEs) posed on smooth two-dimensional surfaces.
      My work is motivated by applications in biology and physics and aims at designing fast and accurate algorithms for complex geometries.
    </p>
    <div class="home-actions">
      <a class="btn btn--primary" href="/research/">Research</a>
      <a class="btn btn--inverse" href="/cv/">CV</a>
      <a class="btn btn--inverse" href="/activities/">Activities</a>
    </div>
  </div>

  <div class="surface-lab" aria-label="Rotating research images">
    <div class="surface-lab__stage">
      <img class="surface-lab__image is-active" src="/images/research/surface_fitting.png" alt="High-order surface fitting">
      <img class="surface-lab__image" src="/images/research/swiss_cheese_mesh.png" alt="Swiss cheese surface with mesh">
      <img class="surface-lab__image" src="/images/research/swiss_spot_t0.png" alt="Reaction diffusion state on Swiss cheese surface">
      <img class="surface-lab__image" src="/images/research/swiss_t_200.png" alt="Later reaction diffusion state on Swiss cheese surface">
      <img class="surface-lab__image" src="/images/research/swiss_t_600.png" alt="Reaction diffusion evolution on Swiss cheese surface">
      <img class="surface-lab__image" src="/images/research/clenshaw_convergence.png" alt="Convergence plot for Clenshaw method">
      <img class="surface-lab__image" src="/images/research/surface_lab_reference.png" alt="Point sets on smooth surfaces">
      <p class="surface-lab__caption">High-order surface fitting</p>
    </div>
    <div class="research-coordinates" aria-label="Research coordinates">
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
    </div>
  </div>
</section>

<nav class="home-pathways" aria-label="Main sections">
  <a href="/research/">
    <span>Research</span>
    <small>Methods, publications, and current directions</small>
  </a>
  <a href="/cv/">
    <span>CV</span>
    <small>Education, positions, teaching, and academic record</small>
  </a>
  <a href="/activities/">
    <span>Activities</span>
    <small>Seminars, talks, conferences, and community work</small>
  </a>
</nav>

<section class="home-panel research-manifesto">
  <div>
    <p class="home-eyebrow">Research focus</p>
    <h2>My work centers on three main themes.</h2>
  </div>
  <p>
    These themes connect the geometry of smooth surfaces with the numerical analysis needed for accurate, efficient computation.
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
