'use strict';


function fetchRandomImage() {
 fetch('https://dog.ceo/api/breeds/image/random')
 .then(response => response.json())
 .then(responseJson => 
 console.log(responseJson).val('#input'));
}


function main() {
  $('form').submit((event) => {
    event.preventDefault();
    fetchRandomImage();
  });
}


 $(main);