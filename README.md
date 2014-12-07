Semantic similarity: A benchmark for algorithms applied to PMC-OA
=====================

PubMed, a repository for scientific publications, offers the related articles feature. Once the user is reading an article, on the right side the most related articles will be displayed. Relationship here is measured with the <a href="http://www.biomedcentral.com/1471-2105/8/423">PubMed Related Article (PMRA) algorithm</a>. PMRA uses word stems as well as Medical Subject Headings (MeSH) terms in order to rank the related articles.

How related articles can be calculated when working with semantic annotations? Is there any difference between using only title-and-abstract versus full-text? Those are the questions we are interested in.

We have benchmarked three similarity algorithms --PMRA, BM25, and Cosine, in order to determine which one works best with semantic annotations on full-text. We used the <a href="http://trec.nist.gov/pubs/trec14/t14_proceedings.html">TREC-2005 Genomics Track collection</a> to carry on our experiments. We have performed analyses based on Pearson Correlation, precision & recall, and dispersion. TREC-2005 comprises 34633 articles organized in 50 topics. Only 4585 are categorized as relevant or partially relevant to at least one of the 50 topics. We are working with 4240 of those 4585.

PMRA-stems, PMRA applied to stems in text-and-abstract, is used as a baseline. PMRA, BM25, and Cosine are applied to annotations in text-and-abstract.  The more red, the higher the correlation while the more blue the lower the correlation.

All of the algorithms used here are for academic purposes. They do not intend to be maintainable or scalable.

Correlation analyses
----------

The correlation used here follows the <a href="http://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient">Pearson algorithm</a>. For each similarity metric, i.e., PMRA-annotations, BM25 with variations on its parameters, and Cosine, we measure the correlation against PMRA-stems. Correlations are stored as matrixes and visualized as heatmaps. When visualized, the more blue the less correlated; the more red, the more correlated.

- Global correlation.

5We have a general correlation matrix that shows how PMRA-annotations, BM25, and Cosine correlates to PMRA-stems. Such correlation matrix can be visualized <a href="http://ljgarcia.github.io/semsim.benchmark/html/heatmapCorrelationAll.html">here</a>.

- Correlation by TREC topics

We also have correlation by TREC topics. TREC topics are numbered from 100 to 149, excluding 135. Such correlations can be visualized <a href="http://ljgarcia.github.io/semsim.benchmark/html/heatmapCorrelationTopic.html?topic=100">here</a>. By default topic 100 is shown, in order to change the topic modify the parameter **?topic=#** to any valid topic number (100 to 149 except 135). For instance, for topic 101 the link would look like <a href="http://ljgarcia.github.io/semsim.benchmark/html/heatmapCorrelationTopic.html?topic=101">http://ljgarcia.github.io/semsim.benchmark/html/heatmapCorrelationTopic.html?topic=101</a>.

Dispersion analyses
----------

Semantic similarity depends on the terms, i.e., words or expressions, contained in the articles under comparison. Similarity scores change whenever the considered terms do. Thus, similarity scores are different for title-and-abstract and full-text. 

Scattered plots show how similarity varies under the conditions mentioned above. The scattered data includes 62 PMC-OA articles for three different algorithms: PMRA-annotations, Cosine, and BM25 (k=2, b=0.75). 

- PMRA is visualized by default <a href="http://ljgarcia.github.io/semsim.benchmark/html/taVsFullContent.html">here</a>. 
- For <a href="http://ljgarcia.github.io/semsim.benchmark/html/taVsFullContent.html?set=cosine">cosine</a> use the parameter 
**?set=cosine**, 
- For <a href="http://ljgarcia.github.io/semsim.benchmark/html/taVsFullContent.html?set=bm25">BM25</a> use the parameter **?set=bm25**. 

The article for which an interested is know, e.g., the article is being read by a user, can be selected on the drop-down list containing PubMed identifiers. Similarities for all the 62 articles regarding the selected one will be then displayed.