window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempDescription = document.querySelector(".temperature-description");
    let tempDegree      = document.querySelector(".temperature-degree");
    let loctimeZone = document.querySelector(".location-timezone");
    
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
         
            
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cc65430b435551566fca249e00acbc00`;
   
            fetch(api)
               .then(response => {
                return response.json();
            })
            .then(data => {
               console.log(data); 
                const {main:{temp}, sys:{country} } = data;
                
                tempDegree.textContent = temp;
                tempDescription.textContent = description;
                loctimeZone.textContent = country;
            });
        });
    }
});