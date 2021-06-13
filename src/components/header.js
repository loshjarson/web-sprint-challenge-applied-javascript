const Header = (title, date, temp) => {
  const header = document.createElement("div");
  header.className = "header";
  const dateContainer = document.createElement("span");
  dateContainer.textContent = date;
  dateContainer.className = "date"
  header.appendChild(dateContainer);
  const titleHeader = document.createElement("h1");
  titleHeader.textContent = title;
  header.appendChild(titleHeader);
  const tempSpan = document.createElement("span");
  tempSpan.className = "temp";
  tempSpan.textContent = temp;
  header.appendChild(tempSpan);
  return header
}
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
const headerAppender = (selector) => {
  const headContainer = document.body.querySelector(selector);
  const newHeader = Header("Lambda Times", "January 6, 1726", "26 degrees");
  headContainer.appendChild(newHeader);
}
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
export { Header, headerAppender }
