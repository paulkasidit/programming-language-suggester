// choice possibilties: Python, Ruby On Rails, Swift
console.log("Script running");
//Business Logic 
  //first hide the results area  

const pythonProgrammingLanguage = "Python is known for simple syntax. It's the number one preferred language for data analysts."; //5
const rubyProgrammingLanguage = "Ruby On Rails is your programming language. Known for its unique syntax and versatality.";  //6
const swiftProgrammingLanguage = "Swift is best for developing mobile apps. Famous examples include apps for iOS.";  //7 

function generateProgrammingLanguage(event){
  event.preventDefault();
  console.log("generateProgrammingLanguage running")
  //getting elements from the form
  const fieldOfWork = document.querySelector("input[name='fieldOfWork']:checked").value;  // data analyst  = 5, web developer = 6, app developer = 7 
  const creativeAnalytical = document.querySelector("input[name='creativeAnalytical']:checked").value; //creative val  = 0, analytical val  = 1  
  const neatMessy = document.querySelector("input[name='neatMessy']:checked").value; //neat val = 0 , messy val = 1
  const gemsSnakes = document.querySelector("input[name='gemsSnakes']:checked").value; // gems val  = 0, snakes val = 1 
  const stressScale = parseInt(document.querySelector("input[name='stressScale']:checked").value); //range from 8 - 12 based on respective value 
   
  //See if element is returned to page 
  console.log(fieldOfWork);
  console.log(creativeAnalytical);
  console.log(neatMessy);
  console.log(gemsSnakes);
  console.log(stressScale);

  let careerField = 0; // intialize intial variable and assign a numerical value to each career path; 
  // determine the career path user wants to take  
  if (fieldOfWork === "dataAnalytics"){
    careerField += 5; 
  }
  else if (fieldOfWork === "webDevelopment"){
    careerField += 6; 
  }
  else if(fieldOfWork === "appDevelopment"){
    careerField += 7; 
  }

  // assigning numerical values to the choices of two choice questions
  let messy = 0;
  let analytical = 0; 
  let snakes = 0; 
  let stress = 0; 
  
  if (neatMessy === 'messy'){ 
    messy += 1; 
  } else if (gemsSnakes === "snakes"){ 
    snakes += 1; 
  } else if  (creativeAnalytical === 'analytical'){
    analytical += 1
  } else if (stressScale >= 3){ 
    stress += 10; 
  }


  // determining the result
  let result; 
  switch (careerField) { //Starting with the most simple case, Python is the most logical choice for data analyst; 
    case 5: {
      result = pythonProgrammingLanguage;
      break;
    } 
    case 6: {
      if (stressScale >= 10 || snakes >= 1 || messy === 0) {
        result = pythonProgrammingLanguage + " Python also offers web development frameworks like Django. Though, the learning curve may be steep. Ruby on Rails may be a safer option.";  
      } else { 
        result = rubyProgrammingLanguage; 
      } break;
    }
    case 7:{
      if (analytical === 1 || snakes >= 1){
        result = rubyProgrammingLanguage + "Ruby also offers support for app development backends.";
      } else {
        result = swiftProgrammingLanguage;
        break;
      }
    }

  }
  console.log(result);
};

window.addEventListener("load", function(){
  const form  = document.getElementById("progammingLanguageSuggestor");
  form.addEventListener("submit", generateProgrammingLanguage);

  let resultsArea  = document.getElementById("results-area");
  resultsArea.style.display = "none";
});

