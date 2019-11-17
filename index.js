"use strict";

let numDog = 0;

function getDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random/" + numDog)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log("Something went wrong! Try again later!"));
}

function displayResults(responseJson) {
  console.log(responseJson);
}

function watchGetForm() {
  $("#getDogs").submit(event => {
    event.preventDefault();
    numDog = $(".howManyDogs").val();
    getDogImage();
  });
}

function startDog() {
  console.log("Success!");
  watchGetForm();

}

$(startDog);