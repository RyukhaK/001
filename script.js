
    function hora() { 
    const now = new Date()
    const hours = now.getHours()
    document.getElementById("p").textContent = `Agora são ${hours} Horas.`
    
    if (hours > 0 && hours <= 4  ) { window.document.querySelector('body').style.backgroundColor = 'rgb(128, 91, 170)';}  
        else {  if ( hours > 4 && hours <= 11 )    { window.document.querySelector('body').style.backgroundColor ='rgb(121, 158, 192)' 

         }  else
            {  if   (hours > 11 && hours < 17) { window.document.querySelector('body').style.backgroundColor ='red'  } 
            } 
        }                
      

    if (hours => 0 && hours <= 5   ) { window.document.querySelector('h1').style.color = 'rgb(211, 175, 253)'; 
    } else if (hours => 5 && hours<= 12) { window.document.querySelector('h1').style.color = ''           }
   
}