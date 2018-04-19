// API Key: ffbaed99f10375462add667213061774
// String: http://api.openweathermap.org/data/2.5/weather?zip=&AAPID=ffbaed99f10375462add667213061774

var url = "http://api.openweathermap.org/data/2.5/weather?appid=ffbaed99f10375462add667213061774&units=imperial&zip=";

$("#getWeatherBtn").click(function(){
	if( $("#zipInput").val().length == 5 ){
		$.getJSON(url + $("#zipInput").val(), function(result){
			$('#cityName').html(result.name);
			$('#conditions').html(result.weather[0].description);
			if(result.main.temp < 65 ){
				$('#temp').html(result.main.temp + "˚");
				$('#temp').css('color', 'blue');
			} else {
				$('#temp').html(result.main.temp + "˚");
				$('#temp').css('color', 'red');
			}
			var d = new Date();
			$('#time').html( d.toDateString() + "<br />" + d.toLocaleTimeString() );
			$('#weatherIcon').attr("src","http://openweathermap.org/img/w/" + result.weather[0].icon + ".png");

});

	} else {
		alert("PLEASE ENTER THE CORRECT NUMBER OF CHARACTERS!");
	}
	
});

buildApiRequest('GET',
                '/youtube/v3/videoCategories',
                {'part': 'snippet',
                 'regionCode': 'US'});

GET https://www.googleapis.com/youtube/v3/videoCategories