const getQuote =()=> {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => getOutput(data))

}

const getOutput = values=> {
    console.log(values);
const container = document.getElementById('quote');
container.innerText =values.quote;

}