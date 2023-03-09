let position = 0;

function animateSlider() {
  if (position == -1470) {
    position = 0;
    document.querySelector('.slide').style.marginLeft = `${position}px`;
    setTimeout(animateSlider, 5000);
    return;
  }
  position -= 490;
  document.querySelector('.slide').style.marginLeft = `${position}px`;

  setTimeout(animateSlider, 5000);
}

setTimeout(animateSlider, 5000);


let pageslider = 1;

document.querySelector('.show.dois').addEventListener('click', () =>{
  document.querySelector('.slider-membro').style.maxWidth = '620px';
 if(pageslider == 1){
    pageslider = 2; 
    document.querySelector('.membro-detalhe').style.marginLeft = '-620px'
    document.querySelector('.show.dois').classList.add("active");
    document.querySelector('.show ').classList.remove("active");
 }
 else{
    if(pageslider == 3){
      document.querySelector('.membro-detalhe').style.marginLeft = '-620px'
      document.querySelector('.show.dois').classList.add("active");
      document.querySelector('.show.tres').classList.remove("active");
      pageslider = 2; 
    }
 }
  
});

document.querySelector('.show.tres').addEventListener('click', () =>{

  if(pageslider == 1){
    pageslider = 3; 
    document.querySelector('.membro-detalhe').style.marginLeft = '-1240px'
    document.querySelector('.show.tres').classList.add("active");
    document.querySelector('.show ').classList.remove("active");
    document.querySelector('.slider-membro').style.maxWidth = '310px';
  }
  else{
    if(pageslider == 2){
      document.querySelector('.membro-detalhe').style.marginLeft = '-1240px'
      document.querySelector('.show.tres').classList.add("active");
      document.querySelector('.show.dois').classList.remove("active");
      document.querySelector('.slider-membro').style.maxWidth = '310px';
      pageslider = 3; 
    }
 }

});

document.querySelector('.show').addEventListener('click' , () =>{
  document.querySelector('.slider-membro').style.maxWidth = '620px';
  document.querySelector('.membro-detalhe').style.marginLeft = '0px'
  document.querySelector('.show').classList.add("active");
  if(pageslider == 2){
    document.querySelector('.show.dois').classList.remove("active");
  }
  if(pageslider == 3){
    document.querySelector('.show.tres').classList.remove("active");
  }
  pageslider = 1;
  console.log('pegou')
})