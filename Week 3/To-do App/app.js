function deleteTodo(index) {
  const element = document.getElementById(index);
  element.parentElement.removeChild(element);
}

let cnt = 1;
function addTodo() {
  const inputEl = document.querySelector("input");
  const value = inputEl.value;
  // creating a span, button
  const spanEl = document.createElement("span");
  spanEl.innerHTML = value;

  const buttonEl = document.createElement("button");
  buttonEl.innerHTML = "Delete";
  buttonEl.setAttribute("onclick", "deleteTodo(" + cnt + ")");

  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", cnt);

  // appending them to the new div
  newDiv.appendChild(spanEl);
  newDiv.appendChild(buttonEl);

  cnt = cnt + 1;

  // appending the new div to the body
  document.querySelector("body").appendChild(newDiv);

  // empty the input field
  inputEl.value = "";
}
