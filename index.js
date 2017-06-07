const personForm = document.querySelector('#personForm');
personForm.addEventListener('submit', handleSubmit);

const students= [];

function okay(id){
    const icon = document.getElementById(id+"-icon");

    for(var i = 0; i < students.length; i++){
        if(students[i].name === id){
            students[i].status = "OK";
        }
    }

    icon.style.backgroundColor = "LightGreen";
    console.log("okay");
}

function late(id){
    const icon = document.getElementById(id+"-icon");

    for(var i = 0; i < students.length; i++){
        if(students[i].name === id){
            students[i].status = "LATE";
        }
    }

    icon.style.backgroundColor = "Orange";
    console.log("late");
}

function absent(id){
    const icon = document.getElementById(id+"-icon");

    for(var i = 0; i < students.length; i++){
        if(students[i].name === id){
            students[i].status = "ABSENT";
        }
    }

    icon.style.backgroundColor = "Red";
    console.log("absent");
}

function remove(id){
    console.log("ID: "+id);
    for(var i = 0; i < students.length; i++){
        console.log("Student Name: " + students[i].name);
        if(students[i].name === id){
            students.splice(i, 1);
        }
    }

    var d1 = document.getElementById('grid');
    d1.innerHTML = "";

    for(var i = 0; i < students.length; i++){
        console.log(students[i].name);
        const name = students[i].name;
        const image = students[i].image;
        const status = students[i].status;
        d1.insertAdjacentHTML('afterbegin', createCard(name, image, name+"-icon", status));
    }
}

function handleSubmit(ev){

    ev.preventDefault();
    const f = ev.target;
    const studentName = f.name.value;
    const studentImage = f.image.value;
    
    const student = {
    name: studentName,
    image: studentImage,
    status: "NEW"
}

    var d1 = document.getElementById('grid');
    d1.innerHTML = "";

    students.push(student);

    for(var i = 0; i < students.length; i++){
        console.log(students[i].name);
        const name = students[i].name;
        let image = students[i].image;
        if(image === ""){
            image = "http://hope4merton.com/wp-content/uploads/2015/12/profile-placeholder.gif";
            students[i].image = image;
        }
        const status = students[i].status;
        d1.insertAdjacentHTML('afterbegin', createCard(name, image, name+"-icon", status));
    }

}

function createCard(name, image, icon, status){
    const card = `
        <div class="card">
                <img src="${image}" alt="Profile/>
                <div class="card-info">
                <h1 class="card-title">${name}</h1>
                <div class="card-icon-${status}" id="${icon}"></div>
                <p class="card-buttons" id="${name}">
                    <button class="c-buttons" type="button" id="ok" onClick = okay(this.parentNode.id)>Here</button> 
                    <button type="button" class="c-buttons" id="late" onClick = late(this.parentNode.id)>Late</button> 
                    <button type="button" class="c-buttons" id="absent" onClick = absent(this.parentNode.id)>Absent</button>   
                    <button type="button" class="c-buttons" id="delete" onClick = remove(this.parentNode.id)>X</button>
                    </p>
                </div>
            </div>
    `;

    return card;
}
