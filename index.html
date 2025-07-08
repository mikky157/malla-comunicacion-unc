let data, colors;
let aprobadas = JSON.parse(localStorage.getItem('aprobadas')) || [];

fetch('data_COM.json').then(r => r.json()).then(d => {
  data = d;
  init();
});
fetch('colors_COM.json').then(r => r.json()).then(c => {
  colors = c;
  init();
});

function init() {
  if (!data || !colors) return;
  const cont = document.getElementById('malla');
  cont.innerHTML = '';
  let total_usm = 0, total_sct = 0;

  for (let sem in data) {
    const sec = document.createElement('div');
    sec.innerHTML = <h2>${sem.toUpperCase()}</h2>;
    cont.appendChild(sec);

    data[sem].forEach(ramo => {
      const [nombre, sigla, usm, sct, cat, pre] = ramo;
      const color = colors[cat]?.[0] || '#999';

      const div = document.createElement('div');
      div.style.background = color;
      div.style.padding = '10px';
      div.style.margin = '5px';
      div.style.borderRadius = '5px';
      div.style.color = '#fff';
      div.textContent = ${nombre} (${sigla});

      cont.appendChild(div);

      total_usm += usm;
      total_sct += sct;
    });
  }

  const resumen = document.createElement('div');
  resumen.innerHTML = <p><strong>Créditos USM:</strong> ${total_usm} | <strong>SCT:</strong> ${total_sct}</p>;
  cont.prepend(resumen);
}
