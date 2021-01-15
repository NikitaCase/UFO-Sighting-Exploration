// data inhereted from data.js 
var sightings = data;

// Select areas of the page which will be used to sort and display data

var button_filter = d3.select("#filter-btn");
var form = d3.select("form");

function update_filters() {
    
    var filters = {}
    // key : val
    // id : user_inp 
    var filter_key = d3.select(this)
    var filter_value = filter_key.property("value").toLowerCase()

    filters[filter_key]:filter_value

    return filters

}

// Create function to sort data by user date 
function filter_sightings() {

    // Prevent the page from refreshing 
    d3.event.preventDefault();

    // Select the form element which holds input and store the user input to a variable 

    var input_element = d3.select("#datetime");
    
    var user_date = input_element.property("value");

    var country = d3.select("#country").property("value").toLowerCase();
    var city = d3.select("#city").property("value").toLowerCase()
    var state = d3.select("#state").property("value").toLowerCase()
    var shape = d3.select("#shape").property("value").toLowerCase()

    var selected_sightings = sightings.filter()


    // // Filter data by user criteria  
    // if (user_date != ""){ 
    //    selected_sightings = sightings.filter(sighting => sighting.datetime === user_date); 
    // }
    // if (country != ""){

    // }

    // Clear what was previously displayed in table
    var tbody = d3.select("tbody");
    console.log(tbody)

    tbody.html("");
    //$("tbody tr>td").remove();

    // Iterate through selected sightings
    // add a new row for each sighting
    selected_sightings.forEach((row) => {
        var tr = tbody.append("tr");

        // Iterate through key-value pairs pair, add new column for each pair 
        // display the value in the column 

        Object.entries(row).forEach(([key, value]) => {
            var td = tr.append("td")
            td.text(value)
        })
    })
};

d3.selectAll(".form-control").on("change", updateFilters);

button_filter.on("click", filter_sightings);
form.on("submit", filter_sightings);