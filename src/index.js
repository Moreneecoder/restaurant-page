import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import navComponent from './nav';
import homeComponent from './home';
import menuComponent from './menu';
import contactComponent from './contact';
import footerComponent from './footer';

const removeChildWithinParent = (parent, child) => {
  const childNode = document.getElementById(child);
  if (parent.contains(childNode)) {
    parent.removeChild(childNode);
  }
};

const addTabContent = (parent, child, component) => {
  const childNode = document.getElementById(child);
  if (!parent.contains(childNode)) {
    parent.appendChild(component);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(navComponent());

  const mainContent = document.getElementById('content');
  mainContent.appendChild(homeComponent());

  document.body.appendChild(footerComponent());

  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'menu') {
      removeChildWithinParent(mainContent, 'home-wrapper');
      removeChildWithinParent(mainContent, 'contact-wrapper');
      addTabContent(mainContent, 'menu-wrapper', menuComponent());
    }

    if (e.target && e.target.id === 'home') {
      removeChildWithinParent(mainContent, 'menu-wrapper');
      removeChildWithinParent(mainContent, 'contact-wrapper');
      addTabContent(mainContent, 'home-wrapper', homeComponent());
    }

    if (e.target && e.target.id === 'contact') {
      removeChildWithinParent(mainContent, 'menu-wrapper');
      removeChildWithinParent(mainContent, 'home-wrapper');
      addTabContent(mainContent, 'contact-wrapper', contactComponent());
    }
  });
});