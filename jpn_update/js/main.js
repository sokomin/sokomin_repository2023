fetch('https://sokomin.github.io/sokomin_repository2023/jpn_update/update_0.0728.csv')
  .then(response => response.text())
  .then(data => {
    document.getElementById('content').innerText = data;
  })
  .catch(error => console.error('Error:', error));