Semantic similarity: Benchmark for algorithms applied to PMC-OA
=====================

This repository contains some correlation matrixes, which are visualized as a heatmap. It also contains scattered matrixes, which are visualized as scatterd plots. Visualization is done with D3.

All of the algortihms used here are for academic purposes. They do not intend to be maintainable or scalable.

For more information on PMC-OA go to its <a href="http://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/">website</a>.

Correlation
----------

Correlation follows the <a href="http://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient">Pearson algorithm</a>. When visualized, the more blue the less correalted; the more red, the more correlated.

We have a general correlation matrix that shows how different similarity algorithms correlates to <a href="http://www.biomedcentral.com/1471-2105/8/423">PMRA applied on stems</a>. Such correlation can be visualized <a href="http://ljgarcia.github.io/semsim.benchmark.corr/html/heatmapCorrelationAll.html">here</a>.

We also have correlation by topics. We use topics from <a href="http://trec.nist.gov/pubs/trec14/t14_proceedings.html">TREC-2005 Genomic Track</a>, those are numbered from 100 to 149, excluding 135. Such correlations can be visualized <a href="http://ljgarcia.github.io/semsim.benchmark.corr/html/heatmapCorrelationTopic.html">here</a>. By default topic 100 is shown, in order to change topic add ?topic=101 or any other valid topic number. For instance, for topic 101 the link would look like <a href="http://ljgarcia.github.io/semsim.benchmark.corr/html/heatmapCorrelationTopic.html?topic=101">http://ljgarcia.github.io/semsim.benchmark.corr/html/heatmapCorrelationTopic.html?topic=101</a>.

Scattered plots
----------

Semantic similarity depends on the terms, i.e., words or expressions, contained in the articles under comparison. Thus, similarity changes if only terms in the title and abstract are used, versus terms found taking into account the whole content. 

Scattered plots show how similarity varies under the conditions mentioned above. The scattered data includes 62 PMC-OA articles for three different algorithms: PMRA, Cosine, and BM25 (). PMRA is visualized by default <a href="http://ljgarcia.github.io/semsim.benchmark.corr/html/taVsFullContent.html">here</a>. For <a href="http://ljgarcia.github.io/semsim.benchmark.corr/html/taVsFullContent.html?set=cosine">cosine</a> use the parameter ?set=cosine, and for <a href="http://ljgarcia.github.io/semsim.benchmark.corr/html/taVsFullContent.html?set=bm25">BM25</a> use the parameter ?set=bm25. Articles can be selected on the list box; they are identified by their PubMed ID.