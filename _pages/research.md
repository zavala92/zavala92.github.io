---
layout: archive
# title: "Research"
permalink: /research/
author_profile: true
---

<!-- {% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %} -->

{% include base_path %}

<!-- {% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %} -->


<!--Preprints
======  
* [*High-Order Integration on Regular Triangulated Manifolds Reaches Super-Algebraic Approximation Rates through Cubical Re-parameterizations*](https://arxiv.org/abs/2311.13909) (2023). Joint with Oliver Sander and Michael Hecht. [arXiv:2311.13909](https://arxiv.org/abs/2311.13909).To appear in *SIAM Journal on Numerical Analysis(SINUM)*-->



Papers
======  

* [*A High-Order Fast Direct Solver for Surface PDEs on Triangles*](https://arxiv.org/pdf/2604.03097). (Submitted)

  *Note:* The triangular version is more flexible for complex geometries, but if a structured mesh is available, the quadrilateral-based HPS is still more efficient. In particular, derivatives are more expensive to compute on triangles, and the condition number grows faster.  
  The companion paper [*arXiv:2512.24456*](https://arxiv.org/pdf/2512.24456) gives the broader framework, including a quadrilateralization approach and an extension to PDEs on evolving surfaces.
  
* [*High-Order Integration on Regular Triangulated Manifolds Reaches Super-Algebraic Approximation Rates through Cubical Re-parameterizations*](https://epubs.siam.org/doi/full/10.1137/24M1707274) . Joint with Oliver Sander and Michael Hecht. *SIAM Journal on Numerical Analysis(SINUM)*
* [*Global Polynomial Level Sets for Numerical Differential Geometry of Smooth Closed Surfaces*](https://epubs.siam.org/doi/full/10.1137/22M1536510) . Joint with Sachin K. Thekke Veettil, Uwe Hernandez Acosta, Ivo F. Sbalzarini, and Michael Hecht. *SIAM Journal on Computing (SICOMP)*.  
* [*A Note on the Rate of Convergence of Integration Schemes for Closed Surfaces*](https://link.springer.com/article/10.1007/s40314-024-02611-y?utm_source=rct_congratemailt&utm_medium=email&utm_campaign=oa_20240218&utm_content=10.1007/s40314-024-02611-y) . Joint with Elima Shehu and Michael Hecht. *Computational and Applied Mathematics, Springer*.  
* [*High-Order Numerical Integration on Regular Embedded Surfaces*](https://link.springer.com/chapter/10.1007/978-3-031-86169-7_51) . Joint with Michael Hecht. *Numerical Mathematics and Advanced Applications ENUMATH 2023, Volume 2*.


## Software Projects

- 🔗 [**pysurfacefun**]([https://github.com/casus/surfgeopy](https://pysurfacefun.readthedocs.io/en/latest/))  
  pysurfacefun provides high-order discretizations and fast direct solvers for partial differential equations on smooth surfaces. The package supports quadrilateral Chebyshev patches and triangular high-order patches, with notebook examples for convergence studies and time-dependent surface dynamics.

- 🔗 [**surfgeopy**](https://github.com/casus/surfgeopy)  
  Surface integral approximation over smooth, embedded manifolds

- 🔗 [**surfpy**](https://github.com/casus/surfpy)  
  Spectral surface integration on embedded manifolds

  - 🔗 [**minterpy-levelsets**](https://github.com/minterpy-project/minterpy-levelsets)  
  Numerical differential geometry on smooth surfaces via Global Polynomial Level Sets (GPLS)
