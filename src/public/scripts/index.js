
function displayAnswer(answer) {

      if(answer !== undefined){

        const allUsersAnchor = document.querySelector('#answer-column');
        allUsersAnchor.innerHTML = answer;
      }
}





// Add event listeners
const submitButton = document.querySelector(".calculate-btn");

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const ele = event.target;
  const operator = document.getElementById('operator').value;
  //console.log(operator)
  if(operator === "add"){
    addition();

  }else if(operator === "subtract"){
    subtraction();

  }else if(operator === "multiply"){
    multiplication();
  }else if( operator === "divide"){
    division();
  }
}, false);


function addition() {

  const first_operand = document.getElementById('first-number').value;
  const second_operand = document.getElementById('second-number').value;

  httpGet(`/api/calculator/add/${first_operand}/${second_operand}`).
  then((res)=> {res.text()
      .then((res) => {displayAnswer(res)})
  })
}

function subtraction() {

  const first_operand = document.getElementById('first-number').value;
  const second_operand = document.getElementById('second-number').value;

  httpGet(`/api/calculator/subtract/${first_operand}/${second_operand}`).
  then((res)=> {res.text()
      .then((res) => {displayAnswer(res)})
  })
}


function multiplication() {

  const first_operand = document.getElementById('first-number').value;
  const second_operand = document.getElementById('second-number').value;

  httpGet(`/api/calculator/multiply/${first_operand}/${second_operand}`).
  then((res)=> {res.text()
      .then((res) => {displayAnswer(res)})
  })
}


function division() {

  const first_operand = document.getElementById('first-number').value;
  const second_operand = document.getElementById('second-number').value;

  httpGet(`/api/calculator/divide/${first_operand}/${second_operand}`).
  then((res)=> {res.text()
      .then((res) => {displayAnswer(res)})
  })
}

function httpGet(path) {
  return fetch(path, getOptions('GET'))
}


function getOptions(verb, data) {
  const options = {
    dataType: 'json',
    method: verb,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  return options;
}
