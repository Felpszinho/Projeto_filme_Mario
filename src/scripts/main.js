AOS.init();
document.addEventListener('DOMContentLoaded',function(){
   
    const hero= document.querySelector('.header');
    const  alturahero= hero.clientHeight
    window.addEventListener('scroll',function(){
     const posiatual= window.scrollY;
     if(posiatual<alturahero){
        ocultaElemento();
     }
     else{
        exbibeElemento();
     }
    })

})