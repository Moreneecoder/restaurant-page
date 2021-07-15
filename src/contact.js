export default function contactComponent() {
    const contactWrapper = document.createElement('div');
    contactWrapper.id = 'contact-wrapper';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Contact Wrapper';
    contactWrapper.appendChild(paragraph);
  
    return contactWrapper;
  }