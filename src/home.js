import bannerImage from './tea-party.png'

const navbarHtml = `<div class="container-fluid">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Menu</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
  </ul>
</div>
</div>`;

export default function homeComponent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('contents');

  const navBar = document.createElement('nav');
  navBar.classList.add(...['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light']);

  navBar.innerHTML = navbarHtml;

  mainContent.appendChild(navBar);

  const mainTag = document.createElement('main')
  mainTag.classList.add('container');
  mainContent.appendChild(mainTag)

  const banner = document.createElement('div')
  banner.classList.add('row', 'banner')
  
  const restaurantNameBar = document.createElement('div')
  restaurantNameBar.classList.add(...['col-12', 'offset-md-1', 'col-md-4', 'text-center'])
  
  const restaurantName = document.createElement('h1')
  restaurantName.textContent = "CHOP 'N' GO"
  restaurantName.classList.add('fw-bolder', 'pt-5', 'restaurant-name')

  const restaurantNote = document.createElement('p')
  restaurantNote.textContent = 'We have amazing meals that create everlasting memories'

  const restaurantMenuBtn = document.createElement('button')
  restaurantMenuBtn.classList.add('btn', 'btn-large', 'me-2', 'btn-dark')
  restaurantMenuBtn.textContent = 'Check Menu'

  const imageBar = document.createElement('div')
  imageBar.classList.add(...['offset-3', 'col-6', 'offset-md-1', 'col-md-5'])

  const bannerImg = new Image();
  bannerImg.src = bannerImage;
  bannerImg.classList.add('img-fluid')
  imageBar.appendChild(bannerImg)

  const restaurantHypeBar = document.createElement('div')
  restaurantHypeBar.classList.add('text-center', 'row', 'pt-3')
  
  const hypeTextBar = document.createElement('div')
  hypeTextBar.classList.add( 'offset-2', 'col-8', 'text-muted')

  const hypeText = document.createElement('p')
  hypeText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione soluta veritatis, 
  maxime provident numquam recusandae neque rerum quae tempora. Laudantium veniam soluta temporibus, similique 
  quibusdam harum labore sunt expedita autem provident, eaque a ut animi, magni aliquid architecto quae ea? Laboriosam
   voluptas quam est eaque nulla repellat aliquid sit.`

   hypeTextBar.appendChild(hypeText)
   restaurantHypeBar.appendChild(hypeTextBar)


  restaurantNameBar.appendChild(restaurantName)
  restaurantNameBar.appendChild(restaurantNote)
  restaurantNameBar.appendChild(restaurantMenuBtn)
  banner.appendChild(restaurantNameBar)
  banner.appendChild(imageBar)

  mainContent.appendChild(banner)
  mainContent.appendChild(restaurantHypeBar)

  return mainContent;
}