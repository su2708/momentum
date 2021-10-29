const date = document.getElementById("date");
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayOfWeek = week[today.getDay()];
  date.innerText = `${year}.${month}.${day}.${dayOfWeek} /`;
}

getToday();
setInterval(getToday, 1000);