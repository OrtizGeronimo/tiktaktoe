let x = true;

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', event => {

    if(!checkContent(item)){
    if(x){      
          item.innerHTML = "<h1>X</h1>";
          x = false;
        } else {
          item.innerHTML = "<h1>O</h1>";
          x = true;
      }
    }
    
    
    })
  })


function checkContent(item){
    if(item.textContent.includes("X") || item.textContent.includes("O")){
        return true;
    }
    return false;
}


