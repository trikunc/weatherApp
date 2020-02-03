let lat;
let long;
let temperatureDegree = document.querySelector(".temperature-degree");
let temperatureDegreeCelcius = document.querySelector(".temperature-degree-celcius");
let temperatureDescription = document.querySelector(".temperature-description")
let locationTime = document.querySelector(".location-timezone")


if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        const proxy = `https://cors-anywhere.herokuapp.com/`
        const api = `${proxy}https://api.darksky.net/forecast/653d34e99e9f1ea8985cf6cf98ed49f0/${lat},${long}`
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                temperatureDegree.textContent = Math.round(data.currently.temperature);
                temperatureDescription.textContent = data.currently.summary;
                locationTime.textContent = data.timezone;
                
                const icon = data.currently.icon;
                const iconID = document.querySelector('.icon')
                setIcon(icon, iconID);
                
                const celciusTemp = (data.currently.temperature - 32)*5/9;
                temperatureDegreeCelcius.textContent = Math.round(celciusTemp);
            })
    })
    function setIcon(icon, iconID) {
        const skycons = new Skycons({"color": "white"});
        const currentIcon = icon.toUpperCase().replace(/-/g, "_");
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
}