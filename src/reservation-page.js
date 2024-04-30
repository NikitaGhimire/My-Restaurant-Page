export function loadMenuPage(){
  const content = document.getElementById('content');
  const menuContent = document.createElement('div');
  menuContent.innerHTML = `
   <h1> Make your reservations here </h1>
  `;
  content.appendChild(menuContent);
}