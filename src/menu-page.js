export function loadMenuPage(){
  const content = document.getElementById('content');
  const menuContent = document.createElement('div');
  menuContent.innerHTML = `
   <h2>Our Menu</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `;
  content.appendChild(menuContent);
}