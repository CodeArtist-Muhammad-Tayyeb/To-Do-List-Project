const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('You must writing something!');
    } else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    savedData();
}

listContainer.addEventListener('click', e => { // Arrow ftn
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savedData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedData();
    }
});

function savedData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask();