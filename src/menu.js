export default function menuComponent() {
  const menuWrapper = document.createElement('div');
  menuWrapper.id = 'menu-wrapper';
  menuWrapper.classList.add('py-5', 'menu');

  const menuText = document.createElement('h3');
  menuText.classList.add('text-center', 'text-danger');
  menuText.textContent = 'Menu';

  const menuCaption = document.createElement('h2');
  menuCaption.classList.add('fw-bolder', 'card', 'col-12', 'col-md-6', 'mx-auto', 'text-center', 'py-3');
  menuCaption.textContent = 'Choose Your Combo And \n Order Now';

  const menuCard = document.createElement('div');
  menuCard.id = 'menu-card';
  menuCard.classList.add('card', 'col-md-8', 'mx-auto', 'p-3');

  const menuRow = document.createElement('div');
  menuRow.id = 'menu-row';
  menuRow.classList.add('row');

  const meal = document.createElement('div');
  meal.classList.add('meal', 'col-12', 'col-md-6');

  meal.innerHTML = `
    <span class="theme-bg text-white p-1 rounded">Recommended</span>
    <div class="mt-1 d-flex">
        <div>
            <h5 class="mb-0">Smoked Brisket Sandwich</h5>
            <small class="text-muted">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</small>
        </div>

        <h5 class="text-danger">$39</h5>
    </div>
  `;

  const meal1 = document.createElement('div');
  meal1.classList.add('meal', 'col-12', 'col-md-6');

  meal1.innerHTML = `
    <span class="theme-bg text-white p-1 rounded">Recommended</span>
    <div class="mt-1 d-flex">
        <div>
            <h5 class="mb-0">Smoked Brisket Sandwich</h5>
            <small class="text-muted">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</small>
        </div>

        <h5 class="text-danger">$39</h5>
    </div>
  `;

  menuRow.appendChild(meal);
  menuRow.appendChild(meal1);

  menuCard.appendChild(menuRow);

  menuWrapper.appendChild(menuText);
  menuWrapper.appendChild(menuCaption);
  menuWrapper.appendChild(menuCard);

  return menuWrapper;
}