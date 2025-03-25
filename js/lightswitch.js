// DARK MODE
window.addEventListener("DOMContentLoaded", function() {
const btn = document.querySelector(".lightswitch");
$(".lightswitch i").attr("class","ph-moon-fill");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
document.body.classList.add("night");
$(".lightswitch i").attr("class","ph-sun-fill");
}

btn.addEventListener("click", function () {
document.body.classList.toggle("night");

let theme = "light";
$(".lightswitch i").attr("class","ph-moon-fill");
if (document.body.classList.contains("night")) {
theme = "dark";
$(".lightswitch i").attr("class","ph-sun-fill");
}
localStorage.setItem("theme", theme);
});
});
