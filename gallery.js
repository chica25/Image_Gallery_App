const modal = document.querySelector('.modal');
const preview = document.querySelectorAll('.gallery');
const mainImage = document.querySelector('.main-img');
const imageText = document.querySelector('.caption');

preview.forEach(preview => {
   preview.addEventListener('click', () => {
       modal.classList.add('open');
       original.classList.add('open')
       const originalSource = preview.getAttribute('data-original')
        original.src = `./lg_images/${originalSource}`
   }) 
})

modal.addEventListener('click', (e) => {
   if(e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open')
   }
})