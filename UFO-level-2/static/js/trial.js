d3.selectAll(".form-control").on("change", function() {

    var filter_key = d3.select(this).attr("id")
    var filter_value = d3.select(this).property("value").toLowerCase();

    console.log(` key:   ${filter_key}  and value:  ${filter_value}`)
})