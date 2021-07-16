import bannerImage from '../images/tea-party.png';
import hypeImage from '../images/burger-stand.png';

const homeComponent = () => {
  const homeWrapper = document.createElement('div');
  homeWrapper.id = 'home-wrapper';

  const banner = document.createElement('div');
  banner.classList.add('row', 'banner');

  const restaurantNameBar = document.createElement('div');
  restaurantNameBar.classList.add(...['col-12', 'offset-md-1', 'col-md-4', 'text-center']);

  const restaurantName = document.createElement('h1');
  restaurantName.textContent = "CHOP 'N' GO";
  restaurantName.classList.add('fw-bolder', 'pt-5', 'restaurant-name');

  const restaurantNote = document.createElement('p');
  restaurantNote.textContent = 'We have amazing meals that create everlasting memories';

  const restaurantMenuBtn = document.createElement('button');
  restaurantMenuBtn.classList.add('btn', 'btn-large', 'me-2', 'btn-dark');
  restaurantMenuBtn.textContent = 'Check Menu';

  const imageBar = document.createElement('div');
  imageBar.classList.add(...['offset-3', 'col-6', 'offset-md-1', 'col-md-5']);

  const bannerImg = new Image();
  bannerImg.src = bannerImage;
  bannerImg.classList.add('img-fluid');
  imageBar.appendChild(bannerImg);

  const restaurantHypeBar = document.createElement('div');
  restaurantHypeBar.classList.add('text-center', 'row', 'pt-3');

  const hypeTextHeadline = document.createElement('h3')
  hypeTextHeadline.classList.add('text-decoration-underline', 'fw-bolder')
  hypeTextHeadline.textContent = 'We Know Stuff'

  const hypeImageBar = document.createElement('div')
  hypeImageBar.classList.add('offset-md-1', 'col-md-2')

  const hypeImg = new Image()
  hypeImg.classList.add('img-fluid')
  hypeImg.src = hypeImage

  hypeImageBar.appendChild(hypeImg)

  const hypeTextBar = document.createElement('div');
  hypeTextBar.classList.add('col-12', 'col-md-7', 'fw-bolder');

  const hypeText = document.createElement('p');
  hypeText.classList.add('text-muted')
  hypeText.innerHTML = `At <span class="theme-text">Chop 'N' Go</span>, we are beyond just a restaurant! 
  We are about <span class="theme-text">food art</span>. With over <span class="theme-text">120 chefs</span> 
  from across Africa, we <span class="theme-text">continously experiment</span> with and create <span 
  class="theme-text">new recipes</span> that create <span class="theme-text">tasteful experiences</span> 
  for our customers. So whether you're a <span class="theme-text">seasoned foodie</span> looking for 
  <span class="theme-text">new adventures</span> or a regular who just want to <span class="theme-text">satisfy
  their hunger</span>, we are the haven that provides <span class="theme-text">exactly what you need</span>.`;


  hypeTextBar.appendChild(hypeText);

  restaurantHypeBar.appendChild(hypeTextHeadline);
  restaurantHypeBar.appendChild(hypeImageBar);
  restaurantHypeBar.appendChild(hypeTextBar);

  restaurantNameBar.appendChild(restaurantName);
  restaurantNameBar.appendChild(restaurantNote);
  restaurantNameBar.appendChild(restaurantMenuBtn);
  banner.appendChild(restaurantNameBar);
  banner.appendChild(imageBar);

  homeWrapper.appendChild(banner);
  homeWrapper.appendChild(restaurantHypeBar);

  return homeWrapper;
};

export default homeComponent;