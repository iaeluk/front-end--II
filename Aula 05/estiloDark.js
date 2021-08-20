
const botaoDark = document.querySelector('.modoDark');
const botaoWhite = document.querySelector('.modoWhite');

const body = document.querySelector('body')
const li = document.querySelectorAll('li')
const titulo = document.querySelector('.titulo');


botaoDark.addEventListener('click', () => {
    
    titulo.style.color = 'rgb(156, 156, 156)';
    titulo.style.textAlign = 'center';
    titulo.style.fontSize = '3em';
    titulo.style.backgroundColor = '#333';

    botaoWhite.style.filter = 'invert(100%)'
    botaoDark.style.filter = 'invert(100%)'
    
    li.forEach( li => {
      
        li.style.backgroundColor = '#333';
        li.style.color = 'rgb(156, 156, 156)';
    })
    
    body.style.backgroundColor = '#333';
})

botaoWhite.addEventListener('click', () => {
    
    titulo.style.color = 'rgb(156, 156, 156)';
    titulo.style.textAlign = 'center';
    titulo.style.fontSize = '3em';
    titulo.style.backgroundColor = '#fff';

    botaoWhite.style.filter = 'invert(0%)'
    botaoDark.style.filter = 'invert(0%)'

    li.forEach( li => {
      
        li.style.backgroundColor = '#fff';
        li.style.color = '#292929';
    })

    body.style.backgroundColor = '#fff';
})
