console.log('meow meow');

fetch('https://www.boredapi.com/api/activity')
  .then((response) => response.json())
  .then((result) => {
    const catFactsDiv = document.getElementById('catfacts');
    catFactsDiv.innerText = result.activity;
    
  });
