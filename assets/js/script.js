'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// project
const projectsItem = document.querySelectorAll("[data-projects-item]");
const modalProjectContainer = document.querySelector("[data-project-modal-container]");
const modalProjectCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectClientsList = document.getElementById("project-img-list");

const projectImages = {
  "project-1": [
    "./assets/images/pulmo-ai/IMG_1425.png"
    // Add more image paths for project-1
  ],

  "project-2": [
    "./assets/images/sole-swap/IMG_2176.png"
  ],

  "project-3": [
    "./assets/images/dct-clock/IMG_3452.jpg",
    "./assets/images/dct-clock/IMG_3453.jpg",
    "./assets/images/dct-clock/IMG_3454.jpg",
    "./assets/images/dct-clock/IMG_3455.jpg"
  ],

  "project-4": [
    "./assets/images/early-goose/IMG_8481.jpg",
    "./assets/images/early-goose/IMG_8482.JPG",
    "./assets/images/early-goose/IMG_8483.JPG",
    "./assets/images/early-goose/IMG_8484.jpg",
    "./assets/images/early-goose/IMG_8485.JPG"
  ],

  "project-5": [
    "./assets/images/truly-mystifying/IMG_7678.JPG",
    "./assets/images/truly-mystifying/IMG_7679.JPG",
    "./assets/images/truly-mystifying/IMG_7680.JPG",
    "./assets/images/truly-mystifying/IMG_7681.png",
    "./assets/images/truly-mystifying/IMG_7682.JPG",
    "./assets/images/truly-mystifying/IMG_7683.jpeg"
  ],

  "project-6": [
    "./assets/images/smart-home/IMG_7084.jpg",
    "./assets/images/smart-home/IMG_7085.jpg",
    "./assets/images/smart-home/IMG_7086.jpg",
    "./assets/images/smart-home/IMG_7087.jpg",
    "./assets/images/smart-home/IMG_7088.jpg",
    "./assets/images/smart-home/IMG_7089.jpg",
    "./assets/images/smart-home/IMG_7091.jpg",
  ],

  "project-7": [
    "./assets/images/house-of-sports-canada/IMG_0265.jpg",
    "./assets/images/house-of-sports-canada/IMG_0267.jpg",
    "./assets/images/house-of-sports-canada/IMG_0269.jpg",
    "./assets/images/house-of-sports-canada/IMG_0271.jpg",
    "./assets/images/house-of-sports-canada/IMG_0274.jpg"
  ]


  // Add entries for other project IDs with their respective image paths
};

const modalProjectTitle = document.querySelector("[data-project-modal-title]");
const modalProjectText = document.querySelector("[data-project-modal-text]");

const projectModalFunc = function () {
  modalProjectContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
} 

for (let i = 0; i < projectsItem.length; i++) {

  projectsItem[i].addEventListener("click", function () {
    const projectId = this.getAttribute("data-project-id");

    projectClientsList.innerHTML = '';

    projectImages[projectId].forEach(imagePath => {
      const listItem = document.createElement("li");
      listItem.classList.add("clients-item");
      listItem.classList.add("height-200px")
      const image = document.createElement("img");
      image.src = imagePath;
      image.alt = "Client Image";
      listItem.appendChild(image);
      projectClientsList.appendChild(listItem);
    });


    // modalProjectImg.src = this.querySelector("[data-project-image]").src;
    // modalProjectImg.alt = this.querySelector("[data-project-image]").alt;
    modalProjectTitle.innerHTML = this.querySelector("[data-project-title]").innerHTML;
    modalProjectText.innerHTML = this.querySelector("[data-project-text]").innerHTML;

    projectModalFunc();

  });

}

modalProjectCloseBtn.addEventListener("click", projectModalFunc);
projectOverlay.addEventListener("click", projectModalFunc);


// extracurriculars
const extracurricularsItem = document.querySelectorAll("[data-extracurriculars-item]");
const modalExtracurricularsContainer = document.querySelector("[data-extracurriculars-modal-container]");
const modalExtracurricularsCloseBtn = document.querySelector("[data-extracurriculars-modal-close-btn]");
const extracurricularsOverlay = document.querySelector("[data-extracurriculars-overlay]");
const extracurricularsClientsList = document.getElementById("extracurriculars-img-list");

const extracurricularsImages = {
  "extracurriculars-1": [
    "https://www.tks.world/"
  ],
  "extracurriculars-2": [
    "https://www.youtube.com/@YorkUObservatory/streams"
  ],
  "extracurriculars-3": [
    "https://only60.wixsite.com/website"
  ],
  "extracurriculars-4": [
    "https://spiritofmath.com/"
  ],
  "extracurriculars-5": [
    "https://www.pwc.com/ca/en/"
  ]
};

const modalExtracurricularsTitle = document.querySelector("[data-extracurriculars-modal-title]");
const modalExtracurricularsText = document.querySelector("[data-extracurriculars-modal-text]");

const extracurricularsModalFunc = function () {
  modalExtracurricularsContainer.classList.toggle("active");
  extracurricularsOverlay.classList.toggle("active");
} 

for (let i = 0; i < extracurricularsItem.length; i++) {

  extracurricularsItem[i].addEventListener("click", function () {
    const extracurricularsId = this.getAttribute("data-extracurriculars-id");

    extracurricularsClientsList.innerHTML = '';

    extracurricularsImages[extracurricularsId].forEach(imagePath => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = imagePath;
      link.alt = "Client Image";
      link.textContent = "+ Learn More"
      link.target = "_blank";
      listItem.appendChild(link);
      extracurricularsClientsList.appendChild(listItem);
    });


    // modalProjectImg.src = this.querySelector("[data-project-image]").src;
    // modalProjectImg.alt = this.querySelector("[data-project-image]").alt;
    modalExtracurricularsTitle.innerHTML = this.querySelector("[data-extracurriculars-title]").innerHTML;
    modalExtracurricularsText.innerHTML = this.querySelector("[data-extracurriculars-text]").innerHTML;

    extracurricularsModalFunc();

  });

}

modalExtracurricularsCloseBtn.addEventListener("click", extracurricularsModalFunc);
extracurricularsOverlay.addEventListener("click", extracurricularsModalFunc);






// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// // const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");
// const modalTime = document.querySelector("[data-modal-time]")

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     // modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     // modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
//     modalTime.innerHTML = this.querySelector("[data-testimonials-time]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// // custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// // filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// // add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}