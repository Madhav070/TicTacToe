let currPlayer="X";
let btn=document.getElementsByClassName('choiceBox');
for(let element of btn){
  element.addEventListener('click',handleClick);
}

let count=0;

function handleClick(){
  if(currPlayer=="X"){
    this.innerHTML=`<p class="text-red-500">${currPlayer}</p>`;
  }
  else{
    this.innerHTML=`<p class="text-blue-500">${currPlayer}</p>`;
  }
  setTimeout(checkCondition,300);
}

function checkCondition(){
    if(checkWinner()){
      alert(`${currPlayer} is the Winner.`);
      clearBoard();
      count=0;
    }
    else if(count==9){
        alert('It is a Draw!');
        clearBoard();
        count=0;
    }
    else{
      if(currPlayer=="X"){
        currPlayer="O";
      }
      else if(currPlayer=="O"){
        currPlayer="X";
      }
    }
}

function checkWinner(){
  for(let i=0;i<=6;i=i+3){
    if(btn[i].textContent==btn[i+1].textContent && btn[i+1].textContent==btn[i+2].textContent && (btn[i].textContent=="X" || btn[i].textContent=="O")){
      return true;
    }
  }
  for(let i=0;i<3;i++){
    if(btn[i].textContent==btn[i+3].textContent && btn[i+3].textContent==btn[i+6].textContent && (btn[i].textContent=="X" || btn[i].textContent=="O")){
      return true;
    }
  }
  if(btn[0].textContent==btn[4].textContent && btn[4].textContent==btn[8].textContent && (btn[0].textContent=="X" || btn[0].textContent=="O")){
    return true;
  }
  if(btn[2].textContent==btn[4].textContent && btn[4].textContent==btn[6].textContent && (btn[2].textContent=="X" || btn[2].textContent=="O")){
    return true;
  }
  return false;
}

function clearBoard(){
  for(let element of btn){
    element.textContent="";
  }
}

function addColor(currBtn){
  if(currPlayer=="X"){
    currBtn.classList.add('text-red-500');
  }
  if(currPlayer=="O"){
    currBtn.classList.add('text-blue-500');
  }
}
