const searchInput = ()=>{
    const inputId = document.getElementById('inputId');
    const inputValue= inputId.value;
    inputId.value='';
if(inputValue== ''){

}
else{
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  

  fetch(url)
  .then(res => res.json())
  .then(data => displayInput(data.meals))
}

}

const displayInput = meals=>{
const container= document.getElementById('container');
// container.innerHTML='';
container.textContent='';
if(meals.length==0){

}
meals.forEach(meal => {
    console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col')
div.innerHTML= `

<div onclick="getClick(${meal.idMeal})" class="card">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
  </div>
</div>
`
container.appendChild(div)

})

}

const getClick =(mealId)=>{
  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayDetails(data.meals[0]))
}

const displayDetails= meal=>{
  console.log(meal)
  const getId=document.getElementById('details');
  getId.textContent='';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML=`
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `
getId.appendChild(div)

}


