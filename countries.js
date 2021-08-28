const loadCountries= () => {
    fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => dispalyCountries(data))
}
loadCountries()

const dispalyCountries =(countres) =>{
    // console.log(countres);
    const countresDiv= document.getElementById('countries')

   countres.forEach(country => {
      const div = document.createElement('div');
      div.classList.add('div')
      div.innerHTML= `
      <h3>${country.name}</h3>
      <p> ${country.capital}</p>
     <button onclick="loadCountryByName('${country.name}')"> Details </button>
      ` 

    //   const h3 = document.createElement('h3');
    //   h3.innerText=country.name;
    //   div.appendChild(h3); 
    //   const p = document.createElement('p');
    //   p.innerText=country.capital;
    //   div.appendChild(p); 

      countresDiv.appendChild(div);
   }) 
}


const loadCountryByName =(name) => {
    const url =`https://restcountries.eu/rest/v2/name/${name}`
fetch(url)
.then(res => res.json())
.then(data => countryDetail(data[0]))
} 

const countryDetail= (detail) =>{
    const coutryDiv= document.getElementById('country-detail');
    coutryDiv.innerHTML=`
    <h4>${detail.name}</h4>
    <img width="200px" src="${detail.flag}">
    `

}