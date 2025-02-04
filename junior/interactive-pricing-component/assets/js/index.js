const toogle = document.querySelector("#check");
const range = document.querySelector("#range");

const price = document.querySelector(".grid .flex h3");
const month = document.querySelector(".grid .flex span");

toogle.addEventListener("click", () => {
  const value = range.value;
  changeValue(value)
});

range.addEventListener("input", () => {
  const value = range.value;
  const slider = document.querySelector(".slider");
  slider.style.background = `linear-gradient(
		to right,
		hsl(174, 77%, 80%) 0%,
		hsl(174, 77%, 80%) ${value}%,
		 hsl(224, 65%, 95%) 50%,
		 hsl(224, 65%, 95%) 100%
	)`;

  changeValue(value);
});

function changeValue(value) {
  const pages = document.querySelector(".title");
  let pricing = 8;

  if ((value > 0) & (value <= 20)) {
    pages.textContent = "10K Pageviews";
    pricing = 8;
  } else if (value > 20 && value <= 40) {
    pages.textContent = "50K Pageviews";
    pricing = 12;
  } else if (value > 40 && value <= 60) {
    pages.textContent = "100K Pageviews";
    pricing = 16;
  } else if (value > 60 && value <= 80) {
    pages.textContent = "500K Pageviews";
    pricing = 24;
  } else if (value > 80 && value <= 100) {
    pages.textContent = "1M Pageviews";
    pricing = 36;
  }

  const contentToogle = document.querySelector(".toogle");

  if (toogle.checked) {
    contentToogle.classList.add("active");
    month.textContent = "/ year";
    const totalValue = pricing - pricing * 0.25;
    price.textContent = `$${totalValue}.00`;
  } else {
    contentToogle.classList.remove("active");
    month.textContent = "/ month";
    price.textContent = `$${pricing}.00`;
  }
}
