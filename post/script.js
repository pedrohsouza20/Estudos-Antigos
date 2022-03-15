const url = 'https://jsonplaceholder.typicode.com/posts/';
const postOptions = {
    method: 'POST',
    body: '{"titulo": "Teste de POST"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
}

fetch(url, postOptions)
.then(response => response.json())
.then(json => console.log(json))

