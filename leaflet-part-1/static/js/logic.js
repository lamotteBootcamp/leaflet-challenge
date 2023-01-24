//Store the API endpoint as queryUrl
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//Get request to the query URL
d3.json(queryUrl).then(function(data) {

    console.log(data);

    createFeatures(data.features);
});

function getColor(depth) {
    return depth >= 90 ? 'red':
        depth > 70 ? 'orange':
            depth > 50 ? 'yellow':

}


















