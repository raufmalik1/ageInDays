//Challenge 1: Age in days

//document.querySelector('.birthdate').value = '1983-04-28';

let birthdateInput, birthdateOutput, result;

const ageInDays = function () {
  birthdateInput = document.querySelector('.birthdate').value;
  if (document.querySelector('.birthdate').value === '') {
    document.querySelector('#result').textContent = `Enter your birthday above`;
  } else {
    birthdateOutput = birthdateInput.replace(/ - /g, ', ');
    result = Math.floor(
      (new Date() - new Date(birthdateOutput)) / (1000 * 60 * 60 * 24)
    );
    document.querySelector(
      '#result'
    ).textContent = `You are exactly ${result} days old`;
  }
};

const reset = function () {
  document.querySelector('#result').textContent = ``;
};

document.querySelector('.btn-primary').addEventListener('click', ageInDays);

document.addEventListener('keydown', function (e) {
  birthdateInput = document.querySelector('.birthdate').value;
  if (e.code === 'Enter') {
    ageInDays();
  }
});

document.querySelector('.btn-warning').addEventListener('click', reset);

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    reset();
  }
});

// NOTES:

// 1. register input birthdate and assign to variable

// 2. convert format from (1983 - 04 - 08) to (1983, 03, 28)

// 3. calculate age in days

// 4. display age in days in results id

// 5. display message to input birthdate if nothing is etered

// 6. add keypresses to check (enter) and cancel (esc)

/*
var testDate = '1983 - 04 - 28';
let convTestDate = testDate.replace(/ - /g, ', ');
console.log(convTestDate);

console.log((new Date() - new Date(convTestDate)) / (1000 * 60 * 60 * 24));

console.log(new Date(1983, 03, 28));

console.log(new Date(1983 - 03 - 08));

console.log((new Date() - new Date(1983, 03, 28)) / (1000 * 60 * 60 * 24));


function reset() {
  document.getElementById('ageInDays').remove();
}
*/
