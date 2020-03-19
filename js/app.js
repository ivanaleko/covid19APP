axios.get('https://covid-ca.azurewebsites.net/api/covid/overview', {
    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
    }
})
.then((response)=> {
    let data = JSON.parse(response.data);
    console.log(data);
    
    var worldCases = document.getElementById("worldCases");
    worldCases.innerHTML = data.cases;

    var worldDeaths = document.getElementById("worldDeaths");
    worldDeaths.innerHTML = data.deaths;

    var worldRecovered = document.getElementById("worldRecovered");
    worldRecovered.innerHTML = data.recovered;
}).catch(error => {
    console.log(error);
});

axios.get('https://covid-ca.azurewebsites.net/api/covid/countries', {
    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
    }
})
.then((response)=> {
    let data = JSON.parse(response.data);
    console.log(data);
    var northMacedonia = data.filter(function (item){
        return item.country == "North Macedonia"
    })
    console.log(northMacedonia);
    
    for (var i in data) 
    {
        let tableBody = document.getElementById("tableBody");
            let newRow = document.createElement("tr");
            let newCountry = document.createElement("td");
            newCountry.innerHTML = data[i].country;
            let newCases = document.createElement("td");
            newCases.innerHTML = data[i].cases;
            let deaths = document.createElement("td");
            deaths.innerHTML = data[i].deaths;
            
            tableBody.appendChild(newRow);
            newRow.appendChild(newCountry);
            newRow.appendChild(newCases);
            newRow.appendChild(deaths);
        }
   
   
    
    var macedoniaCases = document.getElementById("macedoniaCases");
    let zaboleni = northMacedonia.map(a => a.cases);
    macedoniaCases.innerText = zaboleni;

    var macedoniaRecovered = document.getElementById("macedoniaRecovered");
    let izleceni = northMacedonia.map(a => a.recovered);
    macedoniaRecovered.innerText = izleceni;

    // var cifraNovi = document.getElementById("cifraNovi");
    // let novi = northMacedonia.map(a => a.todayCases);
    // cifraNovi.innerText = novi;

    var macedoniaDeaths = document.getElementById("macedoniaDeaths");
    let pocinati = northMacedonia.map(a => a.deaths);
    macedoniaDeaths.innerText = pocinati;

    // var izleceniProcent = document.getElementById("izleceniProcent");
    // izleceniProcent.innerText = ((izleceni/zaboleni) * 100).toFixed(2) + '%';

    // var izleceniProcent = document.getElementById("izleceniProcent");
    // smrtnostProcent.innerText = ((pocinati/izleceni) * 100).toFixed(2) + '%';

   }).catch(error => {
    console.log(error);
});

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }