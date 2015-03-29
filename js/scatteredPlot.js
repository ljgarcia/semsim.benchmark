var lst = ["7576301", "8593205", "8924224", "9015311", "9245791", "9443089", "9569056", "9584145", "9649126", "9681800", "9732293", "9832560", "10330400", "10352017", "10491393", "10525535", "10662776", "10811821", "11056682", "11086000", "11157977", "11285283", "11381093", "11401727", "11532215", "11564752", "11591730", "11690545", "11707154", "11737944", "11790258", "11870542", "11879553", "11983060", "12049663", "12058019", "12095422", "12135983", "12147673", "12175426", "12184807", "12184811", "12225587", "12354330", "12429061", "12429067", "12537560", "12538638", "12556960", "12615908", "12659637", "12682085", "12803655", "12823867", "12930545", "12950995", "12962547", "12967349", "14517204", "14557250", "14562023", "14581449"];

var topics = [
	{"topic": "100", "text": "'Describe the procedure or methods for how to 'open up' a cell through a process called 'electroporation.'}", "pmids": [12175426]}
	, {"topic": "103", "text": "Describe the procedure or methods for green fluorescent protein (GFP) tagged proteins to do experiments with tagged proteins.", "pmids": [11737944]}
	, {"topic": "106", "text": "Describe the procedure or methods for chromatin IP (Immuno Precipitations) to isolate proteins that are bound to DNA in order to precipitate the proteins out of the DNA.", "pmids": [14581449]}
	, {"topic": "107", "text": "Describe the procedure or methods for normalization procedures that are used for microarray data.", "pmids": [11532215, 11690545, 11790258, 11983060, 12049663, 12095422, 12184807, 12184811, 12225587, 12354330, 12429061, 12537560, 12659637, 12803655, 12823867, 12930545, 12950995, 12962547, 12967349]}
	, {"topic": "108", "text": "Describe the procedure or methods for identifying in vivo protein-protein interactions in time and space in the living cell.", "pmids": [9245791, 10352017, 11381093, 11401727, 12615908, 14517204]}
	, {"topic": "111", "text": "Provide information about the role of the gene PRNP in the disease Mad Cow Disease.", "pmids": [9681800]}
	, {"topic": "114", "text": "Provide information about the role of the gene APC (adenomatous polyposis coli) in the disease Colon Cancer.", "pmids": [9015311, 9649126, 11707154]}
	, {"topic": "119", "text": "Provide information about the role of the gene GSTM1 in the disease Breast Cancer.", "pmids": [11056682, 12556960, 14562023]}
	, {"topic": "120", "text": "Provide information on the role of the gene nucleoside diphosphate kinase  (NM23) in the process of tumor progression.", "pmids": [7576301, 8593205, 8924224, 9443089, 9569056]}
	, {"topic": "121", "text": "Provide information on the role of the gene BARD1 in the process of BRCA1 regulation.", "pmids": [9832560, 11879553]}
	, {"topic": "122", "text": "Provide information on the role of the gene APC (adenomatous polyposis coli) in the process of actin assembly.", "pmids": [10491393, 10662776, 11157977, 11564752, 12058019]}
	, {"topic": "123", "text": "Provide information on the role of the gene COP2 in the process of transport of CFTR out of the endoplasmic reticulum.", "pmids": [11086000, 12538638]}
	, {"topic": "124", "text": "Provide information on the role of the gene casein kinase II in the process of ribosome assembly.", "pmids": [11285283]}
	, {"topic": "126", "text": "Provide information on the role of the gene P53 in the process of apoptosis.", "pmids": [9584145, 11591730, 11870542, 12135983]}
	, {"topic": "132", "text": "Provide information about the genes APC (adenomatous polyposis coli) and wnt in colon cancer.", "pmids": [10330400]}
	, {"topic": "139", "text": "Provide information about the genes Ret and GDNF in kidney development.", "pmids": [9732293, 12682085]}
	, {"topic": "141", "text": "Provide information about Huntingtin mutations and its/their role in Huntington's Disease.", "pmids": [14557250]}
	, {"topic": "146", "text": "Provide information about Mutations of presenilin-1 gene and its/their biological impact in Alzheimer's disease.", "pmids": [10525535, 10811821, 12147673, 12429067]}
];

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

function createList (target, similarities_csv) {
	var wrapper = d3.select("div#" + target).append("div");
	wrapper.append("span").style("font-size", "16px").text("Please select the PubMed ID you are interested in: ");
	var select = wrapper.append("span").append("select");
	var options = select.selectAll("option")
		.data(lst).enter()
		.append("option")
		.attr("value", function(d) {return d})
		.text(function(d) {return d});
	d3.select("#topicText").text(getTopicText(lst[0])).style("color", "blue");
	select.on("click", function() {
		if (selectedIndex != this.selectedIndex) {// so on the first change it will not redraw
			selectedIndex = this.selectedIndex;
			d3.select("#topicText").text(getTopicText(lst[this.selectedIndex])).style("color", "blue");
			drawScatteredPlot('plot', lst[this.selectedIndex], similarities_csv, selectedOption);
		}		
	});
	/*d3.select("div#" + target)
		.append("div")
		.text("Similarities for all articles regarding the selected one will be displayed. Articles are represented by circles.")
	d3.select("div#" + target)
		.append("div")
		.text("Mouse-over the articles, i.e., circles, to see the similarity values based on annotations, the first value is based on 	title-and-abstract, the second one on full-text");
	d3.select("div#" + target)
		.append("div")
		.text("PMRA is the algorithm used by default. For Cosine or BM25, please add the parameter ?set=cosine or ?set=bm25 to the URL.");
		*/
}

function getTopicText(pmid) {
	for (var i = 0; i < topics.length; i++) {
		for (var j = 0; j < topics[i].pmids.length; j++) {
			if (pmid == topics[i].pmids[j]) {
				return "TREC topic " + topics[i].topic + " - " + topics[i].text;
			}	
		}		
	}
	return "TREC topic not available";
}

function inTopic(d, myTopic) {
	for (var i = 0; i < myTopic.pmids.length; i++) {
		if (myTopic.pmids[i] == d.PMID) {
			return true;
		}
	}
	return false;
}

function drawScatteredPlot (target, pmid, similarities_csv, whichTopic) {
	//get the topic for the selected article
	var myTopic = undefined;
	for (var i = 0; i < topics.length; i++) {
		for (var j = 0; j < topics[i].pmids.length; j++) {
			if (topics[i].pmids[j] == pmid) {
				myTopic = topics[i];
				break;
			}
		}	
		if (myTopic != undefined) {
			break;
		}	
	}
	
	//get the topic display option
	
	
	d3.select("svg").remove(); //so we can plot all over again
	var margin = {top: 30, right: 30, bottom: 30, left: 30},
	    width = 500- margin.left - margin.right,
	    height = 500 - margin.top - margin.bottom;
	
	/* 
	 * value accessor - returns the value to encode for a given data object.
	 * scale - maps value to a visual display encoding, such as a pixel position.
	 * map function - maps from data value to display value
	 * axis - sets up axis
	 */ 
	
	// setup x 
	var xValue = function(d) { return d["FC_" + pmid];}, // data -> value
	    xScale = d3.scale.linear().range([0, width]), // value -> display
	    xMap = function(d) { return xScale(xValue(d));}, // data -> display
	    xAxis = d3.svg.axis().scale(xScale).orient("bottom");
	
	// setup y
	var yValue = function(d) { return d["TA_" + pmid];}, // data -> value
	    yScale = d3.scale.linear().range([height, 0]), // value -> display
	    yMap = function(d) { return yScale(yValue(d));}, // data -> display
	    yAxis = d3.svg.axis().scale(yScale).orient("left");
	
	// setup fill color
	var cValue = function(d, i) { return i;},
	    color = d3.scale.category10();
	
	// add the graph canvas to the body of the webpage
	var svg = d3.select("div#" + target).append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	// add the tooltip area to the webpage
	var tooltip = d3.select("body").append("div")
	    .attr("class", "tooltip")
	    .style("opacity", 0);
	
	// load data
	d3.csv(similarities_csv, function(error, data) {
	
	  // change string (from CSV) into number format
	  data.forEach(function(d) {
	    d["FC_" + pmid] = +d["FC_" + pmid];
	    d["TA_" + pmid] = +d["TA_" + pmid];
	//    console.log(d);
	  });
	
	  // don't want dots overlapping axis, so add in buffer to data domain
	  //xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
	  //yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);
	
	  // x-axis
	  svg.append("g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis)
	    .append("text")
	      .attr("class", "label")
	      .attr("x", width)
	      .attr("y", -6)
	      .style("text-anchor", "end")
	      .text("Annotations on Full-Content (" + pmid + ")");
	
	  // y-axis
	  svg.append("g")
	      .attr("class", "y axis")
	      .call(yAxis)
	    .append("text")
	      .attr("class", "label")
	      .attr("transform", "rotate(-90)")
	      .attr("y", 6)
	      .attr("dy", ".71em")
	      .style("text-anchor", "end")
	      .text("Annotations on Title&Abstract (" + pmid + ")");
	
	  // draw dots
	  var shapes = svg.selectAll(".dot")
	      .data(data).enter();
	  //circles are not in topic  
	  if ((whichTopic === "both") || (whichTopic === "other")) {
	  	shapes.append("circle")
	  	.filter(function(d) {
	  		return !inTopic(d, myTopic);
	  	})
	      .attr("class", "dot")
	      .attr("r", 3.5)
	      .attr("cx", xMap)
	      .attr("cy", yMap)
	      .style("fill", function(d,i) {
	      	return color(cValue(d,i));
	      }) 
	      .on("mouseover", function(d) {
	          tooltip.transition()
	               .duration(200)
	               .style("opacity", .9);
	          tooltip.html("PMID:" + d["PMID"] + "<br/> (" + xValue(d) 
		        + ", " + yValue(d) + ")")
	               .style("left", (d3.event.pageX + 5) + "px")
	               .style("top", (d3.event.pageY - 28) + "px");
	      })
	      .on("mouseout", function(d) {
	          tooltip.transition()
	               .duration(500)
	               .style("opacity", 0);
	      });
	  }
	  
	 //rectangles are in topic 
	 if ((whichTopic === "both") || (whichTopic === "selected")) {    
		 shapes.append("rect")
		  	.filter(function(d) {
		  		return inTopic(d, myTopic);
		  	})
		      .attr("class", "dot")
		      .attr("width", 7)
		      .attr("height", 7)
		      //.attr("r", 3.5)
		      .attr("x", xMap)
		      .attr("y", yMap)
		      .style("fill", function(d,i) {
		      	return color(cValue(d,i));
		      }) 
		      .on("mouseover", function(d) {
		          tooltip.transition()
		               .duration(200)
		               .style("opacity", .9);
		          tooltip.html("PMID:" + d["PMID"] + "<br/> (" + xValue(d) 
			        + ", " + yValue(d) + ")")
		               .style("left", (d3.event.pageX + 5) + "px")
		               .style("top", (d3.event.pageY - 28) + "px");
		      })
		      .on("mouseout", function(d) {
		          tooltip.transition()
		               .duration(500)
		               .style("opacity", 0);
		      });
	  }
	
	  // draw legend
	  /*
	  var legend = svg.selectAll(".legend")
	      .data(color.domain())
	    .enter().append("g")
	      .attr("class", "legend")
	      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
	
	  // draw legend colored rectangles
	  legend.append("rect")
	      .attr("x", width - 18)
	      .attr("width", 18)
	      .attr("height", 18)
	      .style("fill", color);
	
	  // draw legend text
	  legend.append("text")
	      .attr("x", width - 24)
	      .attr("y", 9)
	      .attr("dy", ".35em")
	      .style("text-anchor", "end")
	      .text(function(d) { return d;})*/
	});
};