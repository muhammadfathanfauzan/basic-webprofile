const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: targetSection.offsetTop
  });

  // Hapus kelas 'active' dari semua tautan menu
  links.forEach(link => {
    link.classList.remove('active');
  });

  // Tambahkan kelas 'active' ke tautan yang sedang diklik
  this.classList.add('active');
}
