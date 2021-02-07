const searchBtn = document.getElementById('search-btn');

const mealList = document.getElementById('meal');

searchBtn.addEventListener('click', getMealList);

// get meal list that matches with the ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            data.meals.forEach(meal => {
                html += `
                    <div  data-id = "${meal.idMeal}">
                        <div>
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div >
                            <h3>${meal.strMeal}</h3>
                            <button onclick="mealListDetails'()">MealDetails</button>
                        </div>
                    </div>
                `;
            });
            mealList.innerHTML = html;
        });
}



const mealListDetails = meals => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealIngredient(data));
}

const mealIngredient = meals => {

    const mealListDetails = document.getElementById('meal-details');
    mealListDetails.innerHTML = `
    <p>${meals.strIngredient1}</p>
    <p>${meals.strIngredient2}</p>
    <p>${meals.strIngredient3}</p>
    <p>${meals.strIngredient4}</p>
   
   
    `
}

