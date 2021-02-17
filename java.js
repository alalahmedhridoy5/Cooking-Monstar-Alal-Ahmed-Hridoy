 let searchMeals = async () => {
   try {
     const searchValue = document.getElementById("search-meals").value;
     let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`;
     const res = await fetch(url);
     const data = await res.json();
     displaySearchMeals(data.meals);
   } catch (error) {
     displayError('Food not found!! .Please try again');
   }
 }

 const displayError = (error) => {
   document.getElementById("display-error").innerText = error
 }

 const displaySearchMeals = meals => {
   const searchMealsDiv = document.getElementById("meals-list");
   searchMealsDiv.innerHTML = ''
   meals.forEach(meal => {
     const mealsInfo = document.createElement("div");
     mealsInfo.innerHTML = `<div class="card" style="width: 18rem;">
        <img onclick="getMealsDetails('https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.strMeal}') " src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h2>${meal.strMeal}</h2>
        </div>
      </div>`

     searchMealsDiv.appendChild(mealsInfo)
   });

 }

 const getMealsDetails = async url => {
   const res = await fetch(url)
   const data = await res.json()
   displayMealsDetails(data.meals)
 }

 const displayMealsDetails = meals => {
   const mealsInfoDiv = document.getElementById("meals-info");
   mealsInfoDiv.innerHTML = ''
   meals.forEach(meal => {
     const mealsInfo = document.createElement("div")
     mealsInfo.innerHTML = `
      <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h2>${meal.strMeal}</h2>
        </div>
     
      <div class="card-footer">
      <h3>Ingredient</h3>
      <ul>
      <li>
      ${meal.strIngredient1}
      </li>
      <li>
      ${meal.strIngredient2}
      </li>
      <li>
      ${meal.strIngredient3}
      </li>
      <li>
      ${meal.strIngredient4}
      </li>
      <li>
      ${meal.strIngredient5}
      </li>
      <li>
      ${meal.strIngredient6}
      </li>
      <li>
      ${meal.strIngredient7}
      </li>
      <li>
      ${meal.strIngredient8}
      </li>
      <li>
      ${meal.strIngredient9}
      </li>
      <li>
      ${meal.strIngredient10}
      </li>
      </ul>
      </div>
      </div>
      `
     mealsInfoDiv.appendChild(mealsInfo)
   });
   document.getElementById("meals-list").style.display = 'none'
   document.getElementById("search-meal").style.display = 'none'
 }

 searchMeals = async () => {
   try {
     const searchValue = document.getElementById("search-meals").value;
     let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
     const res = await fetch(url);
     const data = await res.json();
     displaySearchMeals(data.meals);
   } catch (error) {
     displayError('Food not found!! .Please try again');
   }
 }