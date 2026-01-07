const profileImg = document.querySelector('.profile-image');
profileImg.addEventListener('click', () => {
  profileImg.style.transform = 'scale(1.1)';
  setTimeout(() => profileImg.style.transform = 'scale(1)', 200);
});

