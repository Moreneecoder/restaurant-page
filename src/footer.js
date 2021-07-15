export default function footerComponent() {
    const footerHtml = `<div class="container-fluid">
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
  
    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.classList.add('container-fluid', 'theme-bg', 'text-white', 'py-3', 'fixed-bottom');
    
    const authorLink = document.createElement('a')
    authorLink.classList.add('text-decoration-none', 'text-white', 'fw-bolder')
    authorLink.href = 'https://github.com/Moreneecoder'
    authorLink.textContent = "Made with love by Mo' Bello"

    footer.appendChild(authorLink)
  
    return footer;
  }