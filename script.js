let data, colors;
let aprobadas = JSON.parse(localStorage.getItem('aprobadas')) || [];

fetch('data_COM.json').then(r=>r.json()).then(d=>{ data = d; init(); });
fetch('colors_COM.json').then(r=>r.json()).then(c=>{ colors = c; init(); });

function init(){
  if(!data || !colors) return;
  const cont = document.getElementById('malla');
  cont.innerHTML = '';
  let total_usm = 0, total_sct = 0;

  for(let sem in data){
    const sec = document.createElement('div');
    sec.innerHTML = <h2>${sem.toUpperCase()}</h2>;
    cont.appendChild(sec);

    data[sem].forEach(ramo => {
      const [nombre,sigla,usm,sct,cat,pre] = ramo;
      const color = colors[cat]?.[0] || '#999';
      // Aquí seguiría el resto del código...
    });
  }
}
      const el = document.createElement('div');
      el.textContent = ${sigla}: ${nombre};
      el.className = 'cuadro';
      el.style.borderColor = color;
      const desbloqueado = pre.every(p => aprobadas.includes(p));
      el.classList.add(desbloqueado ? 'desbloqueado' : 'bloqueado');

      if(desbloqueado){
        el.onclick = ()=>{
          if(aprobadas.includes(sigla)){
            aprobadas = aprobadas.filter(x=>x!==sigla);
          } else {
            aprobadas.push(sigla);
          }
          localStorage.setItem('aprobadas', JSON.stringify(aprobadas));
          init();
        };
        if(aprobadas.includes(sigla)) el.style.background = color;
      }

      sec.appendChild(el);
      if(aprobadas.includes(sigla)){
        total_usm += usm;
        total_sct += (sct || usm);
      }
    });
  }

  document.getElementById('cred_usm').textContent = total_usm;
  document.getElementById('cred_sct').textContent = total_sct;
}
