const calcular = document.querySelector('#calcular')
calcular.addEventListener('click',function(e){
    
    e.preventDefault()
    let nota1 = document.querySelector('#primeiraNota').value
    let nota2 = document.querySelector('#segundaNota').value
    let nota3 = document.querySelector('#terceiraNota').value
    let nota4 = document.querySelector('#quartaNota').value
    
    nota1 = parseFloat(nota1)
    nota2 = parseFloat(nota2)
    nota3 = parseFloat(nota3)
    nota4 = parseFloat(nota4)
    
    let media = (nota1+nota2+nota3+nota4)/4

    let resultado = document.querySelector('#resultado')  

    resultado.innerHTML = media
    
    if(media >= 7){
        document.getElementById('icon-result').src = '../_img/approved.png'
    }
    else{
        document.getElementById('icon-result').src = '../_img/rejected.png'
    }
})