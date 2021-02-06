fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
    
    const displayCountries = countries =>{
        const countriesDiv = document.getElementById("countries")
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];    

            // const h3 = document.createElement('h3');
            // h3.innerText = country.name;
            // countriesDiv.appendChild(h3);
           
            // const p = document.createElement('p');
            // p.innerText = country.capital;
            // countriesDiv.appendChild(p);
            
            const countryDiv = document.createElement('div');
            countryDiv.className = 'country';
            const countryInfo = `
            <h3 class = 'country-name'>${country.name}</h3>
            <p class = 'capital-name'>${country.capital}</p>
            `
            countryDiv.innerHTML = countryInfo;
            countriesDiv.appendChild(countryDiv);    

        }
    }