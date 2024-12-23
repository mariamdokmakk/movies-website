const movies = document.querySelectorAll('.movies');
const leftArrows = document.querySelectorAll('.arrow.left');
const rightArrows = document.querySelectorAll('.arrow.right');

leftArrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        movies[index].scrollBy({ left: -220, behavior: 'smooth' });
    });
});

rightArrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        movies[index].scrollBy({ left: 220, behavior: 'smooth' });
    });
});
  