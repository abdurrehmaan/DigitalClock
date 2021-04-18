const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span>${h < 10 ? "0"+h:h}</span>:
    <span>${m < 10 ? "0"+m:m}</span>:
    <span>${s < 10 ? "0"+s:s}</span>`;
    
    clock.innerHTML = html;
}

setInterval(tick, 1000);