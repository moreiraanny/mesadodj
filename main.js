function tocaSom (idElementoAudio) {
    document.querySelector (idElementoAudio). play();
}

const listaDetTeclas = documnet.querySelectorA11(`tecla`);

//para 
for (let contador = 0;  contador < listaDetTeclas.lenght; conatdor++)  {
     const tecla = listaDetTeclas[ contador];
     const instrumento - tecla.classList[1];
    const idAudio = ´#som_${instrumento} //template string 


    tecla.onclick = function () { 
        tocaSom(idAudio);
    }
    
}