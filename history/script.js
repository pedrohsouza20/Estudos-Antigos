const links = document.querySelectorAll('a');
const content = document.querySelector('.content');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        fetchPage(link, link.href);
    })
})

function fetchPage(link, linkAdress){
    let fetchSelected = fetch(linkAdress);
    
    fetchSelected
    .then((res, rej) => {
        return res.text();
    })
    .then((res) => {
        changeContent(link, res);
    })
}

function changeContent(link, response){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = response;

    let oldContent = document.querySelector('.content');
    let newContent = newDiv.querySelector('.content');

    oldContent.innerHTML = newContent.innerHTML;

    document.title = newDiv.querySelector('title').innerText;

    //console.log("location: " + window.location);
    let newPath = link.href;
    

    console.log(window.location.href);
    
    window.history.replaceState(null, null, newPath);
}