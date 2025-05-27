function showSection(id) {
  document.querySelectorAll('.wrapper').forEach(div => div.classList.remove('active'));
  document.getElementById(id + '-section').classList.add('active');
}

function goBack() {
  document.querySelectorAll('.wrapper').forEach(div => div.classList.remove('active'));
  document.getElementById('main-card').classList.add('active');
}
