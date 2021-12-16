//361-(12*30-(30-16))
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');


function getFebDay(){
  const date = new Date();
  if(date.getYear() / 4 == 0){
    return 366-(date.getMonth()*30-(30-date.getDate()));
  }else{
    return 365-(date.getMonth()*30-(30-date.getDate()));
  }
}
