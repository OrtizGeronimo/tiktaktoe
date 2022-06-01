let x = true;



casilla = [];

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', event => { 
      let id = item.id;
      console.log(id);
      
    if(!checkContent(item)){
      if(x){      
            casilla[id] = "X";
            item.innerHTML = "<h1>X</h1>";
            x = false;
          } else {
            casilla[id] = "O";
            item.innerHTML = "<h1>O</h1>";
            x = true;
        }
        if(checkGame(casilla)){
          alert("win");
          document.querySelector("#reset").click();
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

function checkGame(casilla){
  if(checkHorizontals(casilla) || checkVerticals(casilla) || checkDiagonals(casilla)){
    return true;
  } 
    return false;
}


function checkHorizontals(casilla){
  for (let i = 1; i < 10; i+=3) {
    if (casilla[i] === undefined || casilla[i+1] === undefined || casilla[i+2] === undefined) {
      continue;
    }
    if (casilla[i] === casilla[i+1] && casilla[i] === casilla[i+2]) {
      return true;
    }
  }
  return false;

}

function checkVerticals(casilla){
  for (let i = 1; i < 4; i++) {
    if (casilla[i] === undefined || casilla[i+3] ===undefined || casilla[i+6] === undefined) {
      continue;
    }
    if (casilla[i] === casilla[i+3] && casilla[i] === casilla[i+6]) {
      return true;
    }
  }
  return false;
}

function checkDiagonals(casilla){
  if (casilla[1] !== undefined || casilla[5] !== undefined || casilla[9] !== undefined ) {
    if (casilla[1] === casilla[5] && casilla[1] === casilla[9]) {
      return true
    }
  }
  if (casilla[3] !== undefined || casilla[5] !== undefined || casilla[7] !== undefined ) {
    if(casilla[3] === casilla[5] && casilla[3] === casilla[7]){
      return true;
    }
  }
return false;
}


