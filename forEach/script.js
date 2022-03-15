const paragraph = document.querySelectorAll('p');


paragraph.forEach((item) => {
    item.addEventListener('click', () =>{
        console.log(item.innerText)
    });
})
