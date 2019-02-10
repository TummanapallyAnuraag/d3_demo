var svgWidth = 500, svgHeight = 300, margin=30;
var numbers = [ 5, 4, 10, 1 ],
    data = [
      { date: '2014-01-01', amount: 10 },
      { date: '2014-02-01', amount: 20 },
      { date: '2014-03-01', amount: 40 },
      { date: '2014-04-01', amount: 80 }
    ];
var columns = ['Date', 'Amount'];

var table = d3.select('body')
    .append('table')
    .attr('border', '1');

var thead = table.append('thead');
var tbody = table.append('tbody');
thead.append('tr')
    .selectAll('th')
    .data(columns).enter()
    .append('th')
    .text(function (d) { return d; });

// header.selectAll('th').data(['Date', 'Amount']).enter().append('th').text(function(d){return d;});
var rows = tbody.selectAll('tr')
    .data(data)
    .enter()
    .append('tr');

rows.append('td')
    .text(function (d) { return d.date; });

rows.append('td')
    .text(function (d) { return d.amount; });

// table.selectAll('tr')
//     .data([{date:'0', amount:0}].concat(data))
//     .enter()
//     .append('tr')
//     .append('td')
//     .text(function(d){
//         return d.date;
//     })
//     .append('td')
//     .text(function(d){
//         return d.amount;
//     });

var y = d3.scaleLinear()
    .domain(d3.extent(data, function(d,i){ return d.amount }))
    .range([svgHeight-2*margin, 0]);

var x = d3.scaleTime()
    .domain([
        new Date(Date.parse('2014-01-01')),
        new Date(Date.parse('2014-04-01'))
    ])
    .range([0, svgWidth-2*margin]);

var xAxis = d3.axisBottom(x)
    .ticks(4);

var yAxis = d3.axisLeft(y)
    .ticks(4);

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var maing = svg.append('g')
    .attr('width', svgWidth - 2*margin)
    .attr('height', svgHeight - 2*margin)
    .attr('transform', 'translate('+margin+','+margin+')');

maing.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0, ' + (svgHeight - 2*margin).toString() + ')')
    .call(xAxis);

maing.append('g')
    .attr('class', 'y axis')
    .call(yAxis);

maing.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr('color', 'green')
    .attr('fill','currentColor')
    .attr("r", "5")
    .attr('cx', function(d, i){
        return x(new Date(Date.parse(d.date)));
    })
    .attr('cy', function(d,i){
        return y(d.amount);
    })
