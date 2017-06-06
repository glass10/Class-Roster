const personForm = document.querySelector('#personForm');
personForm.addEventListener('submit', handleSubmit);

const students= [];

function handleSubmit(ev){
    ev.preventDefault();
    const f = ev.target;
    const studentName = f.name.value;
    const studentImage = f.image.value;
    
    const student = {
    name: studentName,
    image: studentImage,
    status: "OK"
}

    const list = document.createElement('p');

    students.push(student);
    for(var i = 0; i < students.length; i++){
        console.log(students[i].name);
        const name = students[i].name;
        const image = students[i].image;
        const item = document.createElement('img');
        item.innerHTML = `<img src=${image} alt=${name} style="width:150px;height:150px;">`
        list.appendChild(item);
    }
    grid.innerHTML = "";
    grid.appendChild(list);

    /*{<div class="card">
                <img class="card-img" src="http://placehold.it/350x300" alt="header" />
                <div class="card-info">
                <h1 class="card-title">Card Title</h1>
                <div class="card-icon"></div>
                <p class="card-stats">6 <img src="http://placehold.it/20" alt="hi" /> 6 <img src="http://placehold.it/20" alt="hi" /></p>
                </div>
            </div>}*/

}
