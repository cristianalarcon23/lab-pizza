// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

  // Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  })
}

  // Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGp) => {
    if (state.greenPeppers) {
      oneGp.style.visibility = 'visible';
    } else {
      oneGp.style.visibility ='hidden';
    }
  })
}

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() { 
  document.querySelectorAll('.sauce').forEach((oneWs) => {
    if (state.whiteSauce) {
      oneWs.classList.add('sauce-white');
    } else {
      oneWs.classList.remove('sauce-white')
    }
  })
}

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add('crust-gluten-free');
    } else {
      oneCrust.classList.remove('crust-gluten-free')
    }
  })
}

    // Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  document.querySelectorAll('.btn').forEach((oneButton) => {
    if (oneButton.classList.contains('active')) {
      oneButton.classList.remove('active');
    } else {
      oneButton.classList.add('active');
    }
  })

}

  // Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  let totalPrice = basePrice
  let ingredientsList = document.querySelector('aside.panel.price ul')
  ingredientsList.innerHTML = ""

  for (let ingredientKey in ingredients) {
    if (state[ingredientKey]) {
      totalPrice += ingredients[ingredientKey].price
      ingredientsList.innerHTML += `<li>$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name.toLowerCase()}</li>`
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = "$" + totalPrice
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
