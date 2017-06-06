const personForm = document.querySelector('#personForm');
personForm.addEventListener('submit', handleSubmit);

function handleSubmit(ev){
    ev.preventDefault();
    const f = ev.target;
    console.log("we in here");

}