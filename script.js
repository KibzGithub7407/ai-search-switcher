// Show engine options after submitting the query
document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('engine-section').style.display = 'block';
});

// Allow engine buttons to open the selected tool with the query
document.querySelectorAll('.engine-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var query = document.getElementById('search-query').value.trim();
    if (!query) return;
    var url = btn.getAttribute('data-url').replace('%QUERY%', encodeURIComponent(query));
    window.open(url, '_blank');
  });
});
