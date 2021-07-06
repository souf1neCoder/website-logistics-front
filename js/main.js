//
const navitem = document.querySelectorAll(".nav-item");
navitem.forEach(link => {
    link.addEventListener("click",()=>{
        removeActive();
        link.classList.add("active");
    })
})
function removeActive(){
    navitem.forEach(link => {
        link.classList.remove("active")
    })
}
//
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateConter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateConter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateConter();
});
//
myBtn = document.getElementById("scroll_to_top");
window.onscroll = function () {
  if (window.pageYOffset >= 800 && window.innerWidth > 768) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
};
myBtn.onclick = function () {
  window.scrollTo(0, 0);
};

//
const faq_link = document.querySelectorAll(".faq_link");
const faq_p = document.querySelectorAll(".faq_p");
const faq_icon = document.querySelectorAll(".faq_link i");

faq_link.forEach((link,i)=>{
    link.addEventListener("click",()=>{
        link.classList.toggle("active")
        faq_p[i].classList.toggle("active");
        faq_icon[i].classList.toggle("fa-window-minimize");
    })

})
//
const open_search = document.getElementById("open_box_search");
const overlay_search = document.querySelector(".overlay-main");
const closeSearchBox = document.getElementById("close")
open_search.addEventListener("click",()=>{
    overlay_search.style.display = "block";
})
closeSearchBox.addEventListener("click", () => {
  overlay_search.style.display = "none";
});
//
const inputSearch = document.getElementById("search_input");
window.onload = ()=>{
    inputSearch.focus();
}
