// window.addEventListener("load", () => {
//     let long;
//     let lat;
//     let temperatureDescription = document.querySelector(".temperature-description");
//     let temperatureDegree = document.querySelector(".temperature-degree");
//     let locationTimezone = document.querySelector(".location-timezone");
//     let degreeSection = document.querySelector(".degree-section");
//     let degreeSectionSpan = document.querySelector(".degree-section span");

//     // console.log("window: ", window);

//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             long = position.coords.longitude;
//             lat = position.coords.latitude;

//             const proxy = `https://cors-anywhere.herokuapp.com/`;
//             const api = `${proxy}https://api.darksky.net/forecast/653d34e99e9f1ea8985cf6cf98ed49f0/${lat},${long}`;

//             fetch(api)
//                 .then(response => {
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log(data);
//                     const {temperature, summary, icon} = data.currently;
//                     console.log(temperature);
                    
//                     //Set DOM Elements from the API
//                     temperatureDegree.textContent = Math.round(temperature);
//                     temperatureDescription.textContent = summary;
//                     locationTimezone.textContent = data.timezone;
//                     //set icon
//                     setIcon(icon, document.querySelector('.icon'));

//                     // Formula to Celcius
//                     temperatureCelcius = (temperature - 32) *5/9;

//                     // Change the temperature to Celcius/Farenheit
//                     degreeSection.addEventListener("click", () => {
//                         if(degreeSectionSpan.textContent === "F") {
//                             degreeSectionSpan.textContent = "C";
//                             temperatureDegree.textContent = Math.round(temperatureCelcius);
//                         }else {
//                             degreeSectionSpan.textContent = "F";
//                             temperatureDegree.textContent = Math.round(temperature);
//                         }
//                     })

//                 });
//         });
//     }

//     function setIcon(icon, iconID) {
//         const skycons = new Skycons({ color: "white" });
//         const currentIcon = icon.replace(/-/g, "_").toUpperCase();
//         skycons.play();
//         return skycons.set(iconID, Skycons[currentIcon]);
//     }
// });


let lat;
let long;
let temperatureDegree = document.querySelector(".temperature-degree");
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
                // const {summary, temperature, icon} = data.currently;
                

                //Set DOM Elements from the API
                temperatureDegree.textContent = data.currently.temperature;
                temperatureDescription.textContent = data.currently.summary;
                locationTime.textContent = data.timezone;

            })
    })
}