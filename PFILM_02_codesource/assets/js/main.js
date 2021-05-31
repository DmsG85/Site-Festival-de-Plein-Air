$(document).ready(function () {
    
    const button = $('.button-scrollUp');
  
    button.on("click" , () =>{
      window.scroll ({
            top: 0,
            left: 0,
            behavior:"smooth"
        })
    })
  
      
  })