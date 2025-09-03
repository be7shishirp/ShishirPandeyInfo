// nothing heavy required here — links created in HTML. We'll attach a small effect to map links
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.map-link').forEach(a=>{
    a.addEventListener('pointerdown',()=>{
      a.animate([{transform:'scale(1)'},{transform:'scale(.96)'}],{duration:150,fill:'forwards'});
    });
  });
});