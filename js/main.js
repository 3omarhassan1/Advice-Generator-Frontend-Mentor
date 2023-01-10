function advice(params) {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((resjson) => {
      document.querySelector(".advice").innerHTML = `"${resjson.slip.advice}"`;
      document.querySelector(".num").innerHTML = resjson.slip.id;
    });
}
advice();
document.querySelector("button").addEventListener("click", advice);