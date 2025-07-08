let aprobadas = JSON.parse(localStorage.getItem('aprobadas')) || [];

Promise.all([
  fetch('data_COM.json').then(r => r.json()),
  fetch('colors_COM.json').then(r => r.json())
]).then(([data, colors]) => {
  console.log('Data y colores cargados correctamente');
  console.log(data);
  console.log(colors);
});
