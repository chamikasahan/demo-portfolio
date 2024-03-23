// Fetch the footer content separately
fetch('footer.html')
  .then(response => response.text())
  .then(footerData => {
    // Insert the footer content into the footer-container div
    document.getElementById('footer-container').innerHTML = footerData;
  })
  .catch(error => console.error('Error fetching footer:', error));