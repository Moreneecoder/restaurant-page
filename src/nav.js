export default function navComponent() {
  const navbarHtml = `<div class="container-fluid">
    <a class="navbar-brand" href="#">Chop'N'Go</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a id="home" class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a id="menu" class="nav-link" href="#">Menu</a>
        </li>
        <li class="nav-item">
          <a id="contact" class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    </div>`;

  const mainContent = document.createElement('div');
  mainContent.id = 'content';
  mainContent.classList.add('container-fluid', 'pb-5', 'pt-5');

  const navBar = document.createElement('nav');
  navBar.classList.add(...['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light', 'fixed-top']);

  navBar.innerHTML = navbarHtml;

  mainContent.appendChild(navBar);

  return mainContent;
}