axios.get('https://covid-ca.azurewebsites.net/api/covid/overview', {
    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
    }
})
.then((response)=> {
    let data = JSON.parse(response.data);
    console.log(data);
    // var output = '';
    // for (var property in data)
    //  {
    // output += property + ': ' + data[property]+'; ';
    // }
    // document.write(output);
    // var casesKey = Object.keys(data)[0];
    // var casesValue = data[Object.keys(data)[0]]
    // document.write(data.cases);
    // document.write(casesValue);
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

    var cifraZaboleni = document.getElementById("cifraZaboleni");
    let zaboleni = northMacedonia.map(a => a.cases);
    cifraZaboleni.innerText = zaboleni;

    var cifraIzleceni = document.getElementById("cifraIzleceni");
    let izleceni = northMacedonia.map(a => a.recovered);
    cifraIzleceni.innerText = izleceni;

    var cifraNovi = document.getElementById("cifraNovi");
    let novi = northMacedonia.map(a => a.todayCases);
    cifraNovi.innerText = novi;

    var cifraPocinati = document.getElementById("cifraPocinati");
    let pocinati = northMacedonia.map(a => a.deaths);
    cifraPocinati.innerText = pocinati;

    var izleceniProcent = document.getElementById("izleceniProcent");
    izleceniProcent.innerText = ((izleceni/zaboleni) * 100).toFixed(2) + '%';

    var izleceniProcent = document.getElementById("izleceniProcent");
    smrtnostProcent.innerText = ((pocinati/izleceni) * 100).toFixed(2) + '%';

   }).catch(error => {
    console.log(error);
});