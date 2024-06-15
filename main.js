function vermais(id){
    let pontos = document.getElementById('pontos_'+ id)
    let maisTexto = document.getElementById('mais_' + id )
    let btnVermais = document.getElementById('btnVermais_'+ id)


    if(pontos .style.display === 'none'){
        pontos.style.display='inline';
        maisTexto.style.display='none'
        btnVermais.innerHTML='Ver Mais'
    }else{
        pontos.style.display='none';
        maisTexto.style.display='inline'
        btnVermais.style.innerHTML='Ver Menos'
    }
}
function inicializar() {
    const elementos = document.querySelectorAll('[id^="pontos_"], [id^="mais_"], [id^="btnVermais_"]');
    
    elementos.forEach((elemento) => {
        const id = elemento.id.split('_')[1];
        document.getElementById('pontos_' + id).style.display = 'inline';
        document.getElementById('mais_' + id).style.display = 'none';
        document.getElementById('btnVermais_' + id).innerHTML = 'Ver Mais';
    });
}

document.addEventListener('DOMContentLoaded', inicializar);