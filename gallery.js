const modal = document.querySelector('.modal');
const smallImages = document.querySelectorAll('.gallery img');
const mainImage = document.querySelector('.large-img');
const caption = document.querySelector('.caption');

smallImages.forEach((preview) => {
   preview.addEventListener('click', () => {
       modal.classList.add('open');
       mainImage.classList.add('open')
       const originalSrc = preview.getAttribute('data-original')
       mainImage.src = `./lg_images/${originalSrc}`
       const altText = preview.alt
       caption.textContent = altText;
   }) 
})

modal.addEventListener('click', (e) => {
   if(e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open')
   }
})