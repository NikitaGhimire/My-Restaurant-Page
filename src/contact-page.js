export function loadContactPage(){
  const content = document.getElementById('content');
  const contactContent = document.createElement('div');
  contactContent.innerHTML = `
  <h2>Contact Us</h2>
  <p>Get in touch with us!</p>
  `;
  content.appendChild(contactContent);
}