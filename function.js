
/**
 * function for analogue clock
 * @param {*} time 
 * @param {*} current 
 * @returns 
 */

function msh(time,current){
    return (360 * current) / time;
}


/**
 * function for analogue clock
 * @param {*} value 
 */
let resive;
 let value_arr = [];
let get_val = (value) =>{
    value_arr.push(value);
    document.querySelector('.monitor-top').innerHTML = value_arr.join('');
    document.querySelector('.main-monitor').innerHTML = 0;
};


let all_clear = () =>{
    value_arr = [];
    document.querySelector('.monitor-top').innerHTML = '';
    document.querySelector('.main-monitor').innerHTML = 0;
}




let calculet = () =>{
    document.querySelector('.main-monitor').innerHTML = eval(value_arr.join(''));
}
let back = () =>{
    value_arr.pop();
    document.querySelector('.monitor-top').innerHTML = value_arr.join('');
}
