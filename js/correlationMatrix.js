var allTopics = [
	{'topic': '100', 'text': 'Describe the procedure or methods for how to "open up" a cell through a process called "electroporation."'}
	,{'topic': '101', 'text': 'Describe the procedure or methods for exact reactions that take place when you do glutathione S-transferase (GST) cleavage during affinity chromatography.'}
	,{'topic': '102', 'text': 'Describe the procedure or methods for different quantities of different components to use when pouring a gel to make it more or less porous.'}
	,{'topic': '103', 'text': 'Describe the procedure or methods for green fluorescent protein (GFP) tagged proteins to do experiments with tagged proteins.'}
	,{'topic': '104', 'text': 'Describe the procedure or methods for how to do a microsomal budding assay, i.e., budding of vesicles from microsomes in vitro.'}
	,{'topic': '105', 'text': 'Describe the procedure or methods for purification of rat IgM.'}
	,{'topic': '106', 'text': 'Describe the procedure or methods for chromatin IP (Immuno Precipitations) to isolate proteins that are bound to DNA in order to precipitate the proteins out of the DNA.'}
	,{'topic': '107', 'text': 'Describe the procedure or methods for normalization procedures that are used for microarray data.'}
	,{'topic': '108', 'text': 'Describe the procedure or methods for identifying in vivo protein-protein interactions in time and space in the living cell.'}
	,{'topic': '109', 'text': 'Describe the procedure or methods for fluorogenic 5\'-nuclease assay.'}
	,{'topic': '110', 'text': 'Provide information about the role of the gene Interferon-beta in the disease Multiple Sclerosis.'}
	,{'topic': '111', 'text': 'Provide information about the role of the gene PRNP in the disease Mad Cow Disease.'}
	,{'topic': '112', 'text': 'Provide information about the role of the gene IDE gene in the disease Alzheimer\'s Disease.'}
	,{'topic': '113', 'text': 'Provide information about the role of the gene MMS2 in the disease Cancer.'}
	,{'topic': '114', 'text': 'Provide information about the role of the gene APC (adenomatous polyposis coli) in the disease Colon Cancer.'}
	,{'topic': '115', 'text': 'Provide information about the role of the gene Nurr-77 in the disease Parkinson\'s Disease.'}
	,{'topic': '116', 'text': 'Provide information about the role of the gene Insulin receptor gene in the disease Cancer.'}
	,{'topic': '117', 'text': 'Provide information about the role of the gene Apolipoprotein E (ApoE) in the disease Alzheimer\'s Disease.'}
	,{'topic': '118', 'text': 'Provide information about the role of the gene Transforming growth factor-beta1 (TGF-beta1) in the disease Cerebral Amyloid Angiopathy (CAA).'}
	,{'topic': '119', 'text': 'Provide information about the role of the gene GSTM1 in the disease Breast Cancer.'}
	,{'topic': '120', 'text': 'Provide information on the role of the gene nucleoside diphosphate kinase  (NM23) in the process of tumor progression.'}
	,{'topic': '121', 'text': 'Provide information on the role of the gene BARD1 in the process of BRCA1 regulation.'}
	,{'topic': '122', 'text': 'Provide information on the role of the gene APC (adenomatous polyposis coli) in the process of actin assembly.'}
	,{'topic': '123', 'text': 'Provide information on the role of the gene COP2 in the process of transport of CFTR out of the endoplasmic reticulum.'}
	,{'topic': '124', 'text': 'Provide information on the role of the gene casein kinase II in the process of ribosome assembly.'}
	,{'topic': '125', 'text': 'Provide information on the role of the gene Nurr-77 in the process of preventing auto-immunity by deleting reactive T-cells  before they migrate to the spleen or the lymph nodes.'}
	,{'topic': '126', 'text': 'Provide information on the role of the gene P53 in the process of apoptosis.'}
	,{'topic': '127', 'text': 'Provide information on the role of the gene alpha7 nicotinic receptor subunit gene in the process of ethanol metabolism.'}
	,{'topic': '128', 'text': 'Provide information on the role of the gene gamma-aminobutyric acid receptors (GABABRs) in the process of inhibitory synaptic transmission.'}
	,{'topic': '129', 'text': 'Provide information on the role of the gene Interferon-beta in the process of viral entry into host cell.'}
	,{'topic': '130', 'text': 'Provide information about the genes BRCA1 regulation of ubiquitin in cancer.'}
	,{'topic': '131', 'text': 'Provide information about the genes L1 and L2 in the HPV11 virus in the role of L2 in the viral capsid.'}
	,{'topic': '132', 'text': 'Provide information about the genes APC (adenomatous polyposis coli) and wnt in colon cancer.'}
	,{'topic': '133', 'text': 'Provide information about the genes phospholipase A2 (PLA2) and SAR1 in Endoplasmic reticulum transport (i.e. vesicle budding from the ER).'}
	,{'topic': '134', 'text': 'Provide information about the genes CFTR and Sec61 in degradation of CFTRwhich leads to cystic fibrosis.'}
	,{'topic': '135', 'text': 'Provide information about the genes Bop and Pes in cell growth.'}
	,{'topic': '136', 'text': 'Provide information about the genes alpha7 nicotinic receptor gene and ApoE gene in the neurotoxic effects of ethanol.'}
	,{'topic': '137', 'text': 'Provide information about the genes Insulin-like GF and insulin receptor gene in the function in skin.'}
	,{'topic': '138', 'text': 'Provide information about the genes HNF4 and COUP-TF I in the suppression in the function of the liver.'}
	,{'topic': '139', 'text': 'Provide information about the genes Ret and GDNF in kidney development.'}
	,{'topic': '140', 'text': 'Provide information about BRCA1 185delAG mutation and its/their role in ovarian cancer.'}
	,{'topic': '141', 'text': 'Provide information about Huntingtin mutations and its/their role in Huntington\'s Disease.'}
	,{'topic': '142', 'text': 'Provide information about Sonic hedgehog mutations and its/their role in developmental disorders.'}
	,{'topic': '143', 'text': 'Provide information about Mutations of NM23 and its/their impact on tracheal development.'}
	,{'topic': '144', 'text': 'Provide information about Mutations in metazoan Pes and its/their effect on cell growth.'}
	,{'topic': '145', 'text': 'Provide information about Mutations of hypocretin receptor 2 and its/their role in narcolepsy.'}
	,{'topic': '146', 'text': 'Provide information about Mutations of presenilin-1 gene and its/their biological impact in Alzheimer\'s disease.'}
	,{'topic': '147', 'text': 'Provide information about Mutations of alpha7 nAChR gene and its/their biological impact in alcoholism.'}
	,{'topic': '148', 'text': 'Provide information about Mutation of familial hemiplegic migraine type 1 (FHM1) and its/their neuronal Ca2+ influx in hippocampal neurons.'}
	,{'topic': '149', 'text': 'Provide information about Mutations of the alpha 4-GABAA receptor and its/their impact on behavior.'}
];

function getTopicText(myTopic) {
	for (var i = 0; i < allTopics.length; i++) {
		if (allTopics[i].topic == myTopic) {
			return "TREC topic " + allTopics[i].topic + " - " + allTopics[i].text;
		}
	}
	return "TREC topic not available";
}

/**
* Draws a correlation matrix.
* This code is a modification of https://github.com/kbroman/d3examples/tree/master/corr_w_scatter.
*/
function drawCorrelationMatrix(target, data, topic) {
    var corXscale, corYscale, corZscale, corr, corrplot, cellHeight, height, numVariables, pad, svg, totalHeight, totalWidth, width;
    cellHeight = 30;
    height = data["algorithms"].length * cellHeight;
    width = 800;
    pad = {
      left: 120,
      top: 40,
      right: 5,
      bottom: 70
    };
	if (topic != undefined) {
		topicNumber = parseInt(topic);
		if ((topicNumber === 135) || (topicNumber < 100) || (topicNumber > 149)){
			topic = "100";	
		}	
	}
    totalHeight = height + pad.top + pad.bottom;
    totalWidth = (width + pad.left + pad.right) * 2;
    svg = d3.select("div#" + target).append("svg").attr("height", totalHeight).attr("width", totalWidth);
    corrplot = svg.append("g").attr("id", "corrplot").attr("transform", "translate(" + pad.left + "," + pad.top + ")");
    numVariables = data["pmid"].length;
	numAlgorithms = data["algorithms"].length;
    corXscale = d3.scale.ordinal().domain(d3.range(numVariables)).rangeBands([0, width]);
    corYscale = d3.scale.ordinal().domain(d3.range(numAlgorithms)).rangeBands([height, 0]);
    corZscale = d3.scale.linear().domain([-1, 0, 1]).range(["darkslateblue", "white", "crimson"]);
    corr = [];
    for (var i in data.correlations) {
      for (var j in data.correlations[i]) {
        corr.push({
          row: i,
          col: j,
          value: data.correlations[i][j]
        });
      }
    }
    corrplot.selectAll("empty")
    	.data(corr).enter()
    	.append("rect")
    	.attr("class", "cell")
    	.attr("x", function(d) {
      		return corXscale(d.col);
    	})
    	.attr("y", function(d) {
      		return corYscale(d.row);
    	})
    	.attr("width", corXscale.rangeBand())
    	.attr("height", corYscale.rangeBand())
    	.attr("fill", function(d) {
      		return corZscale(d.value);
    	})
    	.attr("stroke", "none")
    	.attr("stroke-width", 2)
    	.on("mouseover", function(d) {
      		d3.select(this)
      			.attr("stroke", "black");
      		corrplot.append("text")
      			.attr("id", "corrtext")
      			.text(d3.format(".5f")(d.value))
      			.attr("x", //function() {return d3.mouse(this)[0] + 5;})
                function() {
        			return corXscale(d.col) + corXscale.rangeBand() + 20;
      			})
      			.attr("y", //function() {return d3.mouse(this)[1] - 5;})
                function() {
        			return corYscale(d.row) - 10;
      			})
      			.attr("fill", "black")
      			.attr("dominant-baseline", "middle")
      			.attr("text-anchor", "middle");
      		return corrplot.append("text")
      			.attr("class", "corrlabel")
      			.attr("x", corXscale(d.col))
      			.attr("y", height + pad.bottom * 0.2)
      			.text(data["pmid"][d.col])
      			.attr("dominant-baseline", "middle")
      			.attr("text-anchor", "middle");
    	})
    	.on("mouseout", function() {
      		d3.selectAll("text.corrlabel").remove();
      		d3.selectAll("text#corrtext").remove();
      		return d3.select(this).attr("stroke", "none");
    	})
    corrplot.selectAll("text.corrYlabel")
        .data(data.algorithms).enter().append("text")
        .attr("class", "corrYlabel")
        .attr("y", function(d, i) {return corYscale(i) + cellHeight/2})
        .attr("x", -pad.left * 0.1)
        .text(function(d) {return d;})
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "end");
    corrplot.selectAll("rect.corrFrame")
        .data(data.algorithms).enter().append("rect")
        .attr("class", "corrFrame")
        .attr("height", cellHeight).attr("width", width).attr("fill", "none")
        .attr("x", 0).attr("y", function(d, i) {return corYscale(i)})
        .attr("stroke", "black").attr("stroke-width", 0.3).attr("pointer-events", "none");
    corrplot.append("rect")
        .attr("height", height).attr("width", width).attr("fill", "none")
        .attr("stroke", "black").attr("stroke-width", 1).attr("pointer-events", "none");
    var title = "Pearson Correlation matrix ";
    if (data["title"] != undefined) {
		console.log(data["title"]);
    	title = title + data["title"];
    }
    if (topic != undefined) {
		console.log(mainTitle);
        title = "Pearson Correlation matrix " + mainTitle + " (topic "+ topic + ")";
    }
    var textWrapper = corrplot.append("text").text(null);
	textWrapper.append("tspan").text(title)
        .attr("id", "corrtitle").attr("x", width / 2)
        .attr("y", -pad.top / 1.5).attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle")
    
    if (topic != undefined) {
    	textWrapper.append("tspan").text(getTopicText(topic)).style("fill", "blue")
		.attr("id", "corrtitle").attr("x", width / 2)
        .attr("y", -pad.top / 1.5 + 15).attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle");
    }     
	textWrapper.append("tspan").text("The more red the higher the correlation, the more blue the lower the correlation")
		.attr("id", "corrtitle").attr("x", width / 2)
        .attr("y", -pad.top / 1.5 + 650).attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle");
	textWrapper.append("tspan").text("On mouse-over you will see the correlation value.")
		.attr("id", "corrtitle").attr("x", width / 2)
        .attr("y", -pad.top / 1.5 + 668).attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle");
	if (topic != undefined) {
		textWrapper.append("tspan").text("Change the parameter ?topic=<any number between 100 and 149 except 135> to see other topic.")
		.attr("id", "corrtitle").attr("x", width / 2)
        .attr("y", -pad.top / 1.5 + 686).attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle");
	}
    d3.select("div#legend").style("opacity", 1);
};