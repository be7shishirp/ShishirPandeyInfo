// live age counter using AD date provided by user
(function(){
  const birth = new Date('2004-10-23T23:17:00'); // AD birth time provided
  const display = document.getElementById('live-age');
  const summary = document.getElementById('live-summary');

  function pad(n){return String(n).padStart(2,'0')}
  function update(){
    const now = new Date();
    let diff = now - birth; // ms
    if(diff<0) diff=0;
    const totalSeconds = Math.floor(diff/1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds/60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes/60);
    const hours = totalHours % 24;
    const totalDays = Math.floor(totalHours/24);
    const days = totalDays % 30; // approx months
    const totalMonths = Math.floor(totalDays/30);
    const months = totalMonths % 12;
    const years = Math.floor(totalMonths/12);

    display.innerHTML = `<strong>Age (live):</strong> ${years} years, ${months} months, ${days} days, ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    summary.innerHTML = `
      <div class="number">Total days: ${totalDays.toLocaleString()}</div>
      <div class="number">Total hours: ${(Math.floor(totalHours)).toLocaleString()}</div>
      <div class="number">Total minutes: ${totalMinutes.toLocaleString()}</div>
      <div class="number">Total seconds: ${totalSeconds.toLocaleString()}</div>
    `;
  }
  update();
  setInterval(update,1000);
})();