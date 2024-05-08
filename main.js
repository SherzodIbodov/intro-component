let form = document.querySelector("form");
let formDate = document.querySelectorAll("input");
formDate.forEach((item, index) =>
  item.addEventListener("change", (e) => {
    const target = e.target;
    if (target.value.length < 3) {
      target.classList.add("name");
      index == 0
        ? (item.nextElementSibling.innerHTML = " First Name cannot be empty")
        : index == 1
        ? (item.nextElementSibling.innerHTML = " Last Name cannot be empty")
        : index == 2
        ? (item.nextElementSibling.innerHTML =
            " Looks like this is not an mail")
        : index == 3
        ? (item.nextElementSibling.innerHTML = " Password cannot be empty")
        : item;
    } else {
      target.clasaList.remove("name");
      console.log(formDate);
    }
  })
);
formDate[0].addEventListener("change", (e) => {
  const target = e.target;
  if (target.value.length < 3) {
    target.classList.add("name");
    formDate[0].nextElementSibling.innerHTML = " First Name cannot be empty";
  } else {
    target.clasaList.remove("name");
    console.log(formDate);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
