// simple gallery loader & lightbox for images placed in /assets
const galleryImages = ['pic1.jpg','pic2.jpg','pic3.jpg','palpa.jpg','butwal.jpg']; // replace with your uploaded filenames
function populateGallery(){
  const grid = document.getElementById('gallery-grid');
  galleryImages.forEach(fn=>{
    const img = document.createElement('img');
    img.src = `assets/${fn}`;
    img.alt = fn;
    img.addEventListener('click', ()=> openLightbox(img.src));
    grid.appendChild(img);
  });
}
function openLightbox(src){
  const lb = document.createElement('div'); lb.className='lightbox';
  const im = document.createElement('img'); im.src=src;
  lb.appendChild(im);
  lb.addEventListener('click',()=>lb.remove());
  document.body.appendChild(lb);
}
window.addEventListener('DOMContentLoaded', populateGallery);