const loadMeal = (searchText)=> {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
 fetch (url)
 .then (res=> res.json())
 .then (data =>displayMeals(data.meals));
}

displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = '';
    meals.forEach(meal=>{
        console.log(meal);
       const mealDiv = document.createElement('div');
       mealDiv.classList.add('col');
       mealDiv.innerHTML=`
                <div class="card">
                    <img src="${meal.strMealThumb
                    }" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
       `
       mealsContainer.appendChild(mealDiv);

    })
}

const searchMeals =()=>{
    const searchText = document.getElementById('search-field').value;
    console.log(searchText)
    loadMeal(searchText)
}

loadMeal('rice');