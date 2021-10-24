fetch('https://www.boredapi.com/api/activity')
  .then((response) => response.json())
  .then((result) => {
    const catFactsDiv = document.getElementById('activity');
    catFactsDiv.innerText = result.activity;
  });
