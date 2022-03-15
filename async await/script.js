async function px() {
    const newFetch = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const fetchObject = await newFetch.json()
    const showTitle = console.log(fetchObject[5].title);
}
px()

setTimeout(()=>{
    console.log('teste')
},1000)