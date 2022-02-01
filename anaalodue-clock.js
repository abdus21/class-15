

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

/**
 * new clock
 */
const clock = document.querySelector('.clock')


setInterval(()=>{

    let timee = new Date();
    let sss = timee.getSeconds();
    let mmm = timee.getMinutes();
    let hhh = timee.getHours();
    
    clock.firstElementChild.style.transform = `rotate(${msh(60,sss)}deg)`;
    clock.firstElementChild.nextElementSibling.style.transform =  `rotate(${msh(60,mmm)}deg)`;
    clock.firstElementChild.nextElementSibling.nextElementSibling.style.transform = `rotate(${msh(12,hhh)}deg)`;

},1000)