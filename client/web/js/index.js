// ----- HTML Elements -----
const navigation = document.getElementsByClassName("navigation-container")[0];
const listItems = navigation.children[1].children[1].children;
const content = document.getElementsByClassName('content-container')[0];


// ----- State Change -----
changeActive = active => {

    for(let j = 0; j < listItems.length; j++)
        listItems[j].classList.remove('active');

    switch(active) {
        case 'application':
            document.getElementById('application').classList.add('active');

            fetch('modules/application.html',)
                .then(res => res.text())
                .then(page => content.innerHTML = page);

            break;
        case 'about':
            document.getElementById('about').classList.add('active');

            fetch('modules/about.html',)
                .then(res => res.text())
                .then(page => content.innerHTML = page);

            break;
        default:
            break;
    }
}


state.subscribe = changeActive;


navigation.children[1].children[0].addEventListener('click', e => {
    if(navigation.classList.contains('active'))
        navigation.classList.remove('active');
    else
        navigation.classList.add('active');
})


for(let i = 0; i < listItems.length; i++)
    listItems[i].addEventListener("click", e => {
        state.active = e.target.id;                     // Setting active page
        navigation.classList.remove('active');          // Removing 'active' state from navigation
    })


function handleSubmit(e) {
    // e.preventDefault();
    // console.log('button pressed')
    let returnValue = '';
    fetch('http://localhost:5000/ping')
        .then(res => res.text())
        .then(data => document.getElementById('return-value').innerHTML = data)
        .catch(err => document.getElementById('return-value').innerHTML = err);
    
    
    // document.getElementById('return-value').innerHTML = returnValue;
}