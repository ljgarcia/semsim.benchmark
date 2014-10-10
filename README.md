Semantic similarity: Benchmark for algorithms applied to PMC-OA
=====================

Correlation
----------

This repository contains some correlation matrixes, which are visualized as a heatmap. Visualization is done with D3.

Correlation follows the <a href="http://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient">Pearson algorithm</a>. When visualized, the more blue the less correalted; the more red, the more correlated.

We have a general correlation matrix that shows how different similarity algorithms correlates to <a href="http://www.biomedcentral.com/1471-2105/8/423">PMRA applied on stems</a>. Such correlation can be visualized at <a href=""></a>.

We also have correlation by topics. We use topics from <a href="http://trec.nist.gov/pubs/trec14/t14_proceedings.html">TREC-2005 Genomic Track</a>, those are numbered from 100 to 149, excluding 135. such correlations can be visualized at <a href=""></a>. By default topic 100 is shown, in order to change topic add ?topic=101 or any other valid topic number.

All of the algortihms used here are for academic purposes. They do not intend to be maintainable or scalable.
