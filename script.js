const listItems = document.querySelectorAll(".period li");
const contentDivs = document.querySelectorAll('div.item');
const dailyElements = document.querySelectorAll(".daily");
const weeklyElements = document.querySelectorAll(".weekly");
const monthlyElements = document.querySelectorAll(".monthly");

function handleClick(event) {
    listItems.forEach((item) => {
        item.style.color = (item === event.target) ? "white" : "hsl(238, 36%, 60%)";
    });

  switch(event.target.textContent){
    case 'Daily':
        dailyElements.forEach((element) => {
            element.classList.remove("hidden"); 
          });
        weeklyElements.forEach((element) => {
            element.classList.add("hidden"); 
          });

        monthlyElements.forEach((element) => {
            element.classList.add("hidden"); 
          });
        break;
    case 'Weekly':
        dailyElements.forEach((element) => {
            element.classList.add("hidden"); 
          });
        weeklyElements.forEach((element) => {
            element.classList.remove("hidden"); 
          });

        monthlyElements.forEach((element) => {
            element.classList.add("hidden"); 
          });
          break;
    case "Monthly":
        dailyElements.forEach((element) => {
            element.classList.add("hidden"); 
          });
        weeklyElements.forEach((element) => {
            element.classList.add("hidden"); 
          });

        monthlyElements.forEach((element) => {
            element.classList.remove("hidden"); 
          });
          break;
    default:
        alert("There is an error in the code")
  }

}

// Add click event listeners to each list item
listItems.forEach((item) => {
  item.addEventListener("click", handleClick);
});