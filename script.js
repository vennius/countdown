const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

setInterval(main, 1000);

function main(){
  const date = new Date();
  
  let leftHours = getLeftDay() *24;
  let leftMinutes = 60 - date.getMinutes();
  let leftSeconds = 60 - date.getSeconds();
  
  hoursEl.innerHTML = leftHours;
  minutesEl.innerHTML = leftMinutes;
  secondsEl.innerHTML = leftSeconds;
  
}

function getLeftDay(){
  const date = new Date();
  let totalDay;
  
  if(getTotalDay()%4 === 0){
    totalDay = 366;
  }else{
    totalDay = 365;
  }
  
  let leftDay = 0;
  
  for(let i = 1; i < date.getMonth()-1; i++){
    leftDay += getTotalDay(i);
  }
  
  leftDay += date.getDate();
  
  return totalDay - leftDay - 60;
  
  
}

function getTotalDay(bulan){
  
  const date = new Date();
  
  switch(bulan){
    
    case 1:
      return 31;
    break;
    
    case 2:
      if((date.getFullYear() % 4) == 0){
        return 28;
      }else{
        return 29;
      }
    break;
    
    case 3:
      return 31;
    break;
    
    case 4:
      return 30;
    break;
    
    case 5:
      return 31;
    break;
    
    case 6:
      return 30;
    break;
    
    case 7:
      return 31;
    break;
    
    case 8:
      return 31;
    break;
    
    case 9:
      return 30;
    break;
    
    case 10:
      return 31;
    break;
    
    case 11:
      return 30;
    break;
    
    case 12:
      return 31;
    break;
    
    
  }
  
}