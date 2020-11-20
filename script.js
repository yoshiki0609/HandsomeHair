const titles = document.querySelectorAll(".title");
const titles2 = document.querySelectorAll(".title2");

const options = {
      rootMargin: "0px 0px -140px 0px",
    };

const up_in = function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("up-in");
      observer.unobserve(entry.target);
    } else {
    }
      });
    }
    const up = new IntersectionObserver(up_in, options);
    titles.forEach(title => up.observe(title));


    


const left_in = function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("left-in");
      observer.unobserve(entry.target);
    } else {
    }
      });
    }
    const left = new IntersectionObserver(left_in, options);
    titles2.forEach(title2 => left.observe(title2));