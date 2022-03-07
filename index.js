document.getElementById("layer2").onclick = (e) => {
  if( e.target.id === "layer2") {
     return
  }   
  console.log(e.target.id)
  getCountry(e.target.id)
  paintCountry(e.target.id)
 }

 function getCountry(id) {
  fetch("https://countries.plaul.dk/api/countries/" + id)
  .then(res => {
    if (!res.ok) {
      return Promise.reject("Error :" + res.status) //error handling
    }
    return res.json() //get it as json
  })
  .then(data => { //now we have the data as json and we can start to use it
    document.getElementById("flag").src = data.flag
    document.getElementById("name").innerText = data.name.common
    document.getElementById("un-member").innerText = data.unMember
    //document.getElementById("currencies").innerText = data.currencies
    document.getElementById("capital").innerText = data.capital[0]
    document.getElementById("borders").innerText = data.borders

    console.log(data)
  })
  .catch(err => {
    console.error("UPPPPPS: " + err)
  }) //catch errors
  .finally(e => console.log("Finally Done"))
}

function paintCountry(id) {
  const allCountries = document.querySelectorAll("path") //get all countries
  allCountries.forEach(country => country.style.fill = "#dcdcdc") //and color them normal color
  
  if(id === "ru") {
    document.getElementById(id).style.fill = "red" //then set the selected country as blue
  } else {
    document.getElementById(id).style.fill = "blue" //then set the selected country as blue
  }
}