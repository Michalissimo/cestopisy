
function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('current-time').textContent = `${year} • ${hours}:${minutes}:${seconds}`;
    
}
updateTime(); 
setInterval(updateTime, 1000);