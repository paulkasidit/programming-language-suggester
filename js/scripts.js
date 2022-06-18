// choice possibilties: Python, Ruby On Rails, Swift
console.log("Script running");
//Business Logic 
  //first hide the results area  

const pythonProgrammingLanguage = "Python is known for simple syntax. It's the number one preferred language for data analysts.";
const rubyProgrammingLanguage = "Ruby On Rails is your programming language. Known for its unique syntax and versatality."; 
const swiftProgrammingLanguage = "Swift is best for developing mobile apps. Famous examples include apps for iOS.";  

function calculateDataAnalyst(num){ //function called if user selects 
  if (num === 6){
    return rubyProgrammingLanguage;
  };
};

function calculateWebDeveloper(num){
  if (num === 6){
    return rubyProgrammingLanguage;
  };
};

function calculateAppDeveloper(num){
  

};

function generateProgrammingLanguage(event){
  event.preventDefault();
  console.log("generateProgrammingLanguage running")
  //getting elements from the form
  const fieldOfWork = document.querySelector("input[name='fieldOfWork']:checked").value;  // data analyst  = 5, web developer = 6, app developer = 7 
  const creativeAnalytical = document.querySelector("input[name='creativeAnalytical']:checked").value; //creative val  = 3, analytical val  = 4  
  const neatMessy = document.querySelector("input[name='neatMessy']:checked").value; //neat val = 3 , messy vall = 4
  const gemsSnakes = document.querySelector("input[name='gemsSnakes']:checked").value; // gems val  = 3, snakes val = 4 
  const stressScale = parseInt(document.querySelector("input[name='stressScale']:checked").value); //range from 8 - 12 based on respective value 
  
  //See if element is returned to page 
  console.log(fieldOfWork);
  console.log(creativeAnalytical);
  console.log(neatMessy);
  console.log(gemsSnakes);
  console.log(stressScale);

  let result = 0; //initial value is set to 0 
  //determine the career path user wants to take  
  
  if (fieldOfWork === "dataAnalytics"){
    score = 5; 
  }

  if (fieldOfWork === "webDevelopment"){
    score = 6; 
    calculateWebDeveloper(score);
  };

  if (fieldOfWork === "appDevelopment"){
    score = 7; 
  };

};

window.addEventListener("load", function(){
  const form  = document.getElementById("progammingLanguageSuggestor");
  form.addEventListener("submit", generateProgrammingLanguage);

  let resultsArea  = document.getElementById("results-area");
  resultsArea.style.display = "none";
});

