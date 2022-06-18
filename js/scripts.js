// choice possibilties: Python, Ruby On Rails, Swift
console.log("Script running");
//Business Logic 
  //first hide the results area  


function generateProgrammingLanguage(event){
  event.preventDefault();
  console.log("generateProgrammingLanguage running")
  //getting elements from the form
  const fieldOfWork = document.querySelector("input[name='fieldOfWork']:checked").value;
  const creativeAnalytical = document.querySelector("input[name='creativeAnalytical']:checked").value;
  const neatMessy = document.querySelector("input[name='neatMessy']:checked").value;
  const gemsSnakes = document.querySelector("input[name='gemsSnakes']:checked").value;
  const stressScale = parseInt(document.querySelector("input[name='stressScale']:checked").value);
  
  //See if element is returned to page 
  console.log(fieldOfWork);
  console.log(creativeAnalytical);
  console.log(neatMessy);
  console.log(gemsSnakes);
  console.log(stressScale);


};

window.addEventListener("load", function(){
  const form  = document.getElementById("progammingLanguageSuggestor");
  form.addEventListener("submit", generateProgrammingLanguage);
});

