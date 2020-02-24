/*
    Reference: https://tobiasahlin.com/moving-letters/
    Date: 2019/11/08
*/

// Part #1, Home page title

var textWrapper = document.querySelector(".ml14 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml14 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900
  })
  .add({
    targets: ".ml14 .letter",
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: "-=600",
    delay: (el, i) => 150 + 25 * i
  })
  .add({
    targets: ".ml14",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//  Part #2, detail list
// #1 list display one by one after title

// var bucket_1 = document.querySelectorAll(".bucket")[0];
anime.timeline({ loop: true }).add({
  targets: ".list .1",
  translateY: [1200, 0],
  easing: "easeOutExpo",
  duration: 2000,
  delay: 1000
});

// Part #3, do left slide, put an article
function gotoarticle() {
  window.open("./article.html");
}

let p = document.createElement("p");
p.style.fontSize = "10px";
p.style.margin = "-14rem 0px -4rem 0";
p.innerText = `What made me blush was the thrilling possibility, unbelievable as I
wanted it to remain, that he might actually like me, and that he liked
me in just the way I liked him. --Andre Aciman Call Me By Your Name: A
Novel`;
document.querySelectorAll("span.list")[1].append(p);
document.querySelectorAll("span.list")[1].style.display = "grid";

// Calm down
let p_1 = document.createElement("p");
p_1.style.fontSize = "14px";
p_1.style.marginTop = "-10rem";
p_1.innerText = "A tiny reminder: You are doing really well so far";

document.querySelectorAll("span.list")[2].append(p_1);
document.querySelectorAll("span.list")[2].style.display = "grid";
