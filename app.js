

let skills = document.querySelectorAll('.skills');
let show_data = document.querySelector('.show_data');

skills.forEach(skill =>{

    skill.addEventListener('change', function(){
        let all_data =  document.querySelectorAll('.skills:checked');

        let data_arr = []
        all_data.forEach(data =>{
            data_arr.push(data.value)
        });

        let list = '';
        data_arr.forEach(data =>{
            list += `<li class="list-group-item">${data}</li>`
        });
        show_data.innerHTML = list;
    })
})
