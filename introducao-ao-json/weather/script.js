var cityName ="divinopolis";
const weatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=90a3b4e42787be1ea5d020e3589ee15e`)

weatherFetch.then((res, rej) => {
    res.text()
    .then((object) => {
        const toObject = JSON.parse(object);
        console.log(toObject);
    

        console.log(`Neste momento, Na cidade de ${toObject.name}, localizada na latitude ${toObject.coord.lat} e longitude ${toObject.coord.lon}, identificada pelo ID ${toObject.id}, está fazendo ${toObject.main.temp} graus Fº, com sensação térmica de ${toObject.main.feels_like} graus Fº, com ventos de ${toObject.wind.deg} graus, rajada de ${toObject.wind.gust} e velocidade de ${toObject.wind.speed}`)
    })
})