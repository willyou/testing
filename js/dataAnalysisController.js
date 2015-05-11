var dataAnalysisController = (function() {
    var render = function() {
        $('#container').highcharts({
            title: {
                text: 'Birth in Taiwan',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: Ministry of the Interiror',
                x: -20
            },
            xAxis: {
                categories: ['2007', '2008', '2009', '2010', '2011', '2012',
                    '2013', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ]
            },
            yAxis: {
                title: {
                    text: 'People'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Male',
                data: [106898, 103937, 99492, 87213, 101943, 118848, 103120]
            }, {
                name: 'Female',
                data: [97516, 94796, 91818, 79673, 94684, 110633, 95993]
            }]
        });
    };

    return {
        render: render
    };
})();