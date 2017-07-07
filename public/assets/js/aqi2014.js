$(document).ready(function() {


    // Make monochrome colors and set them as default for all pies
    Highcharts.getOptions().plotOptions.pie.colors = (function() {
        var colors = [],
            base = Highcharts.getOptions().colors[0],
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());




    $("#button-aqi14").click(function() {

        var name = new Array();
        var data = new Array();
        var dataArrayFinal = new Array();
        $.getJSON("http://localhost:3000/aqi2014", function(dataAnnualAQI2014) {

            for (i = 0; i < dataAnnualAQI2014.length; i++) {
                name[i] = dataAnnualAQI2014[i].county;
                data[i] = dataAnnualAQI2014[i].goodDays;

            }
            for (j = 0; j < name.length; j++) {
                var temp = new Array(name[j], data[j]);
                dataArrayFinal[j] = temp;
            }


            console.log(dataAnnualAQI2014);



            Highcharts.chart('container', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Good Days By County'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'El Paso',
                    data: [183, 173, 8, 1, 0, 0, ]

                }]

            });

        });
    });

});