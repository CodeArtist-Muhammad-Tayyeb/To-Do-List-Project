const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const body = document.body;

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.insertBefore(li, listContainer.firstChild); // places li at the very beginning of listContainer, before any other items that might already be in the list.
                                                                  // The last task will be first of li.
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

function toggleDarkMode() {
    body.classList.toggle('darkMode');
    localStorage.setItem('modes', body.classList.contains('darkMode') ? 'dark' : 'light');
}
function showMode() {
    const savedMode = localStorage.getItem('modes');
    if (savedMode === 'dark') {
        body.classList.add('darkMode');
    } else {
        body.classList.remove('darkMode');
    }
}
showMode();

inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});