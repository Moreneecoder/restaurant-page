import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import navComponent from './components/nav';
import homeComponent from './components/home';
import menuComponent from './components/menu';
import contactComponent from './components/contact';
import footerComponent from './components/footer';
import * as domActions from './utils/domActions'

document.addEventListener('DOMContentLoaded', () => {
  document.body.prepend(navComponent());

  const mainContent = document.getElementById('content');
  mainContent.classList.add('container-fluid', 'pb-5', 'pt-5');
  mainContent.appendChild(homeComponent());

  document.body.appendChild(footerComponent());

  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'menu') {
      domActions.removeChildWithinParent(mainContent, 'home-wrapper');
      domActions.removeChildWithinParent(mainContent, 'contact-wrapper');
      domActions.addTabContent(mainContent, 'menu-wrapper', menuComponent());
    }

    if (e.target && e.target.id === 'home') {
      domActions.removeChildWithinParent(mainContent, 'menu-wrapper');
      domActions.removeChildWithinParent(mainContent, 'contact-wrapper');
      domActions.addTabContent(mainContent, 'home-wrapper', homeComponent());
    }

    if (e.target && e.target.id === 'contact') {
      domActions.removeChildWithinParent(mainContent, 'menu-wrapper');
      domActions.removeChildWithinParent(mainContent, 'home-wrapper');
      domActions.addTabContent(mainContent, 'contact-wrapper', contactComponent());
    }
  });
});