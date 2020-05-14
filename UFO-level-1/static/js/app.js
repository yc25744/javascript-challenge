var tableData = data;
var tbody = d3.select('tbody');


populateTable(tableData);

//tr table td inside table

function populateTable(data) {
    tbody.html("");

    data.forEach(dataRow => {
        var row = tbody.append('tr');

        Object.values(dataRow).forEach(value => {
            var datas = row.append('td');

            datas.text(value);
        });
    });
};

// click on filter_table
var btn = d3.select('button');
btn.on("click", filter_table);

var output = d3.select("#ufo-data");

function filter_table() {

    var date = d3.select('input').property('value')

    var filterData = tableData.filter(function(d){
        return d.datetime === date
    })
    console.log(filterData)

    var cityData = filterData.map(d => d.city);
    var stateData = filterData.map(d => d.state);
    var countryData = filterData.map(d => d.country);
    var shapeData = filterData.map(d => d.shape);
    var durationData = filterData.map(d => d.durationMinutes);
    var commentsData = filterData.map(d => d.comments);

    output.text("");

    var table = d3.select("#ufo-data");

    table.html();


    table.append("td").text(`${date}`);
    table.append("td").text(`${cityData}`);
    table.append("td").text(`${stateData}`);
    table.append("td").text(`${countryData}`);
    table.append("td").text(`${shapeData}`);
    table.append("td").text(`${durationData}`);
    table.append("td").text(`${commentsData}`);

};