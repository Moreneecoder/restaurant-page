import { loadMealsTo } from '../utils/domActions';

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