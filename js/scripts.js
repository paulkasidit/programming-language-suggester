// choice possibilties: Python, Ruby On Rails, Swift
window.onload = function(){ 
console.log("Script running");
//Business Logic 
  //first hide the results area  
  let resultsArea = document.getElementById("results-area");
  resultsArea.style.display = "none";

  const form = document.querySelector(progammingLanguageSuggestor)

  function generateProgrammingLanguage(event){
    console.log("generateProgrammingLanguage running")
  //getting elements from the form
    const fieldOfWork =  toString(document.querySelector("input[name="fieldOfWork"]:checked").value);
    const creativeAnalytical = toString(document.querySelector("input[name="creativeAnalytical"]:checked").value);
    const neatMessy = toString(document.querySelector("input[name="neatMessy"]:checked").value);
    const gemsSnakes = toString(document.querySelector("input[name="gemsSnakes"]:checked").value);
    const stressScale = parseInt(document.querySelector("input[name="stressScale"]:checked").value);
  
    //See if element isreturned to page 
    console.log(fieldOfWork);
    console.log(creativeAnalytical);
    console.log(neatMessy);
    console.log(gemsSnakes);
    console.log(stressScale);
  };

  form.addEventListener("submit", generateProgrammingLanguage)

}; 