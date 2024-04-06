const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const button = document.querySelector(".button");

button.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("Please input your plan for the day");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

//save items/data in the browser
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
