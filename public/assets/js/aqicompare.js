$(document).ready(function() {

    $("#button-aqi14").click(function() {

        var aqi14 = new Array();
        $.getJSON("http://localhost:3000/aqi2014", function(dataAnnualAQI2014) {

            //populate series
            for (i = 0; i < dataAnnualAQI2014.length; i++) {
                aqi14.push([dataAnnualAQI2014[10].goodDays,
                    dataAnnualAQI2014[10].moderateDays,
                    dataAnnualAQI2014[10].unhealthySensitive,
                    dataAnnualAQI2014[10].unhealthyDays,
                    dataAnnualAQI2014[10].veryUnhealthy,
                    dataAnnualAQI2014[10].hazardous
                ]);

                console.log(dataAnnualAQI2014[i].moderateDays, +" " + dataAnnualAQI2014[i].goodDays);
            }
            var aqi15 = new Array();
            $.getJSON("http://localhost:3000/aqi2015", function(dataAnnualAQI2015) {

                //populate series
                for (i = 0; i < dataAnnualAQI2015.length; i++) {
                    aqi15.push([dataAnnualAQI2015[10].goodDays,
                        dataAnnualAQI2015[10].moderateDays,
                        dataAnnualAQI2015[10].unhealthySensitive,
                        dataAnnualAQI2015[10].unhealthyDays,
                        dataAnnualAQI2015[10].veryUnhealthy,
                        dataAnnualAQI2015[10].hazardous
                    ]);

                    console.log(dataAnnualAQI2015[i].moderateDays, +" " + dataAnnualAQI2015[i].goodDays);
                }




                $("#container").highcharts({
                    chart: {
                        type: "column"
                    },
                    title: {
                        text: "MOST POLLUTED CITIES IN THE US"
                    },
                    xAxis: {
                        type: "category",
                        allowDecimals: false,
                        title: {
                            text: "",
                        }
                    },
                    yAxis: {
                        title: {
                            text: "",
                        }
                    },
                    series: [{
                        name: "test",
                        data: aqi14

                    }, {
                        name: "second15",
                        data: aqi15
                    }]
                });
            });
        });
    });
});