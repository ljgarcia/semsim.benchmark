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

var allTopics = {
	'100': 'Describe the procedure or methods for how to "open up" a cell through a process called "electroporation."'
	,'101': 'Describe the procedure or methods for exact reactions that take place when you do glutathione S-transferase (GST) cleavage during affinity chromatography.'
	,'102': 'Describe the procedure or methods for different quantities of different components to use when pouring a gel to make it more or less porous.'
	,'103': 'Describe the procedure or methods for green fluorescent protein (GFP) tagged proteins to do experiments with tagged proteins.'
	,'104': 'Describe the procedure or methods for how to do a microsomal budding assay, i.e., budding of vesicles from microsomes in vitro.'
	,'105': 'Describe the procedure or methods for purification of rat IgM.'
	,'106': 'Describe the procedure or methods for chromatin IP (Immuno Precipitations) to isolate proteins that are bound to DNA in order to precipitate the proteins out of the DNA.'
	,'107': 'Describe the procedure or methods for normalization procedures that are used for microarray data.'
	,'108': 'Describe the procedure or methods for identifying in vivo protein-protein interactions in time and space in the living cell.'
	,'109': 'Describe the procedure or methods for fluorogenic 5\'-nuclease assay.'
	,'110': 'Provide information about the role of the gene Interferon-beta in the disease Multiple Sclerosis.'
	,'111': 'Provide information about the role of the gene PRNP in the disease Mad Cow Disease.'
	,'112': 'Provide information about the role of the gene IDE gene in the disease Alzheimer\'s Disease.'
	,'113': 'Provide information about the role of the gene MMS2 in the disease Cancer.'
	,'114': 'Provide information about the role of the gene APC (adenomatous polyposis coli) in the disease Colon Cancer.'
	,'115': 'Provide information about the role of the gene Nurr-77 in the disease Parkinson\'s Disease.'
	,'116': 'Provide information about the role of the gene Insulin receptor gene in the disease Cancer.'
	,'117': 'Provide information about the role of the gene Apolipoprotein E (ApoE) in the disease Alzheimer\'s Disease.'
	,'118': 'Provide information about the role of the gene Transforming growth factor-beta1 (TGF-beta1) in the disease Cerebral Amyloid Angiopathy (CAA).'
	,'119': 'Provide information about the role of the gene GSTM1 in the disease Breast Cancer.'
	,'120': 'Provide information on the role of the gene nucleoside diphosphate kinase  (NM23) in the process of tumor progression.'
	,'121': 'Provide information on the role of the gene BARD1 in the process of BRCA1 regulation.'
	,'122': 'Provide information on the role of the gene APC (adenomatous polyposis coli) in the process of actin assembly.'
	,'123': 'Provide information on the role of the gene COP2 in the process of transport of CFTR out of the endoplasmic reticulum.'
	,'124': 'Provide information on the role of the gene casein kinase II in the process of ribosome assembly.'
	,'125': 'Provide information on the role of the gene Nurr-77 in the process of preventing auto-immunity by deleting reactive T-cells  before they migrate to the spleen or the lymph nodes.'
	,'126': 'Provide information on the role of the gene P53 in the process of apoptosis.'
	,'127': 'Provide information on the role of the gene alpha7 nicotinic receptor subunit gene in the process of ethanol metabolism.'
	,'128': 'Provide information on the role of the gene gamma-aminobutyric acid receptors (GABABRs) in the process of inhibitory synaptic transmission.'
	,'129': 'Provide information on the role of the gene Interferon-beta in the process of viral entry into host cell.'
	,'130': 'Provide information about the genes BRCA1 regulation of ubiquitin in cancer.'
	,'131': 'Provide information about the genes L1 and L2 in the HPV11 virus in the role of L2 in the viral capsid.'
	,'132': 'Provide information about the genes APC (adenomatous polyposis coli) and wnt in colon cancer.'
	,'133': 'Provide information about the genes phospholipase A2 (PLA2) and SAR1 in Endoplasmic reticulum transport (i.e. vesicle budding from the ER).'
	,'134': 'Provide information about the genes CFTR and Sec61 in degradation of CFTRwhich leads to cystic fibrosis.'
	,'135': 'Provide information about the genes Bop and Pes in cell growth.'
	,'136': 'Provide information about the genes alpha7 nicotinic receptor gene and ApoE gene in the neurotoxic effects of ethanol.'
	,'137': 'Provide information about the genes Insulin-like GF and insulin receptor gene in the function in skin.'
	,'138': 'Provide information about the genes HNF4 and COUP-TF I in the suppression in the function of the liver.'
	,'139': 'Provide information about the genes Ret and GDNF in kidney development.'
	,'140': 'Provide information about BRCA1 185delAG mutation and its/their role in ovarian cancer.'
	,'141': 'Provide information about Huntingtin mutations and its/their role in Huntington\'s Disease.'
	,'142': 'Provide information about Sonic hedgehog mutations and its/their role in developmental disorders.'
	,'143': 'Provide information about Mutations of NM23 and its/their impact on tracheal development.'
	,'144': 'Provide information about Mutations in metazoan Pes and its/their effect on cell growth.'
	,'145': 'Provide information about Mutations of hypocretin receptor 2 and its/their role in narcolepsy.'
	,'146': 'Provide information about Mutations of presenilin-1 gene and its/their biological impact in Alzheimer\'s disease.'
	,'147': 'Provide information about Mutations of alpha7 nAChR gene and its/their biological impact in alcoholism.'
	,'148': 'Provide information about Mutation of familial hemiplegic migraine type 1 (FHM1) and its/their neuronal Ca2+ influx in hippocampal neurons.'
	,'149': 'Provide information about Mutations of the alpha 4-GABAA receptor and its/their impact on behavior.'
};


/*
var pearson_baseline = {
	"title": "PMRA-stems vs BM25-stems",
	"algorithms" : ["BM25-1.9-1.0", "BM25-1.2-0.75"]
	,"pmid" : pmidsALL
	,"correlations" : [BM25_1_9_1_0_stems_corrALL, BM25_1_2_0_75_stems_corrALL]
}*/
