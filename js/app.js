/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const global = {
  //? i am using # in the query selector because its get element by id
  navUL: document.querySelector("#navbar__list"),
  //? creating il elements to put it inside the ul
  navli1: document.createElement("il"),
  navli2: document.createElement("il"),
  navli3: document.createElement("il"),
  navli4: document.createElement("li"),
  navA1: document.createElement("a"),
  navA2: document.createElement("a"),
  navA3: document.createElement("a"),
  navA4: document.createElement("a"),
  scrollDiv: document.createElement("div"),
  activeHeader: "your-active-class",
  container1: ".landing__container1",
  sec1: document.getElementById("sec1"),
  sec2: document.getElementById("sec2"),
  sec3: document.getElementById("sec3"),
  sec4: document.getElementById("sec4"),
  activeColor: ('active')
};

/*

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
//? building a data to store the likes of sections and any other type of data i will need
const data = {
  section: {
    section1: "#section1",
    section2: "#section2",
    section3: "#section3",
    section4: "#section4",
  },
  typing: {
    type1: "section 1",
    type2: "section 2",
    type3: "section 3",
    type4: "section 4",
  }
};

//! Navigation is built dynamically as an unordered list.

//? storing my appendchild of Ul and il in a fuction (appendchild lets me but il element inside the UL element)
const appendchild = () => {
  global.navUL.appendChild(global.navli1);
  global.navUL.appendChild(global.navli2);
  global.navUL.appendChild(global.navli3);
  global.navUL.appendChild(global.navli4);
//? apendchild of <li> to <a> so i can use it on the scrollintoview()
  global.navli1.appendChild(global.navA1);
  global.navli2.appendChild(global.navA2);
  global.navli3.appendChild(global.navA3);
  global.navli4.appendChild(global.navA4);
};
appendchild();

//! When clicking an item from the navigation menu, the link should scroll to the appropriate section


console.log(global.navUL.childNodes[0].childNodes);

const child = {
  child1 : global.navUL.childNodes[0],
  child2 : global.navUL.childNodes[1],
  child3 : global.navUL.childNodes[2],
  child4 : global.navUL.childNodes[3]
};



//scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

//? using my il elements from the global and then using innerHtml to type <a> tag
//? the diff between innerhtml and textcontent that its value not prased onto html and innerthtml write text inside an element
// `<a class="landing__container1" href="${data.section.section1}" data-nav="Section 1">${data.typing.type1}</a>`
const liHtml = () => {
  global.navli1.innerHTML = `<a class="landing__container1"  class="s1"  data-nav="Section 1">${data.typing.type1}</a>`;
  global.navli2.innerHTML = `<a class="landing__container2"  class="s2"  data-nav="Section 2">${data.typing.type2}</a>`;
  global.navli3.innerHTML = `<a class="landing__container3"  class="s3"  data-nav="Section 3">${data.typing.type3}</a>`;
  global.navli4.innerHTML = `<a class="landing__container4"  class="s4"  data-nav="Section 3">${data.typing.type4}</a>`;
};
liHtml();



const scrollView = () => { 

child.child1.addEventListener('click', () => {

global.sec1.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});

global.navUL.childNodes[0].childNodes.classList.remove('landing__container1');

});


child.child2.addEventListener('click', () => {

global.sec2.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})

global.navUL.childNodes[1].childNodes.classList.add('landing__container2');

});




child.child3.addEventListener('click', () => {

global.sec3.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})});


child.child4.addEventListener('click', () => {

global.sec4.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})});

};

scrollView();



//const sroll1 = document.querySelector(global.sec1).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
document.querySelector(`${data.section.section1}`).classList.remove(global.activeHeader);

//! It should be clear which section is being viewed while scrolling through the page.

//? using const view arrow function so i can use the getboundingclientrect() of the top of each sec element to add class your-active-class by the if statment
//? math.floor method to round the number downward to the nearest integer, example :  2.6 = 2
const view = (sec) => {
  return Math.floor(sec.getBoundingClientRect().top);
};

const viewScroll = () => {
  //console.log(window.innerHeight);
  console.log(view(sec1));
  const sectionOne = document.querySelector(`${data.section.section1}`);
  const sectionTwo = document.querySelector(`${data.section.section2}`);
  const sectionThree = document.querySelector(`${data.section.section3}`);
  const sectionFour = document.querySelector(`${data.section.section4}`);
  //window.scrollY
  if (view(global.sec1) < 150 && view(global.sec1) >= -150) {
    sectionOne.classList.add(global.activeHeader);
    sectionTwo.classList.remove(global.activeHeader);
    sectionThree.classList.remove(global.activeHeader);
    sectionFour.classList.remove(global.activeHeader);
  } else if (view(global.sec2) < 150 && view(global.sec2) >= -150) {
    sectionOne.classList.remove(global.activeHeader);
    sectionTwo.classList.add(global.activeHeader);
    sectionThree.classList.remove(global.activeHeader);
    sectionFour.classList.remove(global.activeHeader);
  } else if (view(global.sec3) < 150 && view(global.sec3) >= -150) {
    sectionOne.classList.remove(global.activeHeader);
    sectionTwo.classList.remove(global.activeHeader);
    sectionThree.classList.add(global.activeHeader);
    sectionFour.classList.remove(global.activeHeader);
  } else if (view(global.sec4) < 150 && view(global.sec4) >= -150) {
    sectionOne.classList.remove(global.activeHeader);
    sectionTwo.classList.remove(global.activeHeader);
    sectionThree.classList.remove(global.activeHeader);
    sectionFour.classList.add(global.activeHeader);
  }
};

window.addEventListener("scroll", viewScroll);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as