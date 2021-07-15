export default function menuComponent() {
  const menuWrapper = document.createElement('div');
  menuWrapper.id = 'menu-wrapper';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Menu Wrapper';
  menuWrapper.appendChild(paragraph);

  return menuWrapper;
}