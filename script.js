let botao = document.getElementById('botao')
let opcoes = document.querySelector('opcoes')
let elementoLista = document.querySelector('ul')
let titulo = document.getElementById('titulo')
let aberto = false;
contatos = [
    'About',
    'Services',
    'Projects',
    'CONTACT'  ]
function clicar(){
        elementoLista.innerHTML='';
        if(aberto ==false){
            for(let contato of contatos ){
                let li = document.createElement('li')
                let texto = document.createTextNode(contato)
                li.appendChild(texto)
                elementoLista.appendChild(li)
                titulo.style.display='none' }
                aberto = true
                console.log(aberto)
        } else if(aberto == true){
            elementoLista.innerHTML='';
            titulo.style.display = ('flex');
            elementoLista.removeChild
            aberto = false;
            console.log(aberto)}
} 
