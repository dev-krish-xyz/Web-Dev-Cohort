const hourhand = document.querySelector(".hour");
const minutehand = document.querySelector(".minute");
const secondhand = document.querySelector(".second");
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const timebox = document.querySelector(".time");
const datebox = document.querySelector(".date");
const clockface = document.querySelector('.clock');

for(let i=1;i<=12;i++){
  const clocknum = document.createElement('div');
  clocknum.className ='numbers';
  clocknum.style.setProperty('--num',i);
  clocknum.textContent = i;
  clockface.appendChild(clocknum);
}


function rotation() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const formathr = hours % 12 || 12;
  let day = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  
  const ampm = hours >= 12 ? 'PM': 'AM';

  const displaySeconds = seconds < 10 ? String(seconds).padStart(2,'0'): seconds;
  const displayMinutes = minutes < 10 ? String(minutes).padStart(2,'0'):minutes;
  const displayHours = formathr < 10 ? String(formathr).padStart(2,'0'):formathr;
  timebox.textContent = `${displayHours} : ${displayMinutes} : 
  ${displaySeconds} ${ampm}`;


  day = day< 10 ? String(day).padStart(2, '0'): String(day);
  month = month<10 ? String(month).padStart(2,'0'): String(month);
  datebox.textContent = `${day}th ${month} ${year}`;

  const secDeg = seconds * 6;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = ((hours % 12) + minutes / 60) * 30;

  secondhand.style.transform = `rotate(${secDeg}deg)`;
  minutehand.style.transform = `rotate(${minDeg}deg)`;
  hourhand.style.transform = `rotate(${hourDeg}deg)`;
}
rotation();
setInterval(rotation, 1000);
