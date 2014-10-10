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
    var title = "Correlation matrix ";
    if (data["title"] != undefined) {
    	title = title + data["title"];
    }
    if (topic != undefined) {
        title = mainTitle + " (topic "+ topic + ")";
    }
    corrplot.append("text").text(title)
        .attr("id", "corrtitle").attr("x", width / 2)
        .attr("y", -pad.top / 1.5).attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle");
    d3.select("div#legend").style("opacity", 1);
};