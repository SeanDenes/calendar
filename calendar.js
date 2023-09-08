// Initiate the calendar
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div class="cell">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};
document.querySelector(".prev").addEventListener("click", () => {
  console.log('prev');
  date.setMonth(date.getMonth() - 1);
  
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  console.log('next');
  date.setMonth(date.getMonth() + 1);
  
  renderCalendar();
});
// Add event listener to the calendar cells
var calendarCells = document.querySelectorAll('.calendar .days');
calendarCells.forEach(function(cell) {
  cell.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target.textContent 
    const day = target;
    const year = 2023;
    const month = date.getMonth() + 1;
    const dateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    document.getElementById("date").value = dateString;
  });
}); 

renderCalendar();

//this function is called when the user clicks on a date
//it updates the form value with the date





