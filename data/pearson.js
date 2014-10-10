var pearson_pmra =  {
	"title": "PMRA-stems vs Annotations-based similarities",
	"algorithms" : ["PMRA-annot", "COSINE" 
		, "BM25_1.2_0.75", "BM25_1.3_0.75", "BM25_1.4_0.75", "BM25_1.5_0.75", "BM25_1.6_0.75", "BM25_1.7_0.75", "BM25_1.8_0.75", "BM25_1.9_0.75", "BM25_2.0_0.75"
		, "BM25_1.2_1.0", "BM25_1.3_1.0", "BM25_1.4_1.0", "BM25_1.5_1.0", "BM25_1.6_1.0", "BM25_1.7_1.0", "BM25_1.8_1.0", "BM25_1.9_1.0", "BM25_2.0_1.0"]

	,"pmid" : pmidsALL

	,"correlations" : [
		PMRA_corrALL, COSINE_corrALL
		, BM25_1_2_0_75_corrALL, BM25_1_3_0_75_corrALL, BM25_1_4_0_75_corrALL, BM25_1_5_0_75_corrALL, BM25_1_6_0_75_corrALL, BM25_1_7_0_75_corrALL, BM25_1_8_0_75_corrALL, BM25_1_9_0_75_corrALL, BM25_2_0_0_75_corrALL
		, BM25_1_2_1_0_corrALL, BM25_1_3_1_0_corrALL, BM25_1_4_1_0_corrALL, BM25_1_5_1_0_corrALL, BM25_1_6_1_0_corrALL, BM25_1_7_1_0_corrALL, BM25_1_8_1_0_corrALL, BM25_1_9_1_0_corrALL, BM25_2_0_1_0_corrALL
	]
};
/*
var pearson_baseline = {
	"title": "PMRA-stems vs BM25-stems",
	"algorithms" : ["BM25-1.9-1.0", "BM25-1.2-0.75"]
	,"pmid" : pmidsALL
	,"correlations" : [BM25_1_9_1_0_stems_corrALL, BM25_1_2_0_75_stems_corrALL]
}*/
