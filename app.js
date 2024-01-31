//VARIABLES
const btnatras=document.querySelector('#atras')
const btnsiguiente=document.querySelector('#siguiente')
const circles=[...document.querySelectorAll('.circle')]
const progreso=document.querySelector('.first')
let cont=0
document.addEventListener('DOMContentLoaded',()=>{
    btnsiguiente.addEventListener('click',()=>{

            if(cont<circles.length-1){
                circles[++cont].classList.add('active')
                actualizarProgreso()
            }
    })
    btnatras.addEventListener('click',()=>{
  
        if(cont>0){
            circles[cont--].classList.remove('active')
            actualizarProgreso()
       
        }
       
    })
    function actualizarProgreso(){
        let Nwidth= 33 * cont;
        progreso.style.width=`${Nwidth}%`
        btnsiguiente.disabled=cont===circles.length-1;
        btnatras.disabled=cont===0;
    }
})

