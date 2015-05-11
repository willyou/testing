var todayWeatherController = (function() {
    var init = function() {
        //support enter key 
        $('#todayWeather input').keyup(function(e){
            if(e.which == 13){
                $("#todayWeather button[type='button']").click();        
            }
        });
        
        //form submit
        $("#todayWeather button[type='button']").click(function() {
            var region = $('#todayWeather input[name="city"]').val() + "." + $('#todayWeather input[name="country"]').val();
            $.ajax({
                beforeSend: function() {
                    $('body').addClass('loading');
                    $('#error-msg').hide();
                    $('.media-wrpper').hide();
                },
                type: "GET",
                dataType: 'jsonp',
                url: "http://api.openweathermap.org/data/2.5/weather",
                data: {
                    q: region,
                    unit: "metric"
                },
                complete: function() {
                    $('body').removeClass('loading');
                },
                error: function(e) {
                    console.log(e);
                    //$('body').removeClass('loading');
                },
                success: function(data) {
                    
                    if (data.cod == 404) {
                        $('#error-msg').text("Not found city");
                        $('#error-msg').show();
                        return false;
                    }
                    

                    $('#weather-icon').removeClass();
                    $('.media-wrpper').show();
                    var weather_desp = data.weather[0].description.toLowerCase();

                    if (weather_desp.indexOf("rain") != -1) {
                        $('#weather-icon').addClass('rain');
                    }
                    else if (weather_desp.indexOf("cloud") != -1) {
                        $('#weather-icon').addClass('cloud');
                    }
                    else if (weather_desp.indexOf("clear") != -1) {
                        $('#weather-icon').addClass('clear');
                    }
                    else {
                        $('#weather-icon').addClass('unknown');
                    }

                    $('#weather-type').text(data.weather[0].main);
                    $('#weather-desp').text(data.weather[0].description);
                    var temp_min = Math.floor(data.main.temp_min);
                    var temp_max = Math.floor(data.main.temp_max);
                    $('#weathe-msg-temperature').text(temp_min + '~' + temp_max + '°C');
                    $('#weathe-msg-humidity').text(data.main.humidity + '%');

                }
            });
            return false;
        });
    };
    return {
        init: init
    };
})();