var app = (function() {
    var serviceType = Constants.ServiceTypes;
     
    var viewAnalysis = "template/dataAnalysis.html";
    var viewTodayWeather = "template/todayWeather.html";
    var init = function() {
        $(".sidebar").on("click", "li", function() {
            var type = $(this).attr("data-service-type");
            switch (type) {
                case serviceType.analysis:
                     
                    $("#page-wrapper").load(viewAnalysis, function() {
                         
                    });
                    break;
                case serviceType.weather:
                    $("#page-wrapper").load(viewTodayWeather, function() {
                         
                    });
                    break;
                default:
                    break;
            }
        });
    };




    return {
        init: init
    };
})();