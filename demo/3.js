var svgWidth = 500, svgHeight = 250, margin=30;
var sales = [
  { product: 'Hoodie',  count: 12 },
  { product: 'T-shirt',  count: 7 },
  { product: 'Shirt', count: 6 },
];
var columns = ['Product', 'Count'];
var table = d3.select('body')
    .append('table')
    .attr('border', '1');

var thead = table.append('thead');
var tbody = table.append('tbody');
thead.append('tr')
    .selectAll('th')
    .data(columns)
    .enter()
    .append('th')
    .text(function (d) { return d; });

var rows = tbody.selectAll('tr')
    .data(sales)
    .enter()
    .append('tr');

rows.append('td')
    .text(function (d) { return d.product; });

rows.append('td')
    .text(function (d) { return d.count; });


var pie = d3.pie()
    .value(function(d) { return d.count })
var slices = pie(sales);
var arc = d3.arc()
    .innerRadius(30)
    .outerRadius(80);

var color = d3.scaleOrdinal(d3.schemeCategory10);
var svg = d3.select('svg.pie').attr('width', svgWidth).attr('height', svgHeight);
var g = svg.append('g')
    .attr('transform', 'translate(200, 100)')

g.selectAll('path.slice')
    .data(slices)
    .enter()
    .append('path')
    .attr('class', 'slice')
    .attr('d', arc)
    .attr('fill', function(d) {
        return color(d.data.product);
    });

svg.append('g')
    .attr('class', 'legend')
    .selectAll('text')
    .data(slices)
    .enter()
    .append('text')
    .text(function(d) { return '* ' + d.data.product; })
    .attr('fill', function(d) { return color(d.data.product); })
    .attr('y', function(d, i) { return 20 * (i + 1); })
