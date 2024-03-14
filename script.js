function search() {
  let textToSearch = document.getElementById("text-to-search").value;
  let paragraph = document.getElementById("paragraph");
  textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  let pattern = new RegExp(`${textToSearch}`, "g");
  paragraph.innerHTML = paragraph.textContent.replace(
    pattern,
    (match) => `<mark>${match}</mark>`
  );
}

function overlay() {
  let shade = document.getElementsByClassName("overlay");
  let data = document.getElementById("textarea").value;
  let paragraph = document.getElementById("paragraph");
  paragraph.innerHTML = data;
  shade[0].classList.add("disappear");
}
