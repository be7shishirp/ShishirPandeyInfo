// global animations, rainbow text hue-rotate, continuous project flow
(function(){
  // subtle hue shift on headings
  const heading = document.getElementById('main-heading');
  let h=0;setInterval(()=>{h=(h+1)%360;heading.style.filter = `hue-rotate(${h}deg)`;},120);

  // floating papers in hero
  const hero = document.querySelector('.top-hero');
  for(let i=0;i<6;i++){
    const p = document.createElement('div'); p.className='floating-paper';
    p.style.left = (10 + i*12) + '%'; p.style.top = (10 + (i%3)*12)+'%';
    p.style.transform = `rotate(${i*7}deg)`; p.style.opacity = 0.08 + Math.random()*0.16;
    hero.appendChild(p);
  }

  // project flow: create continuous scrolling project cards
  const projects = [
    {title:'Audit Dashboard',desc:'Tally + Excel audit file demo',link:'#'},
    {title:'Personal Site',desc:'This website (design + code)',link:'#'},
    {title:'Data Cleanup',desc:'Excel automation',link:'#'}
  ];
  const flow = document.getElementById('project-flow');
  projects.forEach(p=>{
    const c = document.createElement('div'); c.className='project-card';
    c.innerHTML = `<h4>${p.title}</h4><p>${p.desc}</p><a class="pabble" href="${p.link}">View</a>`;
    flow.appendChild(c);
  });
  // duplicate to create continuous loop
  projects.forEach(p=>{const c = document.createElement('div'); c.className='project-card';c.innerHTML=`<h4>${p.title}</h4><p>${p.desc}</p><a class="pabble" href="${p.link}">View</a>`;flow.appendChild(c)});
  // animate scroll
  let pos=0;function tick(){pos = (pos+0.25)% (flow.scrollWidth/2);flow.scrollLeft = pos;requestAnimationFrame(tick)}tick();

})();