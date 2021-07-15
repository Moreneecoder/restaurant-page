import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import navComponent from './nav';
import homeComponent from './home';
import menuComponent from './menu';


document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(navComponent());

    const mainContent = document.getElementById('content');
    mainContent.appendChild(homeComponent())

    document.addEventListener('click', (e) => {

        if(e.target && e.target.id == 'menu'){
            const homeContent = document.getElementById('home-wrapper')
            mainContent.removeChild(homeContent)
            mainContent.appendChild(menuComponent());
       }

       if(e.target && e.target.id == 'home'){
        const menuContent = document.getElementById('menu-wrapper')
        console.log(menuContent);
        mainContent.removeChild(menuContent)
        mainContent.appendChild(homeComponent());
       }
    })

    // menu.addEventListener('click', () => {
    //     document.body.removeChild(content);
    //     document.body.appendChild(menuComponent());
    // })
} );