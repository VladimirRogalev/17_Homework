
setInterval(printTime, 1000);
setInterval(changeColors, 1000)


function changeColors () {
    const colors = ['violet', 'red', 'yellow', 'blue', 'pink', 'green'];
    const body = document.querySelector("body");
    const colorIndex=Math.floor(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
}
function printTime() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    document.getElementById("root").innerHTML= `<h1>${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}</h1>`;

 }
