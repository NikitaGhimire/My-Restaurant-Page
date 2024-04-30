export function loadHomePage(){
  const content= document.getElementById('content');
  const homepageContent = document.createElement('div');
  homepageContent.innerHTML = 
  `
  <h1> Welcome to Nikita' Restaurant </h1>
  <p> Indulge in a culinary journey like no other at [Restaurant Name]. Our menu features an exquisite selection of dishes crafted with the finest ingredients, curated by our talented chefs. Experience the perfect blend of flavors, textures, and aromas that will tantalize your taste buds and leave you craving for more. Whether you're looking for a cozy dinner for two, a family celebration, or a special event, [Restaurant Name] offers a warm and inviting ambiance to complement your dining experience. Join us and savor the essence of exceptional dining.or reservations, please call [Phone Number] or book online.</p>
  `;

  content.appendChild(homepageContent);

}