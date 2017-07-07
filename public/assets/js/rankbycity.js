$(document).ready(function() {

    var name = new Array();
    var data = new Array();
    var dataArrayFinal = new Array();
    $.getJSON('http://localhost:3000/ranks', function(dataRank) {

        for (i = 0; i < dataRank.length; i++) {
            name[i] = dataRank[i].metroArea;
            data[i] = dataRank[i].rank2015;
        }
        for (j = 0; j < name.length; j++) {
            var temp = new Array(name[j], data[j]);
            dataArrayFinal[j] = temp;
        }
        console.log(dataArrayFinal);

        Math.easeOutBounce = function(pos) {
            if ((pos) < (1 / 2.75)) {
                return (7.5625 * pos * pos);
            }
            if (pos < (2 / 2.75)) {
                return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
            }
            if (pos < (2.5 / 2.75)) {
                return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
            }
            return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
        };

        Highcharts.chart('container-ranks', {
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            chart: {
                type: 'bar'
            },
            title: {
                style: {
                    color: '#00335A',
                    fontSize: '30px'
                },
                text: 'Most Ozone-Polluted Cities (2015)'
            },
            subtitle: {
                style: {
                    color: '#00335A',
                    fontSize: '15px',
                    fontFamily: 'Arial'
                },
                text: "Cities are ranked using the highest weighted average for any county <br/>within that Combined or Metropolitan Statistical Area",
            },
            xAxis: {
                labels: {
                    step: 1
                },
                categories: name
            },
            yAxis: {
                title: {
                    enabled: true,
                    text: 'Rank'
                },
            },
            plotOptions: {
                series: {
                    pointPadding: 0.2,
                    groupPadding: 0.1,
                    pointWidth: 10,
                    animation: {
                        duration: 2000,
                        easing: 'easeOutBounce'
                    }
                }
            },
            series: [{
                data: dataArrayFinal
            }]
        });
    });
});