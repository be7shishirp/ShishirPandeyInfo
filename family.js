// small hover / touch 3d effect
document.addEventListener('pointermove', (e)=>{
  document.querySelectorAll('.member').forEach(el=>{
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width/2);
    const dy = e.clientY - (r.top + r.height/2);
    el.style.transform = `perspective(700px) rotateX(${(-dy/20).toFixed(2)}deg) rotateY(${(dx/20).toFixed(2)}deg)`;
  });
});