let input = document.querySelector(".right-nav input ");
let icon = document.querySelector(".right-nav i:first-of-type ");

icon.onclick = function () {
  if (input.style.opacity === "1") {
    input.style.opacity = "0";
  } else {
    input.style.opacity = "1";
  }
};

let exit = document.querySelector(".About-product > div:first-child p");
let menu = document.querySelector(".About-product");
let buy = document.querySelector(".buy div p:last-child");
let page = document.querySelector(".all");

buy.addEventListener("click", function () {
  menu.style.opacity = "1";
  menu.style.display = "inline"; // Consider using "block" instead of "inline" for a div
  page.style.opacity = "0.2";
  page.style.filter = "blur(2px)"; // 0.2px is barely noticeable, use a larger value like 5px for a significant blur effect
});

exit.addEventListener("click", function () {
  page.style.opacity = "1";
  page.style.filter = "none"; // Reset the blur effect
  menu.style.display = "none";
});
