'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy');
const status = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
 const selected = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.value);
 const idea = document.getElementById('idea').value.trim();
 const message = `Hoi Duoshots! Ik ben geïnteresseerd in ${selected.length ? selected.join(' en ') : 'content voor mijn merk'}.${idea ? '\n\nMijn idee: ' + idea : ''}\n\nKunnen we de mogelijkheden, planning en prijs bespreken?`;
 try {
  if (!navigator.clipboard) throw new Error('Clipboard unavailable');
  await navigator.clipboard.writeText(message);
  status.textContent = 'Gekopieerd! Open Instagram en plak je bericht in een DM.';
 } catch {
  status.textContent = 'Kopieer dit bericht en plak het in een DM op Instagram:\n\n' + message;
 }
});
