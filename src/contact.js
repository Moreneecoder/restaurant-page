export default function contactComponent() {
  const contactWrapper = document.createElement('div');
  contactWrapper.id = 'contact-wrapper';
  contactWrapper.classList.add('py-5');

  const contactCard = document.createElement('div');
  contactCard.classList.add('card', 'col-md-6', 'mx-auto', 'text-center', 'py-3');

  const headline = document.createElement('h3');
  headline.classList.add('fw-bolder');
  headline.textContent = 'Contact Us';

  const telephone = document.createElement('h5');
  telephone.textContent = 'Tel: 08123456789';

  const email = document.createElement('h5');
  email.textContent = 'Email: chopngo@example.com';

  contactCard.appendChild(headline);
  contactCard.appendChild(telephone);
  contactCard.appendChild(email);
  contactWrapper.appendChild(contactCard);

  return contactWrapper;
}