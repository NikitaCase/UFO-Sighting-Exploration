// Inheret array from data.js 
var sightings = data;

// Select elements that will be used on the page 
var button_filter = d3.select("#filter-btn");
var button_clear = d3.select("#clear-btn");
var form = d3.select("form");
var tbody = d3.select("tbody")



// Clear table output 
function clear_table() {
    tbody.html("")
    var filters = {}
};

//

function update_filters() {

    var filter_key = d3.select(this).attr("id")
    var filter_value = d3.select(this).property("value").toLowerCase();
    console.log(` key:   ${filter_key}  and value:  ${filter_value}`)

    // var filters = {};

    // filters.filter_key = filter_value;

    return filter_key, filter_value
}


function filter_sightings() {
    var selected_sightings = sightings.filter(sighting => sighting[filter_key] === filter_value)

    selected_sightings.forEach((row) => {
        var tr = tbody.append("tr");

        // Iterate through key-value pairs pair, add new column for each pair 
        // display the value in the column 

        Object.entries(row).forEach(([key, value]) => {
            var td = tr.append("td")
            td.text(value)
        })
    })


}

// function filter_sightings() {
//     var slected_sightings = Object.entries(filters).forEach(([key, value]) => {
//         sightings.filter(sighting => sighting[filter_key] === filter_value)

//     })
// }



// Event listeners
d3.selectAll(".form-control").on("change", update_filters)

button_filter.on("click", filter_sightings);
form.on("change", filter_sightings);

button_clear.on("click", clear_table);