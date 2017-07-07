var queryURL = "http://api.airvisual.com//v2/city?country=USA&state=Texas&city=Houston&key=MaxqriLpiqXDbHxK8";

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
    console.log(response.data.state);
    console.log(response.data.city);
    console.log(response.data.current.pollution.aqius);
    console.log(response.data.current.pollution.mainus);
    // using jQuery to retrieve data
    var firstRowTds = $("#table-current-conditions")
        .children()
        .eq(1)
        .children("tr")
        .eq(0)
        .children("td");

    // Setting the inner text of each <td> in the firstRowTds array
    firstRowTds.eq(0).text(response.data.city + ", " + response.data.state);

    firstRowTds.eq(1).text(response.data.current.pollution.aqius);

    firstRowTds.eq(2).text(response.data.current.pollution.mainus);
});