document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const clearButton = document.querySelector('.search-clear-button');
  
    clearButton.addEventListener('click', function() {
      searchInput.value = '';
      searchInput.focus();
    });
  });

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0);
})

// COURSE SLIDER 


// show/hide faq anmswe

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    //change icon
    const icon = faq.querySelector('.faq__icon i');
   if(icon.className === 'uil uil-plus') {
    icon.className = "uil uil-minus";
   } else {
    icon.className = "uil uil-plus";
   }
  
  })
})



// fourm
const doubtForm = document.getElementById("doubtForm");
const doubtsList = document.getElementById("doubts");

doubtForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const question = event.target.question.value;

  if (name && question) {
    // Create a new list item to display the doubt
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <h3>${name}</h3>
      <p>${question}</p>
      <small>Posted on: ${new Date().toLocaleString()}</small>
    `;

    // Append the new doubt to the list
    doubtsList.appendChild(listItem);

    // Clear the form inputs
    event.target.name.value = "";
    event.target.question.value = "";
  }
});

// show hide nav 

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener( 'click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})

// Close nav menu 
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
 }

 closeBtn.addEventListener('click', closeNav)