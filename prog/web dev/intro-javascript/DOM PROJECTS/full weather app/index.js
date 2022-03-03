window.addEventListener ('load', () => {
    let longitude; //longitude
    let latitude;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimeZone = document.querySelector(".location-timezone");
    let bled = document.createElement("p");
    let location = document.querySelector(".location");
    let hourlyTemp = document.querySelector(".temp-hourly");
    let icon_selector = document.querySelector(".icon")
    var newImg = new Image;

     

  



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            
            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=2b75d4644ff44f899d597de631ba0484`, {
	"method": "GET",
	
})
.then(response => {
	return response.json();
})
.then(data => {
    //console.log(data);
    const { city } = data.results[0].components;
    bled.textContent = city;
    location.appendChild(bled);
});



            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&lang=fr&units=metric&appid=36b307eeb841431bcb5334dab0fd8333`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    //console.log(data);
                    const {temp} = data.current;
                    const {description, icon, id} = data.current.weather[0];
                    //set DOM elements from API response
                    const urlIcon = `http://openweathermap.org/img/wn/${icon}.png`;
                    newImg.src = urlIcon;
                    newImg.style.width = "200px";
                    icon_selector.appendChild(newImg);

                    console.log(urlIcon);

                    temperatureDegree.textContent = temp;
                    locationTimeZone.textContent = data.timezone;
                    temperatureDescription.textContent = description;




                    //set hourly forecast
                      
                    for(let i = 0; i < 8; i++){
                        const { description } = data.hourly[i].weather[0];
                        let hourlyP = document.createElement("p");
                        const { temp } = data.hourly[i];
                        hourlyP.textContent = `${temp} ${description} dans ${i} heure`;
                        hourlyTemp.appendChild(hourlyP);
                    }
                });
        });
        

    } else {
        h1.textContent = "Not Working cuz "
    }
    

});