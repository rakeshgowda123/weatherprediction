const btn = document.querySelector("#btn")
const  place = document.querySelector(".city")
const  climate = document.querySelector(".climate")
const temp = document.querySelector(".temp")
const speed = document.querySelector(".speed")
const pre = document.querySelector(".pre")
const hum = document.querySelector(".hum")

//  console.log(api_key)
//  console.log(url)
 function weather(){
    
    const search = document.querySelector("#search").value
    const api_key = '55c3f0a5cb0e4d70bb280fd3a96f5e0c'
    const url = `https://api.weatherbit.io/v2.0/current?city=${search}&key=${api_key}`;
    document.querySelector(".main-1").style.visibility = "visible";
 fetch(url)
 .then(Response=>Response.json())
 .then(data=>{
   
    console.log(data)
    const  place = data.data[0].city_name
    console.log(place)
    const city = data.data[0].weather.description
    console.log(city)
    const tempreture = data.data[0].temp
    console.log(tempreture)
    const speed = data.data[0].wind_spd
    console.log(speed)
    const prep = data.data[0].pres
    console.log(prep)
    const rade = data.data[0].solar_rad
    console.log(rade)
    document.querySelector(".city").innerHTML=place
    document.querySelector(".speed").innerHTML=speed +"km/hr"
    document.querySelector(".temp").innerHTML=tempreture +"`c"
    document.querySelector(".climate").innerHTML=city
    document.querySelector(".pre").innerHTML=prep
    document.querySelector(".hum").innerHTML=rade
    // document.querySelector("#btn")
    // document.querySelector("#search").value
    }
)
}
