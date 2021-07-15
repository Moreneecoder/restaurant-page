export default function menuComponent() {
  const menuWrapper = document.createElement('div');
  menuWrapper.id = 'menu-wrapper';
  menuWrapper.classList.add('pt-5', 'menu')

  const menuText = document.createElement('h3');
  menuText.classList.add('text-center', 'text-danger')
  menuText.textContent = 'Menu';

  const menuCaption = document.createElement('h2')
  menuCaption.classList.add('text-center', 'fw-bolder', 'card', 'alert-info')
  menuCaption.textContent = 'Choose Your Combo And \n Order Now';

  menuWrapper.appendChild(menuText);
  menuWrapper.appendChild(menuCaption);

  return menuWrapper;
}