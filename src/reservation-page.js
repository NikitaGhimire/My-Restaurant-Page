export function loadReservationPage(){
  const content = document.getElementById('content');
  const reservationContent = document.createElement('div');
  reservationContent.innerHTML = `
   <h1> Make your reservations here </h1>
  `;
  content.appendChild(reservationContent);
}