
const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');

setInterval(()=>{
    let date = new Date();
    let getsec = date.getSeconds();
    let getmin = date.getMinutes()
    let gethours = date.getHours()
    sec.style.transform = `rotate(${msh(60, getsec)}deg)`
    min.style.transform = `rotate(${msh(60, getmin)}deg)`
    hour.style.transform = `rotate(${msh(12, gethours)}deg)`

},1000)