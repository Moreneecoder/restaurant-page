const loadMealsTo = (menuRow) => {
  const meals = [
    {
      type: 'African Dish',
      name: 'Amala with Efo Riro and Assorted Meat',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum',
      price: '2,500',
    },
    {
      type: 'Beverage',
      name: 'Inui Protein Shake',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum',
      price: '1,400',
    },
    {
      type: 'African Dish',
      name: 'Pounded Yam with Egusi and Assorted Meat',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum',
      price: '3,000',
    },
    {
      type: 'Beverage',
      name: 'Oreo Latte',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum',
      price: '2,000',
    },
  ];

  meals.forEach((meal) => {
    const mealCol = document.createElement('div');
    mealCol.classList.add('meal', 'col-12', 'col-md-6', 'mb-5');

    mealCol.innerHTML = `
            <span class="theme-bg text-white p-1 rounded">${meal.type}</span>
            <div class="mt-1 meal-col-flex">
                <div class="me-2">
                    <h5 class="mb-0">${meal.name}</h5>
                    <small class="text-muted">${meal.description}</small>
                </div>

                <h5 class="text-danger">&#8358; ${meal.price}</h5>
            </div>
        `;

    menuRow.appendChild(mealCol);
  });

  return menuRow;
};

const menuComponent = () => {
  const menuWrapper = document.createElement('div');
  menuWrapper.id = 'menu-wrapper';
  menuWrapper.classList.add('py-5', 'menu');

  const menuText = document.createElement('h3');
  menuText.classList.add('text-center', 'text-danger', 'fw-bolder');
  menuText.textContent = 'MENU';

  const menuCaption = document.createElement('h2');
  menuCaption.classList.add('fw-bolder', 'card', 'col-12', 'col-md-6', 'mx-auto', 'text-center', 'py-3');
  menuCaption.textContent = 'Choose Your Combo And \n Order Now';

  const menuCard = document.createElement('div');
  menuCard.id = 'menu-card';
  menuCard.classList.add('card', 'col-md-9', 'mx-auto', 'p-3');

  const menuRow = document.createElement('div');
  menuRow.id = 'menu-row';
  menuRow.classList.add('row');

  menuCard.appendChild(loadMealsTo(menuRow));

  menuWrapper.appendChild(menuText);
  menuWrapper.appendChild(menuCaption);
  menuWrapper.appendChild(menuCard);

  return menuWrapper;
};

export default menuComponent;