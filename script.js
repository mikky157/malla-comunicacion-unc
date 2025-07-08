let data = null;
let colors = null;
let aprobadas = JSON.parse(localStorage.getItem('aprobadas')) || [];

// Cargar archivos JSON y luego inicializar
Promise.all([
  fetch('data_COM.json').then(r => r.json()),
  fetch('colors_COM.json').then(r => r.json())
]).then(([d, c]) => {
  data = d;
  colors = c;
  init();
});

function init() {
  if (!data || !colors) return;

  const cont = document.getElementById('malla');
  cont.innerHTML = '';

  let total_usm = 0;
  let total_sct = 0;

  for (const sem in data) {
    const sec = document.createElement('div');
    const titulo = document.createElement('h2');
    titulo.textContent = sem.toUpperCase();
    sec.appendChild(titulo);

    data[sem].forEach(ramo => {
      const [nombre, sigla, usm, sct, cat, pre] = ramo;
      const color = colors[cat]?.[0] || '#999';

      const div = document.createElement('div');
      div.style.background = color;
      div.style.padding = '10px';
      div.style.margin = '5px';
      div.style.borderRadius = '5px';
      div.style.color = '#fff';
      div.style.cursor = 'pointer';
      div.textContent = `${nombre} (${sigla})`;

      if (aprobadas.includes(sigla)) {
        div.style.textDecoration = 'line-through';
        div.style.opacity = '0.5';
      }

      div.addEventListener('click', () => {
        const aprobada = aprobadas.includes(sigla);

        if (aprobada) {
          aprobadas = aprobadas.filter(c => c !== sigla);
          div.style.textDecoration = 'none';
          div.style.opacity = '1';
        } else {
          aprobadas.push(sigla);
          div.style.textDecoration = 'line-through';
          div.style.opacity = '0.5';
        }

        localStorage.setItem('aprobadas', JSON.stringify(aprobadas));
      });

      sec.appendChild(div);
      total_usm += usm;
      total_sct += sct;
    });

    cont.appendChild(sec);
  }

  const resumen = document.createElement('div');
  resumen.innerHTML = `
    <p><strong>Créditos USM:</strong> ${total_usm} |
    <strong>SCT:</strong> ${total_sct}</p>
  `;
  cont.prepend(resumen);
}
