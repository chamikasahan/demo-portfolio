  // Fetch the navigation bar content
  fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    // Insert the navigation bar content into the navbar-container div
    document.getElementById('navbar-container').innerHTML = data;
  })
  .catch(error => console.error('Error fetching navigation bar:', error));

