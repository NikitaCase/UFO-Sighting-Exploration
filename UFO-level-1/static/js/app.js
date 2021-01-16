// data inhereted from data.js 
var sightings = data;

// Select areas of the page which will be used to sort and display data

var button_filter = d3.select("#filter-btn");
var form = d3.select("form");
var tbody = d3.select("tbody");

// Create function to sort data by user date 
function filter_sightings() {

    // Prevent the page from refreshing 
    d3.event.preventDefault();

    // Select the form element which holds input and store the user input to a variable 
    var input_element = d3.select("#datetime");
    var user_date = input_element.property("value");

    // Filter data by user criteria  
    var selected_sightings = sightings.filter(sighting => sighting.datetime === user_date);

    // Clear what was previously displayed in table
    tbody.html("");

    // Iterate through selected sightings
    // add a new row for each sighting
    selected_sightings.forEach((row) => {
        var tr = tbody.append("tr");

        // Iterate through key-value pairs pair, add new column for each pair 
        // display the value in the column 
        Object.entries(row).forEach(([key, value]) => {
            var td = tr.append("td")
            td.text(value)
        });
    });
};

// Clear table output 
function clear_table() {
    var tbody = d3.select("tbody");
    tbody.html("");
};


// Add listeners on page
button_filter.on("click", filter_sightings);
form.on("change", filter_sightings);

button_clear.on("click", clear_table);