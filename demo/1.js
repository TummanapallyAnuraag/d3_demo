// javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var table = d3.select('body')
    .append('table')
    .attr('border','1');

header = table.append('thead');
rows = table.append('tbody');

header.append('tr').append('th').text('Data');
rows.selectAll('tr')
    .data(dataset)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){
        return d;
    });

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
   .attr("width", svgWidth)
   .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("y", function(d) {
        return svgHeight - d;
   })
   .attr("height", function(d) {
       return d;
   })
   .attr("width", barWidth - barPadding)
   .attr("transform", function (d, i) {
       var translate = [barWidth * i, 0];
       return "translate("+ translate +")";
   })
   .attr('fill', '#F8B327');

var text = svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
       return d;
   })
   .attr("y", function(d, i) {
       return svgHeight - d - 2;
   })
   .attr("x", function(d, i) {
       return barWidth * i;
   })
   .attr("fill", "#3333FF");
