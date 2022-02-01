
/**
 * function for analogue clock
 * @param {*} time 
 * @param {*} current 
 * @returns 
 */

function msh(time,current){
    return (360 * current) / time;
}

let value_arr = [];
let get_val = (value) =>{
    value_arr.push(value);
    document.querySelector('.monitor-top').innerHTML = value_arr.join('')
}

