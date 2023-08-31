
let launchDate = new Date("Sep 6, 2023 16:00:00").getTime();
let timer = setInterval(tick, 1000);

function tick() {
  let now = new Date().getTime();
  let t = launchDate - now;
  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) { days = "0" + days; }
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }
    let time = `${days}d, ${hours}h, ${mins}m e ${secs}s `;
    document.querySelector('.countdown').innerText = time;
  } else {
    document.querySelector('.countdown').innerText = `Pede pro gilberto colocar a próx. data :)`;
    clearInterval(timer);
  }
}

