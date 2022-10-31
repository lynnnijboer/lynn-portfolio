

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove('navbar--closed')
  } else {
    document.querySelector(".navbar").classList.add('navbar--closed')
  }
  prevScrollpos = currentScrollPos;
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


let title = document.querySelector(".title-box");
  gsap.to(title, { y: 0,
  duration: 1
})
let titleTwo = document.querySelector(".title-box_two");
  gsap.to(titleTwo, { y: 0,
  duration: 1
})
let titleThree = document.querySelector(".title-box_three");
  gsap.to(titleThree, { y: 0,
  duration: 1
})
let paragraph = document.querySelector(".paragraph-box");
  gsap.to(paragraph, { y: 0,
  duration: 1
})
let button = document.querySelector(".cta-box");
  gsap.to(button, { y: 0,
  duration: 2
})

let sections = gsap.utils.toArray(".js-animation-certificate");

sections.forEach((section) => {
  let title = section.querySelectorAll(".skills-title-js");
  let text = section.querySelectorAll(".skills-paragraph-js");

  gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "+=200",
        scrub: true,
      }
    })

    .from(title, {
      opacity: 0,
      x: -400
    })

    .from(text, {
      opacity: 0,
      x: 500
    });
});

let sectionsTwo = gsap.utils.toArray(".js-animation-skills");

sectionsTwo.forEach((sectionTwo) => {
  let title = sectionTwo.querySelectorAll(".skills-title-js");
  let text = sectionTwo.querySelectorAll(".skills-paragraph-js");

  gsap.timeline({
      scrollTrigger: {
        trigger: sectionTwo,
        start: "top center",
        end: "+=200",
        scrub: true,
      }
    })
    .from(title, {
      opacity: 0,
      x: -400
    })

    .from(text, {
      opacity: 0,
      x: 500
    });

});

let caseSlider = gsap.utils.toArray("#cases");

caseSlider.forEach((cases) => {
  let slider = cases.querySelectorAll(".cases-loop_box");
  let slide = cases.querySelectorAll(".slider-inner");

  gsap.timeline({
      scrollTrigger: {
        trigger: cases,
        start: "center center",
        end: "bottom center",
        scrub: true
      },
    })
    .to(slider, {
      x: "-130vw"
    })

  gsap.timeline({
      scrollTrigger: {
        trigger: cases,
        start: "top",
        end: "+=350",
        pin: true
        },
    })

});


