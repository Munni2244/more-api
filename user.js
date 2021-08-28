const getUserName =() =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then( data => getInput(data.results))
}

getUserName()
const getInput =(values)=> {
    // console.log(values);
   
    const container = document.getElementById('container');
    for( const value of values){
        console.log(value.name)
        const p =document.createElement('p');
        p.innerText = ` name:
        ${value.name.first} ${value.name.last} 
        ${value.email} 
        `
        
        container.appendChild(p)
    
    }
  
}