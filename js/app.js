axios.get('https://covid-ca.azurewebsites.net/api/covid/overview', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then((response) => {
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
        'Accept': 'application/json'
    }
})
    .then((response) => {
        let data = JSON.parse(response.data);
        var northMacedonia = data.filter(function (item) {
            return item.country == "North Macedonia"
        })
       
        for (var i in data) {
            let worldTable = document.getElementById("worldTable");
            let tableBody = document.getElementById("tableBody");
            let newRow = document.createElement("tr");
            let country = document.createElement("td");
            country.innerHTML = data[i].country;
            let cases = document.createElement("td");
            cases.innerHTML = data[i].cases;
            let deaths = document.createElement("td");
            deaths.innerHTML = data[i].deaths;
            let todayCases = document.createElement("td");
            todayCases.innerHTML = data[i].todayCases;
            let recovered = document.createElement("td");
            recovered.innerHTML = data[i].recovered;
            let active = document.createElement("td");
            active.innerHTML = data[i].active;
            let todayDeaths = document.createElement("td");
            todayDeaths.innerHTML = data[i].todayDeaths;
            let critical = document.createElement("td");
            critical.innerHTML = data[i].critical;

            worldTable.appendChild(tableBody);
            tableBody.appendChild(newRow);
            newRow.appendChild(country);
            newRow.appendChild(cases);
            newRow.appendChild(todayCases);
            newRow.appendChild(deaths);
            newRow.appendChild(todayDeaths);
            newRow.appendChild(recovered);
            newRow.appendChild(active);
            newRow.appendChild(critical);
        }



        var macedoniaCasesDiv = document.getElementById("macedoniaCases");
        let macedoniaCases = northMacedonia.map(a => a.cases);
        macedoniaCasesDiv.innerText = macedoniaCases;

        var macedoniaRecoveredDiv = document.getElementById("macedoniaRecovered");
        let macedoniaRecovered = northMacedonia.map(a => a.recovered);
        macedoniaRecoveredDiv.innerText = macedoniaRecovered;

        var macedoniaDeathsDiv = document.getElementById("macedoniaDeaths");
        let macedoniaDeaths = northMacedonia.map(a => a.deaths);
        macedoniaDeathsDiv.innerText = macedoniaDeaths;

        var macTodayCasesDiv = document.getElementById("macTodayCases");
        let macTodayCases = northMacedonia.map(a => a.todayCases);
        macTodayCasesDiv.innerText = macTodayCases;

        var macActiveDiv = document.getElementById("macActive");
        let macActive = northMacedonia.map(a => a.active);
        macActiveDiv.innerText = macActive;

        var macCriticalDiv = document.getElementById("macCritical");
        let macCritical = northMacedonia.map(a => a.critical);
        macCriticalDiv.innerText = macCritical;


    }).catch(error => {
        console.log(error);
    });

function filterTable() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("worldTable");
    tr = table.getElementsByTagName("tr");


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

