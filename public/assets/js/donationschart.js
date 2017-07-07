$(document).ready(function() {

    $.getJSON('/donation', function(dataDonation) {
        var sum = 0;
        for (i = 0; i < dataDonation.length; i++) {
            sum += dataDonation[i].donation;
        }
        console.log("Total donations: " + sum);

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


        $(function() {
            $('#container-donations').highcharts({
                legend: {
                    enabled: false
                },
                chart: {
                    type: 'column'
                },
                credits: {
                    enabled: false
                },
                title: {
                    style: {
                        color: '#004D40',
                        fontSize: '15px'
                    },
                    text: 'GOAL: $5,000'
                },
                xAxis: {
                    categories: ['Current Donations']
                },
                yAxis: {
                    max: 5000,
                    title: {
                        text: 'Amount'
                    }
                },
                plotOptions: {
                    series: {
                        pointWidth: 50,
                    }
                },
                series: [{
                    data: [sum]
                }],
            });
        });
    });
});