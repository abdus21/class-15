

const skills = document.querySelectorAll('.skills');
const show_data = document.querySelector('.show_data');

skills.forEach(skill =>{

    skill.addEventListener('change', function(){

        let checked = document.querySelectorAll('.skills:checked');
        let data_arr = [];
         checked.forEach(data =>{
            data_arr.push(data.value);
         });
         let list = '';
         data_arr.forEach(data =>{
            list += `<li class="list-group-item">${data}</li>`
         })
         show_data.innerHTML = list;
         console.log(data_arr)
  
    });
})

