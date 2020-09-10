//Buenos aires aparece por default
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es',
    method: 'GET',
    success: function(data){
     $("#uno").append(data.main.temp + " °C")
     $("#dos").append(data.main.temp_max  + " °C")
     $("#tres").append(data.main.temp_min  + " °C")
     $("#cuatro").append(data.weather[0].description + ".")
     $("#cinco").append(data.wind.speed + " km/h")
    }
  })
//Ciudad 1- 
$("#ushuaia").click(function() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=ushuaia&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",
        method:"GET", 
        success: function(data){
        $("#uno").text(data.main.temp + " °C")
        $("#dos").text(data.main.temp_max  + " °C")
        $("#tres").text(data.main.temp_min  + " °C")
        $("#cuatro").text(data.weather[0].description  + ".")
        $("#cinco").text(data.wind.speed + " km/h")
        $("h2").text("Ushuaia- Tierra del Fuego")
        }
    }) 
});

//Ciudad 2-
$("#cachi").click(function() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=cachi&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",
        method:"GET", 
        success: function(data){
        $("#uno").text(data.main.temp + " °C")
        $("#dos").text(data.main.temp_max  + " °C")
        $("#tres").text(data.main.temp_min  + " °C")
        $("#cuatro").text(data.weather[0].description  + ".")
        $("#cinco").text(data.wind.speed + " km/h")
        $("h2").text("Cachi-Salta")
        }
    }) 
});

//Ciudad 3-
$("#paris").click(function() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=paris&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",
        method:"GET", 
        success: function(data){
        $("#uno").text(data.main.temp + " °C")
        $("#dos").text(data.main.temp_max  + " °C")
        $("#tres").text(data.main.temp_min  + " °C")
        $("#cuatro").text(data.weather[0].description  + ".")
        $("#cinco").text(data.wind.speed + " km/h")
        $("h2").text("París-Francia")
        }
    }) 
});
  
//Buscador para todas las ciudades
$("#busca").click(function(lugares){

    var lugares= $("input").val()
    var URIlugares = encodeURI(lugares)
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q="+URIlugares+"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",
        method: "GET",
        success: function(data){
            $("#uno").text(data.main.temp + " °C")
            $("#dos").text(data.main.temp_max  + " °C")
            $("#tres").text(data.main.temp_min  + " °C")
            $("#cuatro").text(data.weather[0].description  + ".")
            $("#cinco").text(data.wind.speed + " km/h")
            $("h2").text(lugares)
        }
    })


})